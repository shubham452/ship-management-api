const express = require('express');
const  router = express.Router();
const shipController = require('../controllers/shipController');
const authController = require("../middleware/authMiddleware")

router.get("/getAllShips", shipController.getShips);
router.get("/getShip/:id", shipController.getShipById);
router.post("/createShip", authController, shipController.createShip);
router.put("/updateShip/:id", authController, shipController.updateShip);
router.delete("/deleteShip/:id", authController, shipController.deleteShip);

module.exports = router;