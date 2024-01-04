import { Router } from "express";
import {
  createPersonal,
  getPersonal,
  deletePersonal,
  updatePersonal,
  getPersonals,
} from "../controller/personalDetails.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

const imgUpload = upload.single("proof");

router.route("/create").post(imgUpload, createPersonal);
router.route("/").put(imgUpload, updatePersonal);
router.route("/allPersonal").get(getPersonals);
router.route("/:id").get(getPersonal);
router.route("/:id").delete(deletePersonal);

export default router;
