const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ulList = document.getElementById("ingredients");
// console.log(ulList);
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  // console.log(items);
  items.innerHTML = ingredient;
  ulList.append(items);
});

console.log(foodIngredients);