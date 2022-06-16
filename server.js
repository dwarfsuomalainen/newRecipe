





const express = require("express");
const path = require('path');
const recipes = require('./Data_recipes');
const uuid = require('uuid');



const app = express();
//static folder 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/recipe/:food', (req, res)=> {
    res.json({name: req.params.food});
    //res.json(recipes.filter(recipes => recipes.name === req.params.food));
    
})

// create arecipe
app.post('/recipe', (req, res)=> {
   const newRecipe = {
    id: uuid.v4(),
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions

   } 
   recipes.push(newRecipe);
   res.json(recipes);
})


const port = process.env.port || 1234;

app.listen(port, ()=> console.log(`Server running on port ${port}`));