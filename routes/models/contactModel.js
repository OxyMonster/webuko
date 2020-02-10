const mongoose = require('mongoose'); 

const contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name : { type: String, required: true },
    email : { type: String, required: true },
    phone : { type: String, required: true },
    message: { type: String, required: true }
}); 


module.exports = mongoose.model( contactSchema);  
