const mongoose = require('mongoose');
const SecurityKeyModel = mongoose.Schema({
    LeftMargin: String,
    TopMargin: String,
    
});
module.exports =mongoose.model('SecurityKeyModel', SecurityKeyModel);
