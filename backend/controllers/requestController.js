const BloodRequest = require("../models/BloodRequest");
const BloodInventory = require("../models/BloodInventory");

const createRequest = async (req, res) =>{
    try{
        const request = new BloodRequest(req.body);

        await request.save();
        return res.status(201).json(request);

    }catch(error) {
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const getAllRequests = async (req, res) =>{
    try{
        const requests = await BloodRequest.find();
        return res.status(200).json(requests);

    } catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const getRequestById = async (req, res) => {
    try{
        const id = req.params.id;
        const request = await BloodRequest.findById(id);

        if(!request){
            return res.status(404).json({
                message: "Request not Found"
            });
        }

        return res.status(200).json(request);

    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const updateRequestStatus = async (req, res) => {
    try{
        const id = req.params.id;
        
        const request = await BloodRequest.findById(id);

        if(!request){
            return res.status(404).json({
                message: "Request not found"
            });
        }

        if(req.body.status === "Approved"){

            const inventory = await BloodInventory.findOne({
                bloodGroup: request.bloodGroup
            });
        
            if(!inventory){
                return res.status(404).json({
                    message: "Blood Inventory not found"
                });
            }

            if(inventory.unitsAvailable < request.unitRequired){
                return res.status(400).json({
                    messsage: "not enough blood units available"
                });
            }
        
        inventory.unitsAvailable = inventory.unitsAvailable - request.unitsRequired;
        
        await inventory.save();
    }
        request.status = req.body.status;
        await request.save();
        return res.status(200).json(request);

    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    createRequest,
    getAllRequests,
    getRequestById,
    updateRequestStatus
};