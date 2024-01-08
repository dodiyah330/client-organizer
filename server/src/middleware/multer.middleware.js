import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dkzksp0e5',
  api_key: '868497875342488',
  api_secret: 'X3l4DLxVBeuGPU_5JkLrnCM55pA',
});

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
});

export const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided'));
    }

    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });

    uploadStream.end(file.buffer);
  });
};
