const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const libre = require('libreoffice-convert');

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Set up multer for file uploads
const upload = multer({ dest: uploadDir });

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const inputPath = req.file.path;
    const outputPdfPath = path.join(uploadDir, `${req.file.filename}.pdf`);

    try {
        const buffer = fs.readFileSync(inputPath);

        await new Promise((resolve, reject) => {
            libre.convert(buffer, '.pdf', undefined, (err, done) => {
                if (err) {
                    return reject(err);
                }
                fs.writeFileSync(outputPdfPath, done);
                resolve();
            });
        });

        res.download(outputPdfPath, 'converted_document.pdf', (err) => {
            if (err) {
                console.error('Error sending file:', err);
                return res.status(500).send('Error sending file.');
            }

            fs.unlinkSync(outputPdfPath);
            fs.unlinkSync(inputPath);
        });

    } catch (error) {
        console.error('Error converting file:', error);
        res.status(500).send('Error converting file.');
    }
});

module.exports = router;
