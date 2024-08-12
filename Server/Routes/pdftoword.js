const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');

// Set up multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const inputPath = path.join('/tmp', `${req.file.originalname}`);
    const outputDocxPath = path.join('/tmp', `${req.file.originalname}.docx`);

    try {
        // Save the file to a temporary location
        fs.writeFileSync(inputPath, req.file.buffer);

        // Command to convert PDF to DOCX
        const command = `libreoffice --headless --convert-to docx:"MS Word 2007 XML" "${inputPath}" --outdir "/tmp"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error('Conversion error:', error);
                return res.status(500).send('Error converting file.');
            }

            // Check if the output file was created
            if (!fs.existsSync(outputDocxPath)) {
                console.error('Output file was not created:', outputDocxPath);
                return res.status(500).send('Output file was not created.');
            }

            res.download(outputDocxPath, 'converted_document.docx', (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                    return res.status(500).send('Error sending file.');
                }

                fs.unlinkSync(outputDocxPath); // Clean up
                fs.unlinkSync(inputPath);      // Clean up
            });
        });

    } catch (error) {
        console.error('Error converting file:', error);
        res.status(500).send('Error converting file.');
    }
});

module.exports = router;
