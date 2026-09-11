const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();
const{createInventory, 
        getAllInventory, 
        getInventoryByBloodGroup,
        updateInventory, 
        getInventoryStats } = require("../controllers/inventoryController");

router.post("/", authMiddleware, createInventory);
router.get("/", getAllInventory);
router.get("/stats",getInventoryStats)
router.get("/:bloodGroup", getInventoryByBloodGroup);
router.put("/:bloodGroup", authMiddleware, updateInventory);


module.exports = router;