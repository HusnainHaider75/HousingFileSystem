const mongoose = require('mongoose');
const DataModel = mongoose.Schema({
    RegistrationNo: String,
    IntinitationLetterSerial: String,
    BookingFormSerial: String,
    CreatedBy : String,
    QR_Code: String,
    Status: Boolean,
    Detail: String
});
const DataSample =mongoose.model('UserData', DataModel);
module.exports =DataSample;