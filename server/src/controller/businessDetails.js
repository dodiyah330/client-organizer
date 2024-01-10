import asyncHandler from "express-async-handler";
import businessDetailsModel from "../model/businessDetailsModel.js";
import { isValidObjectId } from "mongoose";
import getImageFields from "../utils/getImageFields.js";
import { uploadToCloudinary } from "../middleware/multer.middleware.js";

export const createBusiness = asyncHandler(async (req, res) => {
  try {
    const proofResult = await uploadToCloudinary(req.files.proof[0]);
    const gstCertificateResult = await uploadToCloudinary(req.files.gstCertificate[0]);
    const cinCertificateResult = await uploadToCloudinary(req.files.cinCertificate[0]);

    req.body = {
      ...req.body,
      proof: proofResult.secure_url,
      gstCertificate: gstCertificateResult.secure_url,
      cinCertificate: cinCertificateResult.secure_url,
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
        data: business,
        message: 'Business created successfully',
      });
    } else {
      res.status(400);
      throw new Error('Business data is not valid');
    }
  } catch (err) {
    res.status(500).send({
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
  try {
    let proofResult, gstCertificateResult, cinCertificateResult;

    if (req.files.proof) {
      proofResult = await uploadToCloudinary(req.files.proof[0]);
    }

    if (req.files.gstCertificate) {
      gstCertificateResult = await uploadToCloudinary(req.files.gstCertificate[0]);
    }

    if (req.files.cinCertificate) {
      cinCertificateResult = await uploadToCloudinary(req.files.cinCertificate[0]);
    }

    let newData = {
      ...req.body,
    };

    // Update fields only if files were provided
    if (proofResult) {
      newData.proof = proofResult.secure_url;
    }

    if (gstCertificateResult) {
      newData.gstCertificate = gstCertificateResult.secure_url;
    }

    if (cinCertificateResult) {
      newData.cinCertificate = cinCertificateResult.secure_url;
    }

    let { _id: businessId, ...updatedData } = newData;

    if (!isValidObjectId(businessId)) {
      res.status(400);
      throw new Error("Invalid Id");
    }

    const business = await businessDetailsModel.findById(businessId);

    if (!business) {
      res.status(404);
      throw new Error('Business not found');
    }

    const options = { runValidators: true };
    await businessDetailsModel.findByIdAndUpdate(businessId, updatedData, options);

    res.status(200).json({
      _id: business.id,
      data: business,
      message: 'Updated Business successfully',
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});


export const getBusinesses = asyncHandler(async (req, res) => {
  try {
    const businesses = await businessDetailsModel.find();

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
