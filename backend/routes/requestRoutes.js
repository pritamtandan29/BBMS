const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const{ createRequest, 
        getAllRequests, 
        getRequestById,
        updateRequestStatus} = require("../controllers/requestController");

router.post("/", createRequest);
router.get("/", getAllRequests);
router.get("/:id", getRequestById);
router.patch("/:id", authMiddleware, updateRequestStatus)

module.exports = router;