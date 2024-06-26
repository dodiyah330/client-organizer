import asyncHandler from "express-async-handler";
import personalDetailsModel from "../model/personalDetailsModel.js";
import { isValidObjectId } from "mongoose";
import { uploadToCloudinary } from "../middleware/multer.middleware.js";

export const createPersonal = asyncHandler(async (req, res) => {
  try {
    const result = await uploadToCloudinary(req.file);

    req.body = {
      ...req.body,
      proof: result.secure_url,
    };

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

    // Availability Check

    const personalAvailable = await personalDetailsModel.findOne({
      aadharNo,
    });

    if (personalAvailable) {
      res.status(400);
      throw new Error("Person already registered");
    }

    const personal = await personalDetailsModel.create({
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

    if (personal) {
      res.status(201).json({
        _id: personal.id,
        data: personal,
        message: "Personal created successfully",
      });
    } else {
      res.status(400);
      throw new Error("Personal data is not valid");
    }
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

export const getPersonal = asyncHandler(async (req, res) => {
  const { id: personalId } = req.params;

  try {
    if (!isValidObjectId(personalId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const personal = await personalDetailsModel.findById(personalId);

    if (!personal) {
      res.status(404);
      throw new Error("Personal not found");
    }

    const {
      id,
      firstName,
      lastName,
      aadharNo,
      panNo,
      bankName,
      branch,
      accNo,
      ifscCode,
      proof,
    } = personal;

    res.status(200).json({
      _id: id,
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
  } catch (err) {
    res.send({ error: err.message });
  }
});

export const deletePersonal = asyncHandler(async (req, res) => {
  const { id: personalId } = req.params;
  try {
    if (!isValidObjectId(personalId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const personal = await personalDetailsModel.findById(personalId);

    if (!personal) {
      res.status(404);
      throw new Error("Person not found");
    }

    const response = await personalDetailsModel.deleteOne({ _id: personalId });

    if (response.deletedCount === 0) {
      res.status(500);
      throw new Error("There was some issue while deleting");
    }

    res.status(200).json({
      message: "Deleted succesfully",
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

export const updatePersonal = asyncHandler(async (req, res) => {
  try {
    if (req.file) {
      const result = await uploadToCloudinary(req.file);

      req.body = {
        ...req.body,
        proof: result.secure_url,
      };
    }

    const { _id: personalId, ...newData } = req.body;

    if (!isValidObjectId(personalId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const personal = await personalDetailsModel.findById(personalId);

    if (!personal) {
      res.status(404);
      throw new Error("Personal not found");
    }

    const options = { runValidators: true };
    await personalDetailsModel.findByIdAndUpdate(personalId, newData, options);

    res.status(200).json({
      _id: personal.id,
      data: personal,
      message: "Personal Updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});


export const getPersonals = asyncHandler(async (req, res) => {
  try {
    const personal = await personalDetailsModel.find();

    if (!personal) {
      res.status(200);
      throw new Error("No personal found");
    }

    res.status(200).send({
      personal,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});
