// let arr = [13,43,45,54,76]

//  for(let i = 0; i <= 5; i++){
//     console.log(arr[i])
//  }

// var arr = new Array(5)

// for(let i = 0; i < 5; i++){
//    arr[i] = prompt("enter a number");
// }

// for(let j = 0; j < 5; j++){
//     console.log(arr[j])
// }

// MULTIMIDENTIONAL ARRAY

// var arr = [
//     ["naje", 19, "male", "IT"],
//     ["naje", 19, "male", "IT"],
//     ["naje", 19, "male", "IT"],
//     ["naje", 19, "male", "IT"],
// ];

// document.write("<table border='1px' >")
// // console.log(arr[0][3])

// for(var i = 0; i < 4; i++){
//     document.write('<tr>')
//     for(var j = 0; j < 4; j++){
//         document.write("<td>" + arr[i][j] + "</td> ")
//     }
//     document.write("</tr>")
// }

// document.write("</table>")

//MODIFY AND RENAME ARRAY ELEMENTS

// var a =['khan', 12, 'male', 'IT']
// console.log(a)
//  a[1] = 20;
// console.log(a)

// var a =['khan', 12, 'male', 'IT']
// console.log(a)
//  delete a[2]
// console.log(a)

//ARRAY METHOD
// 1, sor()
// var a =['khan', "umar", 'male', 'kashif']
// console.log(a)
// a.sort()
// console.log(a)
// 2, reverse()
// var a =['khan', "umar", 'male', 'kashif']
// console.log(a)
// a.reverse()
// console.log(a)

// 3, pop()
// var a =['khan', "umar", 'male', 'kashif']
// console.log(a)
// a.pop()
// console.log(a)
// 4, push()
// var a =['khan', "umar", 'male', 'kashif']
// console.log(a)
// a.push("najeeb", "uzair")
// console.log(a)

// // 5, shift()
// var a =['khan', "umar", 'male', 'kashif']
// console.log(a)
// a.shift()
// console.log(a)

// 5, unshift()
// var a =['khan', "umar", 'male', 'kashif']
// console.log(a)
// a.unshift("kamran")
// console.log(a)

// 6  CONCATE
// var a =['khan', "umar", 'male', 'kashif']
// var b = ["najeeb", "uzair"]

// let c = a.concat(b)
// console.log(c)

// join
// let d = c.join(" ")
// console.log(d)

// SLICE

// let a = ['najee', 'khan', 'uzair', 'khan', "kash"]
// let b = 33

// document.write(a + "<br>")

//  a.splice(2, 0, "bilal", 'ihsan')

// console.log(Array.isArray(b))
// document.write(a)

// let b =a.indexOf('khan')
// console.log(b)

// let b = a.lastIndexOf('khan')
// console.log(b)

// let b = a.includes('uzair')

// let a = [12,3,17,8,20]

// let b = a.some(checkAdult);
// console.log(b)

// function checkAdult(age){
//     return age >= 18
// }

// let a = [12,3,17,8,20]

// let b = a.every(checkAdult);
// console.log(b)

// function checkAdult(age){
//     return age >= 18
// }

// let a = [12,3,18,8,20]

// let b = a.find(checkAdult);
// console.log(b)

// function checkAdult(age){
//     return age >= 18
// }

//  let b = a.findIndex(2)
//  console.log(b)

// function checkAdult(age)
// {
//     return age >= 18;
// }

// let b = a.filter(checkAdult)
// console.log(b);

// let b  = a.toString()

// let b  = a.fill("khan")

// let b  = a.forEach((value, index) =>{
//          console.log(index + ": " + value)
// })

// let students = [
//     {name: "najee", age: 18},
//     {name: "umar", age: 13},
//     {name: "kash", age: 21},
// ]

// console.log(students[0].name + " " + students[0].age)
// console.log(students[1].name + " " + students[1].age)
// console.log(students[2].name + " " + students[2].age)

// FOR/IN LOOP

// let students = {
//     name: "najeeb",
//     age: 23,
//     email: "nj@gmail.com"
// };

// for(var key in students){
//     console.log(key + " : " + students[key])
// }

// let students = [
//     {name: "najee", age: 18},
//     {name: "umar", age: 13},
//     {name: "kash", age: 21},
// ]

// students.map((student) =>{
//     console.log(student.name + " " + student.age)
// })

// let student = [23,43,54,6,76,76];

// const stu = (x) =>{
//     return x * 10;
// }

// let b = student.map(stu)

// console.log(b)

// let student = [23,43,54,6,76,76];

// const b =student.length
// console.log(b)

// let student = "javascript is most usefull language for frontend development, it is";

// let students = ['najeb', 'khan', 'owais', 'kash'];

// const b = student.toLowerCase()
// const b = student.toUpperCase()
// const b = student.includes('most')
// const b = student.startsWith('javascript') // search first index value
// const b = student.endsWith('development') // search first index value
// const b = student.search('usefull') // search method return the true value index not value.
// const b = student.match(/is/g) // search method return the true value
// const b = student.indexOf('is')
// const b = student.lastIndexOf('is')
// const b = student.replace(/is/g, 'are')
// let stu = "       kha"
// const b = stu.trim()
// alert(b)

// let b = student.split(" ");
// let b = student.repeat(2);

// let b = student.slice(0,22);
// let b = student.substr(0,2);

// let a = 10.89024243

//  let b = Number('23.32')
//  let b = parseFloat('23.32')
//  let b = parseInt('23.32')
//  let b = isFinite('23.32')
//  let b = Number.isInteger(a)
//  let b = a.toFixed(2)
//  let b = a.toPrecision(2)

// let a = Math.ceil(10.0001) // 11
// let a = Math.floor(10.99) // 10

// let a = Math.ceil(-10.61) // -10
// let a = Math.floor(-10.10) // -11

// let a = Math.round(10.51000324) // 11

// let a = Math.ceil(Math.random() * 6) // -10

// let time = new Date()

// // let a =(`${time.getDate()}/ ${time.getMonth()}/ ${time.getFullYear()}`)
// let a = time.setFullYear()

// console.log(time)

// document.write(a+ "<br>")

// console.log(a)

// let element = document.getElementById('list')
// let element = document.getElementById('list').innerHTML;
// let element = document.getElementsByClassName('item-list')
// let element = document.getElementsByTagName('a')
// let element = document.getElementById('list').getAttribute('class')
// let element = document.getElementById('list').getAttribute('style')
// let element = document.getElementById('list').getAttributeNode('style')

// set method

// let element = document.getElementById('main-header').innerHTML="<h1>Heading</h1>"
//  document.getElementById('main-header').setAttribute('class', 'xyz')
//  let element =document.getElementById('main-header').getAttribute('class', 'xyz')
// let element = document.getElementById('main-header').getAttribute('class')
// document.getElementById('main-header').removeAttribute('class')
// let element = document.getElementById('main-header').getAttribute('class')

// QUERYSLECTOR

// let element = document.querySelector('#header-title').innerHTML = "<h1>Top Heading</h1>"
// let element = document.querySelector('.item-list')
// let element = document.querySelectorAll('.item-list')[1].innerText
// let element = document.querySelectorAll('#item h1').innerText

// addEventListener

// let element = document.getElementById('header-title').addEventListener('click', abc);

// function abc(){
//     document.getElementById('header-title').innerText= "Heys"
// }
// console.log(element)

// let element = document.getElementById('header-title').addEventListener('click', function(){
//     document.getElementById('header-title').innerText= "Heys"
// });

// console.log(element)

// let element = document.getElementById('item').childNodes[4]
// let element = document.getElementById('item').parentElement

// console.log(element)

// let newElement = document.createElement('h1');
// let newText = document.createTextNode('This is me Najeeb');

// newElement.appendChild(newText)

// let element = document.getElementById('test')
// // element.appendChild(newElement)

// element.insertBefore(newElement, element.childNodes[0])
// console.log(element)

// var target = document.getElementById('test')
// var newElement = "<h1>This is me Najeeb</h1>"
// target.insertAdjacentHTML('afterbegin', newElement)
// console.log(target)

// var target = document.getElementById('test')
// var newElement = "This is me Najeeb"
// target.insertAdjacentText('afterbegin', newElement)
// console.log(target)

// BASIC EVENTS

// let a = 0;

// setInterval(function(){
//     a = a+10;
//     console.log(a)
// }, 1000)

// let myInterval = setInterval(() => {
//   let target =  document.getElementById('test').innerHTML +="Hey"
//   console.log(myInterval)
// }, 1000);

// let myTime = setTimeout(() => {
//     document.getElementById('test').innerHTML +="Happy Birthday! "
//   console.log(myTime)
// }, 1000);

// Practice q

// function vovelWord(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//         count++;
//     }
// }

// return count;
// }
// const result = vovelWord("NajeebKhanii");
// console.log(result)

// method 2

// function countVovel(str){
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let found = [];

//     for(const char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             found.push(char)
//         }
//     }
//     return found;
// }

// const result = countVovel('This is me najeeb')
// console.log(result)

// arrow function

// const countVovel = (str) =>{
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let found = [];

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             found.push(char)
//         }
//     }
//     return found
// }

// const result = countVovel('This is me najeeb')
// console.log(result)

// const fruits = ["apple", "banana", "mango"];

// fruits.forEach((fruit, index )=> {
//     console.log(`${index} : ${fruit}`)
// });

// let squareOFTheNum = [10,16, 9];

// squareOFTheNum.forEach((num, index)=>{
//     let val = Math.sqrt(num)
//     console.log(val)
// })

// let a = 9;
// const val = Math.sqrt(9)
// console.log(val)

// let mapping =  [10,16, 9,43,54,64];

// mapping.map((val) =>{
//     console.log(val)
// })

// let arr =  [10,16, 9,43,54,64];

// let newVal = arr.filter((val) =>{
//     return val%2 == 0;
// })

// console.log(newVal)

// let arr =  [10,16, 9,43,54,64];
// const result = arr.reduce((prevVal, currVal) =>{
//     return prevVal + currVal
// })

// console.log(result)

// let arr =  [10,16, 9,43,54,64];
// const result = arr.reduce((prevVal, currVal) =>{
//     return prevVal > currVal ? prevVal : currVal
// })

// console.log(result)

// let arr =  [10,99,93,43,54,64];

// const result = arr.filter((val) =>{
//    if(val >= 90){
//     return val
//    }
// })
// console.log(result)

// let n = prompt("enter a number")
// let arr = [];

// for(let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }

// console.log(arr)

// let sum = arr.reduce((prev, curr) =>{
//     return prev + curr
// })
// console.log(sum)

// let multi = arr.reduce((prev, curr) =>{
//     return prev * curr
// })
// console.log(multi)

// Q: Modify the findVowels function to return only unique vowels found in a string.
// Q: What is the difference between .forEach() and .map() in terms of return value and use case?

// the forEatch() method just return the exitsting value don't change it . but the .map() return the new
// array after apply on the old array.

// Q: Write a function isPerfectSquare(num) that checks if a number is a perfect square.

// let arr =  [10,16, 9,43,54,64];

// let result = arr.map((val) =>{
//     if (arr < 0) {
//               return false;
//             }
//             if (arr === 0) {
//                 return true;
//             }
//    let root = Math.sqrt(val)
//    return root === Math.floor(root)
// })
// console.log(result)
// function isPerfectSquare(num) {
//     if (num < 0) {
//       return false;
//     }
//     if (num === 0) {
//         return true;
//     }
//     let root = Math.sqrt(num);
//     console.log(root)
//     return root === Math.floor(root);

//   }

// function findUniqueVowels(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     const foundVowels = new Set();

//     for (const char of str.toLowerCase()) {
//       if (vowels.has(char)) {
//         foundVowels.add(char);
//       }
//     }

//     return Array.from(foundVowels).sort();
//   }

//   // Example usage:
//   console.log(findUniqueVowels("Hello Worldooo,u")); // ["e", "o"]
//   console.log(findUniqueVowels("The quick brown fox")); // ["e", "i", "o", "u"]
//   console.log(findUniqueVowels("JavaScript")); // ["a", "i"]

// const arr = [1,2,3];
// let result = arr.forEach((x) =>{
//     x = x * 2;
//     return x
// })
// console.log(result)

// const obj = {
//     name: "Alice",
//     greet: function() {
//       setTimeout(() => console.log(this.name), 100);
//     }
//   };
//   obj.greet();

// function sum(a = 1, b = 2) {
//     return a + b;
//   }
//   console.log(sum(undefined, 3));

// console.log("good Morning".toLocaleUpperCase())
// const nums = [1, 2, 3];
// const sum = nums.reduce((prev , curr) => prev + curr, 0)
// console.log(sum)

// let arr = [13,43,45,54,76]

// let result = arr.reduce((prev, curr) =>{
//    return Math.max(prev, curr, -Infinity)
// })
// console.log(result)

// const users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 19 },
//     { name: "Bob", age: 20 }

//   ];
//   const adults = users.filter(user => user.age > 18);
//   console.log(adults); // ?

// console.log(Math.sqrt(-1))

// const nums = ["1", "2", "3"];
// const result = nums.map(parseInt);
// console.log(result); // Output?

// const nums = [1, 2, 3];
// const sum1 = nums.reduce((acc, n) => acc + n);
// const sum2 = nums.reduce((acc, n) => acc + n, 0);

// const practice = (...argu) =>{
//   return argu
// }

// console.log(practice(2,3))

// var a = 5;
// a = 8;
// var a = 4
// console.log(a)

// let a = 5;
// a = 6
// let a = 9;
// console.log(a)

// const a = 9;
// a = 8;
// const a = 5;
// console.log(a)

// const obj = {
//     name: "Alice",
//     greet: function() { console.log(this.name) },
//     greetArrow: () => console.log(this.name)
//   };
//   obj.greet();        // ?
//   obj.greetArrow();   // ?

// console.log(typeof null); // ?
// console.log(0.1 + 0.2 !== 0.3) // true
// function greet() { return "Hello!" }
// console.log(greet)
// const arr = [1, 2, 3]
// arr.push(4);
// console.log(arr.length); // ?
// console.log(!!"a"); //

// let newElement = document.createElement('h2');
// let newText = document.createTextNode('Hello Javascript');

// newElement.appendChild(newText)

// let result = document.getElementById('test')
// result.insertBefore(newElement, result.childNodes[0])

// // console.log(newText))
// console.log(result)

// let newText = document.createTextNode(' from apna college student');

// let result = document.getElementById('heading')
// result.appendChild(newText)
// console.log(result)

// let target = document.getElementById('heading')

// target.innerText = target.innerText + " from apna college student"

// console.log(target.innerText)

// let divs = document.querySelectorAll('.box')

// let idx = 1;
// for(let div of divs){
//     div.innerText = `This is div ${idx}`
//     idx++
// }

// console.log(divs)

// let div = document.querySelector('#test')
// div.style.backgroundColor = 'red'
// div.style.backgroundColor = 'blue'
// div.style.color = 'white'
// div.style.padding = '10px'
// div.style.fontSize = '30px'

// console.log(div)

// let div = document.getElementById('test')
// let id = div.getAttribute('style')
// console.log(id)

// let div = document.getElementById('test')
// let id = div.setAttribute('class', 'this')
// console.log(div)

// let div = document.getElementById('test')

// let newElement = document.createElement('button')
// newElement.innerText = 'click me!'
// div.insertBefore(newElement, div.childNodes[0])
// console.log(newElement)

// let newElement = document.createElement('button')
// newElement.innerText = 'click me!'
// newElement.style.backgroundColor = 'red'
// newElement.style.color = 'white'

// let target = document.querySelector('body');
// // target.insertBefore(newElement, target.childNodes[0])
// target.before(newElement)

// console.log(target)

// let target = document.querySelector('.content')
// target.classList('class', 'newclass')

// console.log(target)

// let toggleBtn = document.querySelector('#toggle');
// let currMode = 'light'

// toggleBtn.addEventListener('click', () =>{
//     if(currMode === 'light'){
//         currMode = 'dark'
//        document.querySelector('body').style.backgroundColor = "black"
//        document.querySelector('body').style.color = "white"

//     } else{
//         currMode ='light'
//        document.querySelector('body').style.backgroundColor = "white"
//        document.querySelector('body').style.color = "black"

//     }
//     console.log(currMode)

// })

// console.log(toggleBtn)

// function outer() {
//     let counter = 0;

//     function inner() {
//       counter++;
//       console.log(counter);
//     }

//     return inner;
//   }

//   const count = outer();
//   count(); // 1
//   count(); // 2
//   count(); // 3

// let a = 10;
// function foo() {
//     console.log(a);
//     let a = 5;
// }
// foo();

// class myCar {
//     constructor(name, year){
//         this.name = name,
//         this.year = year
//     }
//       car(model){
//         this.model = model;
//         console.log("Hey this is method inside the object")
//       }
// }

// let mehran = new myCar('mehran', 2010);
// console.log(mehran)

// let furtuner = new myCar('furtuner', 2020);
// console.log(furtuner)

// let luxis = new myCar()
// luxis.car('hey')

// console.log(mehran.car)

// class Car{
//     constructor(brand){
//         this.carName = brand;
//     }

// }

// class Model extends Car{
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }
// }

// let myCar = new Model('toyota', 2000)
// console.log(myCar)

//  CALLBACK

// const Hello = () =>{
//   console.log("hello")
// }

// const sum = (a,b) =>{
//     console.log(a+b)
//   }

// const display = (a,b, sum) =>{
//     sum(a,b)
// }
// console.log(display(3,4, sum))

// NESTED CALLBACK

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log('data', dataId)
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000);
// }

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3)
//     })
// })

// let myPromise = new Promise((resolve, reject) =>{
//    setTimeout(() => {
//     console.log('error')
//     resolve('success')
//    }, 1000);
// })

// let myPromise = new Promise((resolve, reject) =>{
//   let success = false

//   if(success){
//     resolve('success')
//   }else{
//     reject('error')
//   }
//  })

//  myPromise.then((result)=>{
//     console.log(result)
//  }).catch((result) =>{
//     console.log(result)
//  })

// function myPromise1(){
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("data1");
//           resolve("success");
//         }, 4000);
//       });
// }

// function myPromise2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data2");
//         resolve("success");
//       }, 4000);
//     });
//   }

// console.log("fetching data1...");
// myPromise1().then((res) =>{
// console.log("fetching data2...");
// return myPromise2()
// .then((res) =>{
//     console.log("fetchd all")
// })
// })

// let myData = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(1)
//     }, 2000);
// })

// .then((res) =>{
//     console.log(res);
//     return res * 2;
// })
// .then((res) =>{
//     console.log(res)
//      return res * 2
// })
// .then((res) =>{
//     console.log(res)
// })

// ASYNC AND await

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getAllData() {
//   console.log("fetching data 1");
//   await getData(1);
//   console.log("fetching data 2");
//   await getData(2);
//   console.log("fetching data 3");
//   await getData(3);
//   console.log("fetching data 4");
//   await getData(4);
// }

// getAllData();

// async function  getAllData() {
//     let res = await fetch('https://fakestoreapi.com/products',);
//    let  jsonData = await res.json();
//     console.log(jsonData)
// }
// getAllData()

// CREATE POST

// async function createPost() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: "this is 2nd data",
//             body: 'This is the content of my 2nd post',
//             userId: 1
//         }),
//         headers: {
//             'content-type' : "application/json; charset=UTF-8"
//         }
//     })
//     let data = await response.json();
//     console.log(data)
// }

// // createPost()

// let para = document.querySelector('.content')
// let toggleBtn = document.querySelector("#toggle")

// async function getAllData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')

//     let data = await response.json()
//     para.innerText = data[5].body

// }

// toggleBtn.addEventListener('click', getAllData)

//  JAVASCRIPT PRACTICE QUESTION AND ANSWER

// 2️⃣ FizzBuzz Problem (Classic)

// Question
// Print numbers from 1 to 100:

// If a number is divisible by 3 → print "Fizz".

// If divisible by 5 → print "Buzz".

// If divisible by both 3 and 5 → print "FizzBuzz".

// Otherwise, print the number itself.

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 === 0) {
//     console.log("Fizz");
//   }
//   else if (num % 5 === 0) {
//     console.log("Buzz");
//   }

//   else if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   else{
//     console.log(num);
//   }
// }

// 3️⃣ Find the Largest Number in an Array
// Question:
// Write a function that finds the largest element in a given array.

// Example:
// [1, 5, 8, 20, 13] → 20

// let largestNum = [1, 5, 8, 20, 13];
// let max = 0;

// for(let i = 0; i <= 4; i++){
//     if(largestNum[i] >= max){
//         max = largestNum[i];
//     }
// }
// console.log(max)

// using String

// let number = '1234679'
// let max = 0;
// for(let i= 0; i <=6; i++){
//     if(number[i] >= max){
//         max = number[i]
//     }
// }
// console.log(max)

// 5️⃣ Count Vowels in a String
// Question:
// Write a function that counts how many vowels (a, e, i, o, u) are present in a string.

// Example:
// "I am learning JavaScript" → 8 vowels

// const findVowels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if ((char === "a" || char === "e" || char === "i" || char === "o" || char === "u")){
//         count++
//     }
//   }
//   return count
// };

// const findVowels = (str) =>{
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let found = [];

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char))
//             found.push(char)
//     }
//     return found;
// }

// let result = findVowels("I Am learning JavaScript");
// console.log(result)

// 4️⃣ Reverse a String (without .reverse())
// Question:
// Create a function that reverses a string manually.

// Example:
// "hello" → "olleh"

// let reversed =  ["Banana", "Orange", "Apple", "Mango"];
// let d =  reversed.reverse()
// console.log(d)

// function reverseStr(str){
//     let newString = '';
//     for(let i = str.length - 1;  i >= 0; i--){
//      newString += str[i]
//      console.log(newString)

//     }
//  }

//  reverseStr('najeeb')

// function reverseStr(str){
//     let result =  str.split('').reverse().join('')
//     console.log(result)

// }
// reverseStr('hello')

// 1️⃣ Palindrome Checker
// Question:
// Write a function that checks whether a given string is a palindrome (same forward and backward).

// Example:
// "racecar" → true
// "hello" → false

//  for number

// function palindromeCheck(str){
//     let reverseVal = str.split('').reverse().join('')
//     let result = str === reverseVal
//    console.log(result)

// }
// palindromeCheck('hello') //false
// palindromeCheck('racecar') //true

// NEXT MESSION WITH 5 QUESTION

// 1️⃣ Find Factorial of a Number

// Question:
// Write a function to find the factorial of a number n.

// Example:
// 5! = 5×4×3×2×1 = 120

// const findFactorial =(num) =>{
//   let res = 1;
//   for(let i = num; i >= 1; i--){
//     res *= i
// }
// return res;

// }

// const result = findFactorial(5)
// console.log(result)

// 2️⃣ Sum of All Numbers in an Array

// Question:
// Write a function that calculates the sum of all numbers inside an array.

// Example:
// [1, 2, 3, 4, 5] → 15

// let arr = [1, 2, 3, 4, 5, 7];
// let sum = 0;

// function findTotolSum() {
//   arr.reduce((curr, prev) => {
//     sum = curr + prev;
//     return curr + prev;
//   });
// }
// findTotolSum();
// console.log(sum);

// 3️⃣ Find Duplicate Elements in an Array

// Question:
// Create a function that returns all duplicate elements in an array.

// Example:
// [1,2,3,2,4,5,1] → [1,2]

// let arr = [1,2,3,2,4,5,1,5]

// let duplicate = arr.filter((item, index) => arr.indexOf(item) !== index)
// duplicate.sort()

// console.log(duplicate)

// 4️⃣ Find the Longest Word in a String

// Question:
// Write a function to find the longest word in a sentence.

// Example:
// "I am learning JavaScript very seriously" → "JavaScript"

// 5️⃣ Check Prime Number
// Question:
// Write a function to check if a number is prime or not.

// Prime number = Only divisible by 1 and itself
// Example:
// 2, 3, 5, 7, 11, 13, 17 are prime numbers.

// let PrimeNumber = (num) => {
//   isPrime = true;

//   if (num === 1) {
//     console.log("1 is not prime and nor composite number");
//   } else if (num > 1) {
//     for (let i = 2; i <= num / 2; i++) {
//       if (num % 2 === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(`${num} is a prime number`);
//     } else {
//       console.log(`${num} is not a prime number`);
//     }
//   } else {
//     console.log("The number is not a prime number.");
//   }
// };
// console.log(PrimeNumber(9));

// 🧠 10 Easy JavaScript Logic Problems:

// 1. Print numbers from 1 to 10
// for(let i = 1; i <= 100; i++){
//   console.log(i)
// }

// 2. Print even numbers from 1 to 20
// for(let i = 1; i <= 20; i++){
//   if(i%2 === 0){
//     console.log(i ,'Even number')
//   }
// }

// 3. Find the sum of numbers from 1 to 100

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 4. Find if a number is even or odd
// let sum = 0;
// for(let num = 1; num <= 50; num++){
//   if(num % 2 === 0){
//     console.log("even number", num)
//   }else{
//     console.log('odd number', num)
//   }
//   sum = sum + num;

// }
// console.log(sum) //1275

// ✅ Take a number. Check if number % 2 == 0.

// let findEvenOdd = (num) =>{
//   if(num % 2 === 0){
//     console.log('even number', num)
//   }else{
//     console.log('odd number', num)
//   }
// }

// const result = findEvenOdd(2340)
// console.log(result)

// 5. Find the largest of two numbers

// let findLargestVal = (a,b) =>{
//   if(a > b){
//     console.log('A is greater then B')
//   }
//   else {
//     console.log('B is greater then A')
//   }
// }

// let result = findLargestVal(32,4)
// console.log(result)

// 6. Reverse a string

// let reverseStr = (str) =>{
//   return str.split('').reverse().join('')
// }

// let result = reverseStr('hello')
// console.log(result)

// without javascript method

// let result = findLargestVal(32,4)
// console.log(result)

// 6. Reverse a string

// let reverseStr = (str) => {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//     console.log(newString);
//   }
// };

// let result = reverseStr("hello");
// console.log(result);

// 7. Find the factorial of a number

// let findFactorial = (num) =>{
//   let res = 1;
//     for(let i = 1;  i <= num; i++){
//       res *= i;
//     }
//     return res;
// }

// let res = findFactorial(5)
// console.log(res)

// 8. Check if a word is a palindrome

// let findPalindrome = (str) =>{
//    let reverseStr = str.split('').reverse().join('')
//    return reverseStr === str

// }
//   let findPalindrome = (str) =>{
//       let newString = '';
//       for (let i = str.length - 1; i >= 0;  i--){
//         newString +=  str[i]
//     }

//     return newString === str;
//     }

// let res = findPalindrome('razarr') // false,
// // let res = findPalindrome('razarr') // true,

// console.log(res)

// 9. Find the minimum number in an array

// let arr = [2,3,45,6,66,576]
// let res = Math.min(...arr)
// console.log(res)

// 10. Remove duplicates from an array

// let arr = [2,3,45,6,66,576]
//  let res = arr.filter((item, index) => item.indexOf() !== index )
//  console.log(res)

//  🧠 20 More JavaScript Logic Problems:
// 1. Find the sum of all even numbers between 1 and 50.
// for (let i = 1; i <= 50; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// 2. Count how many vowels are in a string.

// let findVowels = (str) =>{
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let newArr = [];
//     for(let char of str.toLowerCase())
//       if(vowels.includes(char)){
//         newArr.push(char)
//       }
//     return newArr
// }

// let res = findVowels('hElloOksdupqwajkva icaf naskjfaiufkjhauiraskflauy')
// console.log(res)

// 3. Find the largest number in an array without using Math.max().

// let arr = [1,2,4,6,65,34,343]
// let max = 0;

// for(let i = 0; i <= 6; i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log(max)

// 4. Find the second largest number in an array.

// let arr = [1,2,63,65,34,43,99,100,42]

// arr.sort((a, b) => b - a)

// let secondLargest = arr[1]
// console.log(secondLargest)

// 5. Print a multiplication table of any number (like 5 × 1 = 5, 5 × 2 = 10...).

// let muitipleTable = (num) =>{
//     for(let i = 1; i <= 10; i++){
//       let muilti = i * num
//       console.log(`the multiple ${num} * ${i} = ${muilti}`)
//     }
// }

// let res = muitipleTable(5);;
// console.log(res)

// 6. Swap two variables without using a third variable.

// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c;

// console.log(a)
// console.log(b)

// WITHOUT USING THIRD VAIRBALE

// let a  = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a)
// console.log(b)

// 7. Check if a number is prime (only divisible by 1 and itself).

// let findPrime = (num) => {
//   if (num < 1) {
//     return console.log("enter a positive number");
//   } else if (num === 1) {
//     return console.log("1 is not prime number and nor composite");
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return console.log(`${num}: it is not a pirme number`);
//     }
//   }

//   return console.log(`${num}: it is pirme number`);
// };

// let res = findPrime(25);

// 8. Create a function that returns the first character of a string.

// let findFirstChar = (str) =>{
//   for(let char of str){
//     return char
//   }
// }

// let findFirstChar = (str) => {
//   if (!str) return 'String is empty';
//   return str[0];
// };

// const res = findFirstChar('khello')
// console.log(res)

// 9. Find the length of a string without using .length property.

// let findLength = (str) => {
//   let count = 0;

//   for (let i = 0; i <= str.length; i++) {
//     count = i;
//   }
//   return count;
// };
// let res = findLength("helloooo");
// console.log(res);

// 10. Reverse an array manually (without .reverse()).

// let arr = [1,2,13,4,5,6];
// let newArr = []
// for(let i = arr.length - 1; i >= 0; i--){
//  newArr.push(arr[i])

// }
// console.log(newArr)

// 11. Check if two strings are anagrams.
// (Example: "listen" and "silent" are anagrams.)

// 16. Print all prime numbers between 1 and 50.



// for(let num = 2; num <= 50; num++){
//   isPrime = true;

//   for(let i = 2; i <= Math.sqrt(num); i++){
//     if(num % i === 0){
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     console.log(num)
//   }
// }

// 17. Find the missing number in an array from 1 to 10.



// 18. Create a function that capitalizes the first letter of each word in a sentence.




// function capitalizeWords(sentence) {
//   return sentence
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }

// // Example usage:
// const input = "hello world, this is javascript!";
// const result = capitalizeWords(input);
// console.log(result)

// 12. Remove all falsy values (false, 0, '', null, undefined, NaN) from an array.


// let removeFalsyValues = (arr) =>{
//   return arr.filter(Boolean);

// }

// const myArray = [0, "hello", false, 42, "", null, undefined, NaN, "world"];

// let res = removeFalsyValues(myArray)
// console.log(res)


// 13. Find the number of digits in a number.
// (Example: 4567 → 4 digits.)

