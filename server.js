



const express = require("express");
const path = require('path');


const app = express();
//static folder 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/recipe/:food', (req, res)=> {
    res.send('<h1> Recipe </h1>');
})


const port = process.env.port || 1234;

app.listen(port, ()=> console.log(`Server running on port ${port}`));