const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 65
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"]
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "AB+", "O+", "O-"]
    },
    phone: {
      type: String,
      required: true,
      match: /^[6-9]\d{9}$/
    },
    city: {
      type: String,
      required: true,
      trim: true,
      match: /^[A-Za-z\s]+$/
    },
    address: {
      type: String,
      required: true
    },
    weight: {
      type: Number
    },
    lastDonationDate: {
      type: Date
    },
    isAvailable: {
      type: Boolean,
      default: true
    },

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Donor', donorSchema);
