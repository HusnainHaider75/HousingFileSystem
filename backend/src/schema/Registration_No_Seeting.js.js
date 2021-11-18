const mongoose = require('mongoose');
const RegistrationKeyModel = mongoose.Schema({
    LeftMargin: String,
    TopMargin: String,
    
});
module.exports =mongoose.model('RegistrationKeyModel', RegistrationKeyModel);
