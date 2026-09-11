const Donor = require("../models/Donor");
const BloodInventory = require("../models/BloodInventory");
const BloodRequest = require("../models/BloodRequest");

const getDashboardStats = async (req, res) => {
    try{
        const totalDonors = await Donor.countDocuments();
        const totalBloodGroups = await BloodInventory.countDocuments();
        const totalRequests = await BloodRequest.countDocuments();

        const pendingRequests = 
        await BloodRequest.countDocuments({
            status: "Pending"
        });

        const approvedRequests = 
        await BloodRequest.countDocuments({
            status: "Approved"
        });

        const rejectedRequests = 
        await BloodRequest.countDocuments({
            status: "Rejected"
        });

        const completedRequests = 
        await BloodRequest.countDocuments({
            status: "Completed"
        });

        const inventory = await BloodInventory.find();
        const totalBloodUnits = inventory.reduce(
            (total, item) => total + item.unitsAvailable,
            0
        );

        return res.status(200).json({
            totalDonors,
            totalBloodGroups,
            totalBloodUnits,
            totalRequests,
            pendingRequests,
            approvedRequests,
            rejectedRequests,
            completedRequests
        });
    } catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};


module.exports = {
    getDashboardStats
};