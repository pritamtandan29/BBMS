const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerAdmin = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({email});
        if(existingAdmin){
            return res.status(400).json({
                message: "Admin already exists"
            });
        }

        //Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create admin
        const admin = new Admin({
            name,
            email,
            password: hashedPassword
        });

        await admin.save();
        
        return res.status(201).json({
            message: "Admin registered successfully"
        });


    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const loginAdmin = async (req, res) => {
    try{
        const{ email, password } = req.body;
        
        const admin = await Admin.findOne({email});

        if(!admin){
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        const token = jwt.sign(
            {
                adminId: admin._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.status(200).json({
            message: "Login successful",
            token
        });

    } catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
  registerAdmin,
  loginAdmin
};