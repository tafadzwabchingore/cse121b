/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Tafadzwa Chingore";

let currentYear = 2023;

let profilePicture = "C:\Users\USER\OneDrive\Documents\cse121b\w02-task\images\profile.jpg"



/* Step 3 - Element Variables */
const nameElement = getElementById("name");

const foodElement = getElementById('favoriteFoods');

const yearElement = document.querySelector("#year");

let imageElement = profilePicture;

/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>${fullName}</strong>";

//Use the textContent property to set the value of the element to the value of the variable currentYear.

image.Element.setAttribute('src', profilePicture);

/* Step 5 - Array*/
const favoriteFoods = ['sweet potato', 'pumpkin porridge', 'round nuts'];

let food2 = "rice with peanutbutter";

favoriteFoods.push(food2);

foodElement.innerHTML += '<br>${favoriteFoods}';

favoriteFoods.pop([2]);

foodElement.innerHTML += '<br>${favoriteFoods}';