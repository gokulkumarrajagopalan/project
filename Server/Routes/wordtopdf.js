const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const libre = require('libreoffice-convert');

// Set up multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        console.error('No file uploaded.');
        return res.status(400).send('No file uploaded.');
    }

    const tempDir = '/tmp'; // AWS Lambda or similar environments use /tmp for writable storage
    const inputPath = path.join(tempDir, req.file.originalname);
    const outputPdfPath = path.join(tempDir, `${req.file.filename}.pdf`);

    console.log(`Input path: ${inputPath}`);
    console.log(`Output path: ${outputPdfPath}`);

    try {
        // Save the uploaded file to the temporary directory
        fs.writeFileSync(inputPath, req.file.buffer);
        console.log('File saved to:', inputPath);

        // Convert the file
        const buffer = fs.readFileSync(inputPath);
        console.log('Starting conversion.');

        await new Promise((resolve, reject) => {
            libre.convert(buffer, '.pdf', undefined, (err, done) => {
                if (err) {
                    console.error('Conversion error:', err);
                    return reject(err);
                }
                fs.writeFileSync(outputPdfPath, done);
                console.log('Conversion complete. File saved to:', outputPdfPath);
                resolve();
            });
        });

        // Send the converted file
        res.download(outputPdfPath, 'converted_document.pdf', (err) => {
            if (err) {
                console.error('Error sending file:', err);
                return res.status(500).send('Error sending file.');
            }

            // Clean up temporary files
            fs.unlinkSync(outputPdfPath);
            fs.unlinkSync(inputPath);
            console.log('Temporary files cleaned up.');
        });

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Error processing request.');
    }
});

module.exports = router;
