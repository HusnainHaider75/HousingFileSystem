const mongoose = require('mongoose');
const NoteSerialKeyModel = mongoose.Schema({
    LeftMargin: String,
    TopMargin: String,
    
});
module.exports =mongoose.model('NoteSerialKeyModel', NoteSerialKeyModel);
