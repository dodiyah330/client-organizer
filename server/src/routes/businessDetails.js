import { Router } from "express";
import {
  createBusiness,
  getBusiness,
  deleteBusiness,
  updateBusiness,
} from "../controller/businessDetails.js";
const router = Router();

// "659502d1c28308d463135c8c"

router.route("/").post(createBusiness);
router.route("/:id").get(getBusiness);
router.route("/:id").delete(deleteBusiness);
router.route("/").put(updateBusiness);
// router.route("/").get((req, res) => {
//   res.send("business on");
// });
// router 
//   .route("/:id")
//   .get(getClientById)
//   .delete(deleteClientById)
//   .put(updateClientById);

export default router;
