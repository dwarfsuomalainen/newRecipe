let recipe_fetched = document.createElement('div');

if(document.readyState !== "loading") {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function(){init()});
}

function init(){
let page_h = document.createElement("h1");
page_h.innerHTML = '<h1>Recipes</h1>';
document.body.appendChild(page_h);


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
newRecipeDiv.appendChild(newRecipeSubmit);













}
