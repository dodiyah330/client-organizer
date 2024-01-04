import { Schema, model } from "mongoose";

const personalSchema = Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    aadharNo: {
      type: Number,
      required: true,
    },
    panNo: {
      type: Number,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    accNo: {
      type: Number,
      required: true,
    },
    ifscCode: {
      type: String,
      required: true,
    },
    proof: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Personal", personalSchema);
