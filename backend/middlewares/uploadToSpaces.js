const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

const url = process.env.DO_SPACES_URL;
const bucketName = process.env.DO_SPACES_BUCKET_NAME;
const region = process.env.DO_SPACES_REGION;
const accessKeyId = process.env.DO_SPACES_KEY;
const secretAccessKey = process.env.DO_SPACES_SECRET;

// Configure the AWS SDK with DigitalOcean Spaces credentials
const spacesEndpoint = new AWS.Endpoint(`${region}.digitaloceanspaces.com`);
const s3 = new AWS.S3({
  useDualstackEndpoint: true,
  s3ForcePathStyle: true,
  endpoint: spacesEndpoint,
  accessKeyId,
  secretAccessKey,
  region
});

// Upload a file function
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.originalname,// Assuming file.originalname is the desired filename
    ACL: 'public-read'
  };
  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;

//Download a file Function
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  };
  return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream; 
