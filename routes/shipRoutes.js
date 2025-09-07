const express = require('express');
const  router = express.Router();
const shipController = require('../controllers/shipController');
const authController = require("../middleware/authMiddleware")

router.get("/",shipController.getShips);
router.get("/:id",shipController.getShipById);
router.post("/",authController/shipController.createShip);
router.put("/:id",authController/shipController.updateShip);
router.delete("/:id",authController,shipController.deleteShip);

module.exports = router;