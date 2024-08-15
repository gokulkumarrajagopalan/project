require('dotenv').config();
const AWS = require('aws-sdk');

// Configure AWS S3 with credentials from environment variables
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

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

module.exports = uploadFileToS3;
