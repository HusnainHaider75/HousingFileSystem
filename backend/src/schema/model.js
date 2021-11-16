const mongoose = require('mongoose');
const DataModel = mongoose.Schema({
    RegistrationNo: String,
    IntinitationLetterSerial: String,
    BookingFormSerial: String,
    CreatedBy : String,
    Status: Boolean
});
const DataSample =mongoose.model('UserData', DataModel);
module.exports =DataSample;