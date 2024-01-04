import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniquePreffix = Date.now();
    cb(null, uniquePreffix + "-" + file.originalname);
  },
});

export const upload = multer({
  storage,
});
