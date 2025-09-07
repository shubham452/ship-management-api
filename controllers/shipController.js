const ship = require("../models/shipModel");

exports.getShips=async(req,res)=>{
    try {
        const ships = await ship.find();
        res.status(200).json(ships)

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getShipById = async(req,res)=>{
    try {
        const Ship = await ship.findById(req.params.id);
        if(!Ship)
        {
            return res.status(404).json({ error: "Ship not found" });
        }
        res.status(200).json(ship);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createShip = async(req,res)=>{
    try {
        const newShip = new ship(req.body);
        await newShip.save();
        res.status(201).json(newShip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateShip = async(req,res)=>{
    try {
        const Ship = await ship.findById(req.param.id,req.body,{new:true});
        if(!Ship)
        {
            return res.json(404).json({message:"Ship not found"});
        }
        res.json(Ship);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteShip = async (req, res) => {
    try {
        const ship = await Ship.findByIdAndDelete(req.params.id);
        if (!ship) return res.status(404).json({ message: "Ship not found" });
        res.json({ message: "Ship deleted successfully" });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    };