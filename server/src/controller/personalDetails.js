import asyncHandler from "express-async-handler";
import personalDetailsModel from "../model/personalDetailsModel.js";

//@description Register a Client
//@route POST /api/patient/registeration-Client
//@access public

export const createClient = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    aadharNo,
    panNo,
    bankName,
    branch,
    accNo,
    ifscCode,
    proof,
  } = req.body;

  const clientAvailable = await personalDetailsModel.findOne({ firstName });
  if (clientAvailable) {
    res.status(400);
    throw new Error("Client already registered");
  }
  const client = await personalDetailsModel.create({
    firstName,
    lastName,
    aadharNo,
    panNo,
    bankName,
    branch,
    accNo,
    ifscCode,
    proof,
  });
  console.log(`Client created successfully ${client}`);
  if (client) {
    res.status(201).json({
      _id: client.id,
      client_name: firstName,
      message: "Client created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Client data is not valid");
  }
  res.json({ message: "Register the Client" });
});
