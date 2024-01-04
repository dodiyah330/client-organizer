import asyncHandler from "express-async-handler";
import businessDetailsModel from "../model/businessDetailsModel.js";
import { isValidObjectId } from "mongoose";
import getImageFields from "../utils/getImageFields.js";

export const createBusiness = asyncHandler(async (req, res) => {
  req.body = {
    ...req.body,
    ...getImageFields(req.files),
  };

  const {
    companyName,
    address,
    cinNo,
    panNo,
    tanNo,
    gstNo,
    proof,
    gstCertificate,
    cinCertificate,
  } = req.body;

  try {
    // Availability Check
    const businessAvailable = await businessDetailsModel.findOne({
      companyName,
    });

    if (businessAvailable) {
      res.status(400);
      throw new Error("Business already registered");
    }

    const business = await businessDetailsModel.create({
      companyName,
      address,
      cinNo,
      panNo,
      tanNo,
      gstNo,
      proof,
      gstCertificate,
      cinCertificate,
    });

    if (business) {
      res.status(201).json({
        _id: business.id,
        business_name: companyName,
        message: "Business created successfully",
      });
    } else {
      res.status(400);
      throw new Error("Business data is not valid");
    }
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

export const getBusiness = asyncHandler(async (req, res) => {
  const { id: businessId } = req.params;

  try {
    if (!isValidObjectId(businessId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const business = await businessDetailsModel.findById(businessId);

    if (!business) {
      res.status(404);
      throw new Error("Business not found");
    }

    const {
      id,
      companyName,
      address,
      cinNo,
      panNo,
      tanNo,
      gstNo,
      proof,
      gstCertificate,
      cinCertificate,
    } = business;

    res.status(200).json({
      _id: id,
      business_name: companyName,
      address,
      cinNo,
      panNo,
      tanNo,
      gstNo,
      proof,
      gstCertificate,
      cinCertificate,
    });
  } catch (err) {
    res.send({ error: err.message });
  }
});

export const deleteBusiness = asyncHandler(async (req, res) => {
  const { id: businessId } = req.params;
  try {
    if (!isValidObjectId(businessId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const business = await businessDetailsModel.findById(businessId);

    if (!business) {
      res.status(404);
      throw new Error("Busines not found");
    }

    const response = await businessDetailsModel.deleteOne({ _id: businessId });

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

export const updateBusiness = asyncHandler(async (req, res) => {
  if (req.files) {
    req.body = {
      ...req.body,
      ...getImageFields(req.files),
    };
  }

  const { _id: businessId, ...newData } = req.body;

  try {
    if (!isValidObjectId(businessId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const business = await businessDetailsModel.findById(businessId);

    if (!business) {
      res.status(404);
      throw new Error("Busines not found");
    }

    const options = { runValidators: true };
    await businessDetailsModel.findByIdAndUpdate(businessId, newData, options);

    res.status(200).json({
      message: "Updated succesfully",
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

export const getBusinesses = asyncHandler(async (req, res) => {
  try {
    const businesses = await businessDetailsModel.find();
    console.log(businesses);

    if (!businesses) {
      res.status(200);
      throw new Error("No businesses found");
    }

    res.status(200).send({
      businesses,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});
