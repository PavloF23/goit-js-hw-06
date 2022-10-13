"use strict";


// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



const form = document.querySelector('.login-form');
let elements = {}; // об'єкт   

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();  // відміна оновлення сторінкі

// console.log('submit form');

const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;
// console.log(mail, password); // данні з input

const formData = new FormData(event.currentTarget); //посилання на форм елемент

formData.forEach((value) =>{
    const formInputs = document.querySelectorAll('input');
//проверка на заполнення полів input
    formInputs.forEach(function (input) {
        if (input.value === '') {
           alert('Bсі поля повинні бути заповнені.');
        }
        elements.email = mail;
        elements.password = password;
     });
    // console.log(`${name}:  ${value}`);
    console.log(elements)
    });
    
    // document.form.reset();
    document.querySelector('.login-form').reset();
};

