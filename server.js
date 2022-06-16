





const express = require("express");
const path = require('path');
const recipes = require('./Data_recipes');


const app = express();
//static folder 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/recipe/:food', (req, res)=> {
    res.json({name: req.params.food});
})


const port = process.env.port || 1234;

app.listen(port, ()=> console.log(`Server running on port ${port}`));