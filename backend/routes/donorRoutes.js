const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const {
    createDonor,
    getAllDonors,
    getDonorById,
    updateDonor,
    deleteDonor
} = require("../controllers/donorController");

router.post("/", authMiddleware, createDonor);

router.get("/", authMiddleware, getAllDonors);

router.get("/:id", authMiddleware, getDonorById);

router.put("/:id", authMiddleware, updateDonor);

router.delete("/:id", authMiddleware, deleteDonor);

module.exports = router;