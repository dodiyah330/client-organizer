import { Router } from "express";
import {
  createPersonal,
  getPersonal,
  deletePersonal,
  updatePersonal,
  getPersonals
} from "../controller/personalDetails.js";
const router = Router();

router.route("/create").post(createPersonal);
router.route("/").put(updatePersonal);
router.route("/allPersonal").get(getPersonals);
router.route("/:id").get(getPersonal);
router.route("/:id").delete(deletePersonal);

export default router;
