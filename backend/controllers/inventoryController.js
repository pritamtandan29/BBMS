const BloodInventory = require("../models/BloodInventory")

const createInventory = async (req, res) => {
    try{
        const {bloodGroup,unitsAvailable} = req.body;

        const inventory = new BloodInventory({
            bloodGroup,
            unitsAvailable
        });

        await inventory.save();

        return res.status(201).json(inventory);

    } catch(error){
        console.error(error);
        return  res.status(409).json({
            message: "Blood Group already exists"
        });
    }
};

const getAllInventory = async (req, res) => {
    try{
        const inventory = await BloodInventory.find();

        return res.status(200).json(inventory);
    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const getInventoryByBloodGroup = async (req, res) => {
    try{
        const bloodGroup = req.params.bloodGroup;
        const inventory = await BloodInventory.findOne({
            bloodGroup
        });

        if(!inventory){
            return res.status(404).json({
                message: "Blood group not found"
            });
        }
        return res.status(200).json(inventory);

    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const updateInventory = async (req, res) => {
    try{
        const bloodGroup = req.params.bloodGroup;

        const inventory  = await BloodInventory.findOneAndUpdate(
            {bloodGroup},//First Argument: Filter find the bloodgroup

            req.body,//Second Argument: Update Data
            
            {
                new: true,
                runValidators: true
            }
    );

    if(!inventory){
        return res.status(404).json({
            message: "Blood group not found"
        });
    }

    return res.status(200).json(inventory);

    } catch(error){
        if(error.code === 11000){
            return res.status(409).json({
                message: "Blood group already exists"
            });
        }

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const getInventoryStats = async(req, res) => {
    try{
        const inventory = await BloodInventory.find();

        const totalBloodGroup = inventory.length;

        const totalUnitsAvailable = inventory.reduce((total, item) => total + item.unitsAvailable, 0);

        return res.status(200).json({
            totalBloodGroup,
            totalUnitsAvailable
        });
    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
}

module.exports = {
    createInventory,
    getAllInventory,
    getInventoryByBloodGroup,
    updateInventory,
    getInventoryStats
};