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

let newElement = document.new
console.log(newElement)