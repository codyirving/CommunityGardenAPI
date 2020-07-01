const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    date: {type: Date, default: Date.now},
    content: {type: String}
});
const MediaSchema = mongoose.Schema({
    title: {type: String},
    mediaType: {type: String},
    URL: {type: String},
    notes: {type: String}
});
const BedContentSchema = mongoose.Schema({
    cellSize: {type: Number},
    plantType: {type: String},
    occupied: {type: Boolean},
    startDate: {type: Date, default: Date.now},
    harvestDate: {type: Date, default: Date.now},
    photo: MediaSchema
});
const BedOwnerSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    phone1: {type: String},
    address: {type: String},
    notes: {type: String},
    photo: MediaSchema
});
const BedInformationSchema = mongoose.Schema({
    dateAssigned: {type: Date, default: Date.now},
    length: {type: Number},
    width: {type: Number},
    bedContents: [[BedContentSchema]],
    adminNotes: [NoteSchema],
    bedOwnerNotes: [NoteSchema]
});


//Schema for all Garden Beds
const GardenBedSchema = mongoose.Schema({
    bedNumber: { type: String, required: true, unique: true },
    bedOwner: BedOwnerSchema,
    bedInformation: BedInformationSchema
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