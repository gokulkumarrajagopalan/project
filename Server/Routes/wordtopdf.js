const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

// Set up multer for in-memory storag
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Create paths in /tmp directory
    const tempDir = './uploads';
    const inputPath = path.join(tempDir, req.file.originalname);
    const outputPath = path.join(tempDir, `${path.parse(req.file.originalname).name}.pdf`);

    try {
        // Save the uploaded file to the temporary directory
        await fs.writeFile(inputPath, req.file.buffer);

        // Convert the file to PDF
        const docxBuf = await fs.readFile(inputPath);
        const pdfBuf = await libre.convertAsync(docxBuf, '.pdf', undefined);

        // Save the converted PDF file
        await fs.writeFile(outputPath, pdfBuf);

        // Send the converted file
        res.download(outputPath, `${path.parse(req.file.originalname).name}.pdf`, async (err) => {
            if (err) {
                console.error('Error sending file:', err);
                return res.status(500).send('Error sending file.');
            }

            // Clean up temporary files
            await fs.unlink(outputPath);
            await fs.unlink(inputPath);
        });

    } catch (error) {
        console.error('Error converting file:', error);
        res.status(500).send('Error converting file.');
    }
});

module.exports = router;
