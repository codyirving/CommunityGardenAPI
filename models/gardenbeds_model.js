const mongoose = require('mongoose');


//Schema for all Garden Beds

const GardenBedSchema = mongoose.Schema({
    bedNumber: { type: String, required: true, unique: true }
})
//Serialize method to strip sensitive data
GardenBedSchema.methods.serialize = function() {
    return {
        id: this._id,
        bedNumber: this.bedNumber
    }
}

const GardenBeds = mongoose.model('GardenBed', GardenBedSchema);

module.exports = { GardenBeds }