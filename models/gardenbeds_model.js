const mongoose = require('mongoose');


//Schema for all Garden Beds

const gardenBedSchema = mongoose.Schema({
    bedNumber: { type: String, required: true, unique: true }
})

gardenBedSchema.methods.serialize = function() {
    return {
        id: this._id,
        bedNumber: this.bedNumber
    }
}

const GardenBeds = mongoose.model('gardenbeds', gardenBedSchema);

module.exports = { GardenBeds }