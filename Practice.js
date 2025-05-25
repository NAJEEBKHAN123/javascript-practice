// A program that stores your full name, age, and favorite color in variables and prints them in a sentence.

// let fullName = "najeeb Ullah";
// let age = 20;
// let favoriteColor = "black";

// console.log(`My name is ${fullName} and i'm ${age} years old my favorite color is ${favoriteColor}`)

// let fullName = prompt('Enter Your Name')
// let age = prompt('Enter Your age');
// let favColor = prompt("Enter Your fav color")

// alert(`My name is ${fullName} and i'm ${age} years old my favorite color is ${favColor}`);

// Swap two numbers stored in variables without using a third variable.

// let a = 10;
// let b = 20;
// let c = a;
// a = b;
// b = c
// console.log(a,b)

// Calculate and print the perimeter of a rectangle given width and height variables.

// let printPerimeter = (l,w) =>{
//     let P = `${2*(l+w)}`
//     return P;
// }

// let res = printPerimeter(10,5)
// console.log(res)

// Day 2: Conditionals
// A program that asks for a user’s age and prints if they are a minor, adult, or senior.

// let age = +prompt('Enter Your Age')
// if(age >= 30 ){
//    alert('Senior')
// }
// else if(age >= 18 && age <= 29){
//     alert('Adult')
// }
// else {
//     alert('Minor')
// }

// A day-to-weekday converter: given a number (1-7), print the corresponding weekday name.

// let weekday = +prompt("Enter weekday name");

// switch (weekday) {
//   case 1:
//     alert("Monday");
//     break;
//   case 2:
//     alert("Tuesday");
//     break;
//   case 3:
//     alert("Wednesday");
//     break;
//   case 4:
//     alert("Thurday");
//     break;
//   case 5:
//     alert("Friday");
//     break;
//   case 6:
//     alert("Saturday");
//     break;
//   case 7:
//     alert("Sunday");
//     break;
//   default:
//     alert("no one match with your number");
// }

// Write a program to check if a given number is divisible by 3 and 5 and print appropriate messages.

// let enterNumber = +prompt('Enter a Number');
// if(enterNumber % 3 === 0 && enterNumber % 5 === 0 ){
//     alert("FizzBuzz")
// }
// else if(enterNumber % 3 === 0){
//     alert('Fizz')
// }
// else if(enterNumber % 5 === 0){
//     alert('Buzz')
// }
// else {
//     alert(enterNumber)
// }

// let printFizzBuzzNo = () =>{
//     for(let enterNumber = 1; enterNumber <= 100; enterNumber++){
//       if(enterNumber % 3 === 0 && enterNumber % 5 === 0 ){
//     console.log("FizzBuzz")
// }
// else if(enterNumber % 3 === 0){
//     console.log('Fizz')
// }
// else if(enterNumber % 5 === 0){
//     console.log('Buzz')
// }
// else {
//     console.log(enterNumber)
// }
//     }
// }

// printFizzBuzzNo()

// Day 3: Loops

// Print numbers from 1 to 20.

// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }

// Print all the odd numbers between 1 and 50.

// for (let i = 1; i <= 50; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// Calculate and print the sum of all numbers from 1 to 100.

// let sum = 0;
// let max = 0;

// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
//     if(max < i){
//         max = i
//     }
// }
// console.log(max)
// console.log(sum)

// Day 4: Functions

// A function that takes a number and returns its square.

// let findSquare = (n) =>{
//   return n*n
// }
// let res = findSquare(6)
// console.log(res)

// A function to check if a given string is a palindrome (reads the same backward).

// function findPalindrom(s){
//  let reverse = [...s].reverse().join('')
//  return reverse
// }

// console.log(findPalindrom('najeeb'))

// Create a function that takes two numbers and returns the larger one.

// let findlargeNum = (a,b) =>{
//    if(a > b){
//     console.log(`${a} is greater then ${b}`)
//    }
//    else {
//     console.log(`${b} is greater then ${a}`)
//    }
// }

// console.log(findlargeNum(51,6))

// Day 5: Arrays

// Create an array of 5 favorite foods and print each food item with its index.

// let arr = ['apple', 'banana', 'mango', 'peach', 'graps', 'oragn', 'strawBerry']
// arr.map((value, index) =>{
//     console.log(`${index} : ${value}`)
// })

// Add a new food to the array and remove the last food item, then print the updated array.

// let arr = ['apple', 'banana', 'mango', 'peach', 'graps', 'oragn', 'strawBerry']

// arr.unshift('Kiwi')
// console.log(arr)
// arr.pop()
// console.log(arr)

// Write a function that takes an array of numbers and returns the average.

// let findAvg = (a,b,c,d) =>{
//     let value = a+b+c+d
//     return avg = value /4
// }
// console.log(findAvg(20,30,44,30))

// Day 6: Objects

// Create an object representing a book with properties: title, author, year, and genre.

// let obj =  {
//     title: 'the best response',
//     author: 'kiwi dor',
//     year: "2000",
//     edition: '4th'
// }
// console.log(obj)

// 🗓️ Week 2 – Intermediate JavaScript Practice

// ✅ Day 8: Advanced Functions & Scope
// Create a calculator using functions (add, subtract, multiply, divide).

// let valu1 = +prompt('enter first value')
// let valu2 = +prompt('enter second value');

// let calculator = (valu1, valu2) =>{
//     let add = valu1 + valu2
//     let div = valu1 / valu2
//     let multiply = valu1 * valu2
//     let sub = valu1 - valu2
//     return `values a = ${valu1} & b = ${valu2} the sum ${add} , substract is ${sub}, multiply is ${multiply}, division is ${div} `
// }

// // calculator()
// let ret =  calculator(3,4)
// console.log(ret)

// Create a function that returns another function (closure).

// let outerFun = () =>{
//     let outerVal = 'Hello'

//     let innerFun = () =>{
//         console.log(outerVal)
//     }
//    return innerFun
// }
// let c =outerFun()
// c()

// Build a function that accepts a number and returns a function that multiplies by that number.

// function multiplyBy(num1){
//    return function(num2){
//     return num1 * num2
//    }
// }

// let multiplyBy5 = multiplyBy(5)
// console.log(multiplyBy5(10))

// ✅ Day 9: Array Methods
// Create this:

// Use .map() to square each number in an array.

// let arr = ['khan', 'najee', 'amir', 'kamra']
// console.log(arr )

// arr.map((value, idx) =>{
//     console.log(idx + ' : ' + value)
// })

// Use .filter() to return only numbers greater than 50.

// let number = [10,20,30,40,50,60,70,80,90]
// function checkGreater(number){
//   if(number > 50){
//     console.log(number)
//   }
// }

// let correctNum = number.filter(checkGreater)

// Use .reduce() to find the sum of all numbers in an array.

// let number = [10,20,40,50,60,70,80,90]

//   const sum =  number.reduce((prev, curVal) =>{
//            return (prev + curVal )
//   })

//   console.log(sum)

// Use .find() to get the first even number in an array.

// let number = [9,1,20,40,50,60,70,80,90]

// let found = number.find(function (value){
//       return value % 2 === 0;
// })

// console.log(found)

// ✅ Day 10: String Methods & Practice
// Create this:

// Create a function to reverse a string.

// let reverseStr = (str) =>{
//    return [...str].reverse().join('')
// }

// console.log(reverseStr('hello'))

// Count how many vowels are in a string.

// function findVowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   found = [];

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       found.push(char);
//     }
//   }
//   return found;
// }
// let str = "agriculture university";
// console.log(findVowels(str));

// Check if a word is a palindrome (same forward/backward).

// let orignalStr = 'aamaa'
// let reversestr = [...orignalStr].reverse().join('')

// if(orignalStr === reversestr){
//    console.log(true)
// }
// else {
//  console.log(false)
// }
// console.log(reversestr)

// Capitalize the first letter of each word in a sentence.

// function capitalize(sentence) {
//   let words = sentence.split(" ");

//   let capitalize = words.map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })

//   return capitalize.join(" ");
// }

// let sentence = "this is me najeeb ullah";
// console.log(capitalize(sentence));

// ✅ Day 11: DOM Manipulation (for browser environment)
// (Skip if you’re not using browser yet, or just write HTML with JS in VS Code.)

// Create this:

// Create a button that changes the text on the page when clicked.

//  let heading = document.getElementById('heading')
//  heading.style.backgroundColor = 'red'

//  function clickedTo(){
//     const btn = document.getElementById('btn')
//     btn.innerHTML= 'clicked'
//  }

// Build a form that takes a name and shows a welcome message after submission.

// let form = document.getElementById('handleSubmit')
// let message = document.getElementById('message')

// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     let name = document.getElementById('name').value;
//     message.innerText = `welcome ${name}`
// })

// Create a list and let the user add items to it using a textbox and a button.


// function addItems() {
//   let input = document.getElementById("input");
//   let inputText = input.value;
//   if (inputText.trim() !== "") {
//     const li = document.createElement("li");
//     li.textContent = inputText;
//     let itemList = document.getElementById("itemList");
//     itemList.appendChild(li);
//     input.value = ''
//   }
// };


// ✅ Day 12: Events & Input Handling
// Create this:

// Handle a click event on multiple buttons.

//  const button = document.querySelectorAll('.myBtn')

//  button.forEach((button, index) =>{
//     button.addEventListener('click' , ()=>{
//     alert(`You clicked Button ${index + 1}`);

//     })
//  })

// Create a real-time character counter for a textarea.

// let textArea = document.getElementById('textarea'); 
// let counter = document.getElementById('counter')

// textArea.addEventListener('input', () =>{
//     counter.textContent = textArea.value.length
// })
// console.log(textArea)

// Show/hide password input using a checkbox.

// function myFunction(){
//     let input = document.getElementById('myInput');
//     if(input.type === 'password'){
//         input.type = 'text'
//     }else{
//         input.type = 'password'

//     }
// }

// ✅ Day 13: Error Handling & Debugging
// Create this:

// Write a function that divides two numbers and handles division by zero using try...catch.

// function divided(a, b){
//     try {
//         if(b === 0){
//             throw new error('cannot divided by 0')
//         }
//         let result = a / b;
//         return result
//     } catch (error) {
//        console.log( error.message())
//     }
// }

// console.log(divided(2,0))



// Simulate an error (like undefined variable) and catch it safely.

// Use console.log(), console.warn(), and console.error() to debug a script.\

// ✅ Day 14: Mini Project – To-Do List
// Create this:

// A to-do list app with:

// Input box for task

// Add button

// Task list display

// Delete task option

// (Optional) Save tasks to localStorage


function AddTodo(){
    let input = document.getElementById('input')
    let inputText = input.value;

    if(inputText.trim() === ''){
        alert("Enter something")
        return 
    }

    let li = document.createElement('li')
    li.textContent = inputText

    let remove = document.createElement('button')
    remove.textContent = 'remove'
    li.appendChild(remove)


    let todoList = document.getElementById('todoList')
    todoList.appendChild(li)


    remove.onclick = () => {
        li.remove()
    }
 
    input.value = ''
}