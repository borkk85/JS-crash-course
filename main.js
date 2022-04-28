// LOGGING OUTPUT
// alert('Hello World'); // Do not use for debugging. Stops script and only strings
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// var, let(re-assigned), const(not-changed)

// const age = 30;

// age = 31

// console.log(age)


// DATA TYPES - String, Number, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined; 
// let z;

// console.log(typeof x) 

//Strings

// const name = 'John';
// const age = 30;

// Concatenation

// console.log('My name is ' + name + ' and i am ' + age);
//Template String

// console.log`My name is ${name} and i am ${age}`;

// const s = 'Hello World'
const s = 'technology, computers, it, code'


let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');
// console.log(s.split(', '))

//Arrays - Store multiple values in a variable

// const number = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'bananas', 'avocados']

// Add value
fruits[4] = 'grapes'

// Add value using push()
fruits.push('mangos');

// Add to beginning
fruits.unshift('strawberries');

// removes last
// fruits.pop()

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// OBJECT LITERALS
const person = {
    firstName: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }

// Add property
person.email = 'jdoe@gmail.com';

//   console.log(person)

const {firstName, lastName, address: {city}} = person

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted:true
    },
    {
        id: 2,
        text: 'Dinner with wife',
        isComplete: false
    },
      {
        id: 3,
        text: 'Meeting with boss',
        isComplete: true
      }
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));

// LOOPS

//for

for(let i = 0; i < 10; i++) {
console.log(i)
}

//while

let i = 0;
while(i<10) {
    console.log(`While Loop Number: ${i}`);
    i++
}

// Loop Through Arrays
// For Loop

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
//     }

for(let todo of todos) {
    console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
  });
  
  // map() - Loop through and create new array
  const todoTextArray = todos.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoTextArray);
  
  // filter() - Returns array based on condition
  const todo1 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  });
  
  // CONDITIONALS

  // Simple If/Else Statement

//   const x = 30;

//   if(x === 10) {
//     console.log('x is 10');
//   } else if(x > 10) {
//     console.log('x is greater than 10');
//   } else {
//     console.log('x is less than 10')
//   }

//   const x = 5;
//   const y = 11;

//   if(x>5 && y>10) {
//     console.log('x is more than 5 or y is more than 10')
//   }

// Ternary operator / Shorthand if
const x = 10;
const color = x>10 ? 'red' : 'blue'

// console.log(color)

// Switch

switch(color) {
    case 'red':
        // console.log('color is red');
    case 'blue':
    // console.log('color is blue');
    default:
        // console.log('color is NOT red or blue')
}


// FUNCTIONS

function greet(greeting = 'Hello', name) {
    if(!name) {
      // console.log(greeting);
      return greeting;
    } else {
      // console.log(`${greeting} ${name}`);
      return `${greeting} ${name}`;
    }
  }

  // ARROW FUNCTIONS
// const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
// console.log(greet('Hi'));


// OOP
//Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

//Instantiate object
// const person1 = new Person ('John', 'Doe', '4-3-1980');
// const person2 = new Person ('Jane', 'Doe', '4-5-1988');


// console.log(person2.getFullName())


// ES6 CLASSES
class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  const person1 = new Person('John', 'Doe', '7-8-80');
  console.log(person1.getBirthYear());

  // ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li) 

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}