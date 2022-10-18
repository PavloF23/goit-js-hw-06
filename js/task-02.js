// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// for (const ingredient of ingredients) {
//   const ingredientList = document.createElement("li");
//   ingredientList.classList.add('item')
//   ingredientList.textContent = ingredient;
//   console.log(ingredientList);
// }
// const liEll = document.querySelector('li')


for (let i = 0; i < ingredients.length; i += 1) {
  // console.log(ingredients[i]);
  const ingredient = document.createElement("li");
  ingredient.classList.add('item')
  ingredient.textContent = ingredients[i];
  console.log(ingredient);
}
let ulList = document.getElementById("ingredients");
// console.log(ulList);
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  // console.log(items);
  items.innerHTML = ingredient;
  ulList.append(items);
});
// console.log(foodIngredients);