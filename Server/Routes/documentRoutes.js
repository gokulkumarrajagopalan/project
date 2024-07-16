const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const libre = require('libreoffice-convert');

// Route to handle document processing
router.post('/process', async (req, res) => {
      console.log("im running cecking that !")
  // Static value for candidateName (for testing)
  const candidateName = 'John Doe'; // Replace with any static name for testing

  const templatePath = path.join(__dirname, '../../templates/template.docx'); // Adjust this path accordingly
  const outputPdfPath = path.join(__dirname, '../../uploads/output_resume.pdf'); // Path to save the output PDF

  // Data to populate the template
  const data = {
    CandidateName: candidateName,
    // Add more placeholders and data here as needed
  };

  try {
    // Read the template file
    const content = fs.readFileSync(templatePath, 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);

    // Set data for template rendering
    doc.setData(data);

    // Render the document
    doc.render();

    // Generate output buffer
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });

    // Convert to PDF
    const convertToPdf = async () => {
      return new Promise((resolve, reject) => {
        const extend = '.pdf';

        libre.convert(buffer, extend, undefined, async (err, done) => {
          if (err) {
            console.log(`Error converting file: ${err}`);
            reject(err);
          }
          console.log(`Converted file: ${done}`);

          // Write the PDF to the server
          fs.writeFileSync(outputPdfPath, done);

          resolve(outputPdfPath);
        });
      });
    };

    const pdfPath = await convertToPdf();

    // Send the PDF for download
    res.download(pdfPath, 'output_resume.pdf', (err) => {
      if (err) throw err;

      // Optionally, clean up temporary files
      fs.unlinkSync(pdfPath);
    });
  } catch (error) {
    console.error('Error processing document:', error);
    res.status(500).send('Error processing document');
  }
});

module.exports = router;
