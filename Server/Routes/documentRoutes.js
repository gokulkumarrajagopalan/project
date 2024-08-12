const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const libre = require('libreoffice-convert');

router.post('/process', async (req, res) => {
  console.log("Processing document...");

  const candidateName = 'John Doe';
  const templatePath = path.join(__dirname, '../templates/template.docx');
  const outputPdfPath = path.join(__dirname, '../templates/output_resume.pdf');

  if (!fs.existsSync(templatePath)) {
    console.error('Template file not found:', templatePath);
    return res.status(500).send(`Template file not found at path: ${templatePath}`);
  }

  const data = { CandidateName: candidateName };

  try {
    console.log("Reading template file...");
    const content = fs.readFileSync(templatePath, 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);

    console.log("Data to be set:", data);
    doc.setData(data);

    try {
      console.log("Setting data and rendering...");
      doc.render();
    } catch (renderError) {
      console.error("Error during document rendering:", renderError);
      return res.status(500).send(`Error during document rendering: ${renderError.message}`);
    }

    const buffer = doc.getZip().generate({ type: 'nodebuffer' });

    console.log("Saving DOCX buffer for inspection...");
    fs.writeFileSync('temp_output.docx', buffer);

    console.log("Converting to PDF...");
    const pdfPath = await convertToPdf(buffer, outputPdfPath);

    console.log("Sending PDF for download...");
    res.download(pdfPath, 'output_resume.pdf', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        return res.status(500).send(`Error sending file: ${err.message}`);
      }

      fs.unlinkSync(pdfPath);
    });

  } catch (error) {
    console.error('Error processing document:', error);
    res.status(500).send(`Error processing document: ${error.message}`);
  }
});

const convertToPdf = (buffer, outputPdfPath) => {
  return new Promise((resolve, reject) => {
    const extend = '.pdf';

    libre.convert(buffer, extend, undefined, (err, done) => {
      if (err) {
        console.error(`Error converting file: ${err}`);
        return reject(err);
      }

      try {
        fs.writeFileSync(outputPdfPath, done);
        resolve(outputPdfPath);
      } catch (fsErr) {
        console.error('Error writing PDF file:', fsErr);
        reject(fsErr);
      }
    });
  });
};

module.exports = router;
