import { Router } from "express";
import {
  createBusiness,
  getBusiness,
  deleteBusiness,
  updateBusiness,
  getBusinesses,
} from "../controller/businessDetails.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

const imgUpload = upload.fields([
  { name: "proof", maxCount: 1 },
  { name: "gstCertificate", maxCount: 1 },
  { name: "cinCertificate", maxCount: 1 },
]);

router.route("/").post(imgUpload, createBusiness);
router.route("/").put(imgUpload, updateBusiness);
router.route("/allBusinesses").get(getBusinesses);
router.route("/:id").get(getBusiness);
router.route("/:id").delete(deleteBusiness);

export default router;
