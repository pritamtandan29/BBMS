const Donor = require('../models/Donor');
//checking validation while posting
const createDonor = async (req, res) => {
  const { name, age, gender, bloodGroup, phone, city, address, weight, lastDonationDate } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!age || age <= 0) {
    return res.status(400).json({ message: "Valid age is required" });
  }

  if (!bloodGroup) {
    return res.status(400).json({ message: "Blood group is required" });
  }

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  if (!city) {
    return res.status(400).json({ message: "City is required" });
  }
  if (!address) {
    return res.status(400).json({ message: "Address is required" });
  }
  if (!gender) {
    return res.status(400).json({ message: "Gender is required" });
  }

  try {
    const donor = new Donor({
      name, 
      age, 
      gender, 
      bloodGroup, 
      phone, 
      city, 
      address, 
      weight, 
      lastDonationDate
    });

    await donor.save();
    return res.status(201).json(donor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error"
    });
  }
};


//all doner or apply filter by adding ?bloodgroup=B+ or any blood group to sort
const getAllDonors = async (req, res) => {  

  try {
    // Get query parameters
    const search = req.query.search;
    const bloodGroup = req.query.bloodGroup;
    const city = req.query.city;
    const gender = req.query.gender;
    const sort = req.query.sort;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    //calculate skip
    const skip = (page-1)*limit;


    // Empty filter object
    const filter = {};

    // Search by donor name
    if(search){
      filter.name = {
        $regex: search,
        $options: "i"
      };
    }
    // Filter by blood group
    if(bloodGroup){
      filter.bloodGroup = bloodGroup;
    }
    if(city){
      filter.city = city;
    }
    if(gender){
      filter.gender = gender;
    }

    // Pagination metadata
    const totalDonors = await Donor.countDocuments(filter);
    const totalPages = Math.ceil(totalDonors/limit);
    // Get donors
    const donors = await Donor.find(filter)
      .sort(sort || "name")
      .skip(skip)
      .limit(limit);
    // Response
    return res.status(200).json({
      page,
      limit,
      totalDonors,
      totalPages,
      data: donors
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error"
    });
  }
};
 

const getDonorById = async (req, res)=>{
  try{
    const id = req.params.id;
    const donor = await Donor.findById(id);
    
    if(!donor){
      return res.status(404).json({
        message: "Donor not found with id"
      });
    }
    return res.status(200).json(donor);

  }
  catch(error) {
    return res.status(500).json({
      message: "Server Error"
    });
  }
};


const updateDonor = async(req, res) => {
   try{
    const id = req.params.id;

    const donor = await Donor.findByIdAndUpdate(
      id,
      req.body,
      {new: true,
        runValidators: true
      }
    );

    if(!donor){
      return res.status(404).json({
        message: "Donor Not Found"
      });
    }

    return res.status(200).json(donor);

   }catch(error){
    console.error(error);

    return res.status(500).json({
      message: "Server Error"
    });
   }
};


const deleteDonor = async(req, res) => {
  try{
    const id = req.params.id;
    const donor = await Donor.findByIdAndDelete(id);

    if(!donor){
      return res.status(404).json({
        message: "Donor not found"
      });
    }
      return res.status(200).json({
        message: "Donor deleted successfully"
      });

    }catch(error){
      console.error(error);
      return res.status(500).json({
        message: "Server Error"
      });
    }
};

module.exports = {
    createDonor,
    getAllDonors,
    getDonorById,
    updateDonor,
    deleteDonor
};