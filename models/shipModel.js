const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema(
    {
        imoNumber: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        type: { type: String, required: true },
        flag: { type: String, required: true },
        yearBuilt: { type: Number },
        grossTonnage: { type: Number },
        deadweight: { type: Number },
        capacityTEU: { type: Number },
        passengerCapacity: { type: Number },
    },
    { timestamps: true }
);


module.exports = mongoose.model("Ship", shipSchema);
