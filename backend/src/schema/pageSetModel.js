const mongoose = require('mongoose');
const PageSetModel = mongoose.Schema({
    LeftMargin: String,
    RightMargin: String,
    
});
const PageSetSchema =mongoose.model('PageSetting', PageSetModel);
module.exports =PageSetSchema;