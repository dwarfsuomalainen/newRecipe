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
let getPasta = await fetch('/recipe/pasta');
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
   let textarea1 = document.createElement('textarea')
   textarea1.setAttribute('class','ing-newline');
   addIngLine.appendChild(textarea1);
   //addIngLine.textarea1.classList.add = 'ing-newline';
   console.log(addIngLine);
}

let btn2 = document.getElementById("add-instruction");
console.log(btn2);
btn2.addEventListener('click', addInstruction);


function addInstruction(){
    console.log('oink');
   let addIngLine1 = document.getElementById('addInst');
   console.log(addIngLine1);
   addIngLine1.classList.add = 'materialize-textarea';
   let textarea2 = document.createElement('textarea')
   textarea2.setAttribute("class", "ins-newline");
   textarea2.classList.add ='ins-newline';
   addIngLine1.appendChild(textarea2);
   //addIngLine1.textarea2.classList.add ='ins-newline';
   console.log(addIngLine1);
}

let submitUpload = document.getElementById('submit');
submitUpload.addEventListener('click', uploadPhoto,);

async function uploadPhoto(){
  
let formData = new FormData();
let photos = document.getElementById('image-input');
let files = photos.files;
for (let img=0; img < files.length; img++) {
console.log(files);
formData.append("images", files[img]);
}
console.log(files);
await fetch('/image', {method: 'POST', body: formData});
console.log(formData);

//var upload = new FormData(photos);
}
document.getElementById("submit").addEventListener('click', async (event) => { event.preventDefault();
    
    let RecipeName = document.getElementById('name-text');
   
    //let ingDiv = document.getElementById('addIng');
    //console.log(ingDiv);

    let RecipeIngredients = document.querySelectorAll('.ing-newline');
    //let insDiv = document.getElementById('addIns');
    //console.log(insDiv);
    let RecipeInstructions = document.querySelectorAll('.ins-newline');
   
    console.log(RecipeIngredients);
    console.log(RecipeInstructions);
    let ingrArr = [];
    console.log(ingrArr);
    for (let count = 0; count < RecipeIngredients.length; count++){ 
        if (RecipeIngredients[count].value === "") { console.log('empty string');}
        else {ingrArr.push(RecipeIngredients[(count)].value);
        console.log(ingrArr[(count)].value);}
    }

    let insArr = [];
    for (let count1= 0; count1 < RecipeInstructions.length; count1++){
        if (RecipeInstructions[count1].value === "") { console.log('empty string');}
        else {insArr.push(RecipeInstructions[(count1)].value);

        insArr.push(RecipeInstructions[(count1)].value);
    }}
    console.log(ingrArr);
    console.log(insArr);
    const res = await fetch('/recipe/', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: RecipeName.value, ingredients: ingrArr, instructions: insArr})
    });
});