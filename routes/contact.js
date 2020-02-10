const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose'); 

const ContactModel = require('./models/contactModel'); 



router.post('/contact', (req, res) => {

    console.log(  
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.message);
    
    const contact = new ContactModel({
        _id: new mongoose.Types.ObjectId(),  
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message: req.body.message
    }); 

    contact.save()
           .then(result => {
               console.log(result);
           })
           .catch( err => {

               console.log("hereee", err);
               
           }); 

    res.status(200).json("Submitted"); 
}); 


module.exports = router;

