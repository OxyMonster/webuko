const express = require('express'); 
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose'); 

//  * * * Connect to mongoDB * * * *
const mongoURL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'; 

mongoose.connect(mongoURL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })
        .then( ()=> {
            console.log('Connected to db');
            
        })
        .catch(err => {
            console.log(err);
            
        }); 


// * * *   MiddleWare for Cors-Origin * * * 
app.use(cors({origin: '*'}));   
app.use(express.json());
// * * * Routes * * * 
const contact  = require('./routes/contact'); 

app.use(contact); 



// * * * Listen to server * * *

app.listen(3000, () => {
    console.log('Listening to port 3000');
    
}); 