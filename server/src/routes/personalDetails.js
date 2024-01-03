import { Router } from "express";
import { createClient } from "../controller/personalDetails.js";
const router = Router();

router.route("/create").post(createClient);
// router.route("/").get(getClient);
// router
//   .route("/:id")
//   .get(getClientById)
//   .delete(deleteClientById)
//   .put(updateClientById);

export default router;
