const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema(
    {
        patientName: {
            type: String,
            required: true
        },
        bloodGroup: {
            type: String,
            require: true,
            enum: ["A+","A-","B+","B-","AB+","AB-","O+","O-"]
        },
        unitsRequired: {
            type: Number,
            required: true,
            min:1
        },
        hospital: {
            type: String,
            required:true
        },
        status: {
            type:String,
            enum: ["Pending","Approved","Rejected","Completed"],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);