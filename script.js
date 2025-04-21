
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


let newElement = document.createElement('h1');
let newText = document.createTextNode('This is me Najeeb');

newElement.appendChild(newText)


let element = document.getElementById('test')
// element.appendChild(newElement)

element.insertBefore(newElement, element.childNodes[0])
console.log(element)


















