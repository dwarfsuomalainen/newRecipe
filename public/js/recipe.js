//const { allowedNodeEnvironmentFlags } = require("process");

let recipe_fetched = document.createElement('div');

if(document.readyState !== "loading") {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function(){init()});
}

function init(){
fetchPasta();


/*let page_h = document.createElement("h1");
page_h.innerHTML = '<h1>Recipes</h1>';
document.body.appendChild(page_h);

let namefromApi = document.createElement('h2');
namefromApi.innerText = 'namefromApiValue.name';
document.body.append(namefromApi);

let newRecipe = document.createElement('div');
newRecipe.id= "newRecipe";
document.body.appendChild(newRecipe);
let newRecipeDiv = document.getElementById('newRecipe');
let newRecipeHeader = document.createElement('h2');
newRecipeHeader.innerHTML = '<h2>Add your recipe</2>';
newRecipeDiv.appendChild(newRecipeHeader);
let newRecipeNameInput = document.createElement('input');
newRecipeNameInput.type = 'text';
newRecipeNameInput.id = 'name-text';
newRecipeDiv.appendChild(newRecipeNameInput);
let header4 = document.createElement('h4');
header4.innerHTML = '<h4>Ingredients</h4>';
newRecipeDiv.appendChild(header4);
let newRecipeIngrText = document.createElement('textarea');
newRecipeIngrText.id = 'ingredients-text';
newRecipeDiv.appendChild(newRecipeIngrText);
let newRecipeIngrAddB = document.createElement('button');
newRecipeIngrAddB.id ='add-ingredient';
newRecipeIngrAddB.innerText = 'Add ingredient';
newRecipeDiv.appendChild(newRecipeIngrAddB);
let header4_1 = document.createElement('h4');
header4_1.innerHTML = '<h4>Instructions</h4>';
newRecipeDiv.appendChild(header4_1);
let newRecipeInsText = document.createElement('textarea');
newRecipeInsText.id = 'instructions-text';
newRecipeDiv.appendChild(newRecipeInsText);
let newRecipeInsAddB = document.createElement('button');
newRecipeInsAddB.id ='add-instruction';
newRecipeInsAddB.innerText = 'Add instruction';
newRecipeDiv.appendChild(newRecipeInsAddB);
let newRecipePhoto = document.createElement('input');
newRecipePhoto.type= 'file';
newRecipePhoto.id= "image-input";
newRecipePhoto.accept= "image/png; image/jpeg";
newRecipeDiv.appendChild(newRecipePhoto);
let newRecipeSubmit = document.createElement('button');
newRecipeSubmit.id= "submit";
newRecipeSubmit.innerText = 'Submit';
newRecipeDiv.appendChild(newRecipeSubmit);*/

}
async function fetchPasta() {
let getPasta = await fetch('http://localhost:1234/recipe/pasta');
let recipePasta = await getPasta.json();
console.log(recipePasta);
let nameI = recipePasta.name;
let ingredientsI = recipePasta.ingredients;
let instructionsI = recipePasta.instructions;

toIndex(nameI, ingredientsI, instructionsI);
}
function toIndex(x,y,p) {
let recipeName = document.getElementById('recipename');
recipeName.innerHTML = x;
let recipeIngr = document.getElementById('reciepeIngredients');
recipeIngr.innerHTML = y;
let recipeInstr = document.getElementById('recipeInstructions');
recipeInstr.innerHTML = p;


}
//console.log(recipePasta[0].name);

let btn = document.getElementById("add-ingredient");
console.log(btn);
btn.addEventListener('click', addIngredient);


function addIngredient(){
    console.log('oink');
   let addIngLine = document.getElementById('addIng');
   addIngLine.classList.add = 'materialize-textarea';
   console.log(addIngLine);
   addIngLine.appendChild(document.createElement('textarea'));
}

let btn2 = document.getElementById("add-instruction");
console.log(btn2);
btn2.addEventListener('click', addInstruction);


function addInstruction(){
    console.log('oink');
   let addIngLine1 = document.getElementById('addInst');
   console.log(addIngLine1);
   addIngLine1.appendChild(document.createElement('textarea'));
}

let submitUpload = document.getElementById('submit');
submitUpload.addEventListener('click', uploadPhoto);

function uploadPhoto(){
let formData = new FormData();

let photos = document.getElementById('image-input');
let files = photos.files[0];
console.log(files);
formData.append("images", files);
fetch('/image', {method: 'POST', body: formData});
console.log(formData);

//var upload = new FormData(photos);
}