const express = require('express'); 
const app = express(); 

const path = require('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');  
const compression = require('compression');
require('dotenv').config(); 



const port  = process.env.PORT || 8081; 


app.use(cors()); 
app.use(compression());
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json()) 



// * * * Routes * * *

app.use( express.static('client/dist/webuko') ); 
app.get( '*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'webuko', 'index.html')); 
}); 


// * * * Connect to mongoDB * * * 
//  const mongoDB = require('./server'); 



// * * * Server * * *
app.listen( port , () => {

    console.log(`Listening to port: ${port}`);
    
});
