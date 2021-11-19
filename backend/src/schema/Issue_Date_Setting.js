const mongoose = require('mongoose');
const IssueDateModel = mongoose.Schema({
    LeftMargin: String,
    TopMargin: String,
    
});
module.exports =mongoose.model('IssueDateModel', IssueDateModel);
