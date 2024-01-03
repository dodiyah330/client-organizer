import { Router } from "express";
import {
  createBusiness,
  getBusiness,
  deleteBusiness,
  updateBusiness,
  getBusinesses,
} from "../controller/businessDetails.js";
const router = Router();

router.route("/").post(createBusiness);
router.route("/").put(updateBusiness);
router.route("/allBusinesses").get(getBusinesses);
router.route("/:id").get(getBusiness);
router.route("/:id").delete(deleteBusiness);

export default router;
