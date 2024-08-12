require('dotenv').config();
const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');

// Configure AWS S3 with credentials from environment variables
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// Set up multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

async function uploadFileToS3(fileBuffer, fileName, folder) {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${folder}/${fileName}`,
        Body: fileBuffer
    };

    try {
        const data = await s3.upload(params).promise();
        console.log(`File uploaded successfully at ${data.Location}`);
        return data.Location;
    } catch (err) {
        console.error('Error uploading file:', err);
        throw err;
    }
}

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        console.error('No file uploaded.');
        return res.status(400).send('No file uploaded.');
    }

    const inputFileName = req.file.originalname;

    try {
        console.log('Uploading the DOCX file to S3...');
        const fileUrl = await uploadFileToS3(req.file.buffer, inputFileName, 'upload');

        console.log('File uploaded successfully.');
        res.status(200).json({ message: 'File uploaded successfully', fileUrl });

    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file.');
    }
});

module.exports = router;
