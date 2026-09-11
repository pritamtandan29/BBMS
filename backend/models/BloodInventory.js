const mongoose = require("mongoose");

const bloodInventorySchema = new mongoose.Schema(
    {
        bloodGroup:{
            type: String,
            require: true,
            enum: ["A+","A-","B+","B-","AB+","AB-","O+","O-"],
            unique: true
        },
        unitsAvailable: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "BloodInventory",
    bloodInventorySchema
);