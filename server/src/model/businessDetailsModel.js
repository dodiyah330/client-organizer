import { Schema, model } from "mongoose";

const businessSchema = Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cinNo: {
      type: String,
      required: true,
    },
    panNo: {
      type: String,
      required: true,
    },
    tanNo: {
      type: String,
      required: true,
    },
    gstNo: {
      type: String,
      required: true,
    },
    proof: {
      type: String,
      required: true,
    },
    gstCertificate: {
      type: String,
      required: true,
    },
    cinCertificate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Business", businessSchema);
