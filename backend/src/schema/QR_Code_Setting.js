const mongoose = require('mongoose');
const PageSetModel = mongoose.Schema({
    LeftMargin: String,
    TopMargin: String,
    
});
const PageSetSchema =mongoose.model('PageSetModel', PageSetModel);
module.exports =PageSetSchema;