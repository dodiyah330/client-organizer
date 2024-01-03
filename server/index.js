import express, { json } from "express";
import errorHandler from "./src/middleware/errorHandler.js";
import connectDb from "./src/config/dbConnection.js";
import PersonalDetails from "./src/routes/personalDetails.js";
import BusinessDetails from "./src/routes/businessDetails.js";
// import PatientRoutes from "./source/routes/PatientRoute.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
connectDb();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use("/api/personalDetails", PersonalDetails);
app.use("/api/businessDetails", BusinessDetails);
// app.use("/api/patient", PatientRoutes);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
