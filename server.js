





const express = require("express");
const path = require('path');
const recipes = require('./Data_recipes');
const uuid = require('uuid');
const exphbs = require('express-handlebars');
const { json } = require("body-parser");



//handlebars
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index', {
    title : "Recipe",
    name : recipes[0].name,
    ingredients : recipes[0].ingredients ,
    instructions : recipes[0].instructions
    }));

//static folder 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/recipe/:food', (req, res)=> {
    res.json({name: req.params.food, ingredients: recipes[0].ingredients, instructions: recipes[0].instructions});
    //res.json(recipes.filter(recipes => recipes.name === req.params.food));
    
})

// create a recipe
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

//upload image
    app.post('/image', (req, res)=> {
    
    } 
    
    
 )


const port = process.env.port || 1234;

app.listen(port, ()=> console.log(`Server running on port ${port}`));