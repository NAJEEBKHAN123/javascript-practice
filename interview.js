// const name = 'najeeb';
// console.log(name)
// name = 'khan'
// console.log(name)


// let val = [1,2,3,4]

// let [a,b,c] = [1,2,3];
// console.log(c)


// let student = {
//   name : 'najeeb',
//   age: 20,
//   num : 2123
// }

// const {name, age} = student;
// console.log(age)

// let arr1 = [1,2,3];
// let arr2 = [...arr1, 4,5]
// console.log(arr2)

// let user = {name: 'najee', age: 21};
// let newUser = {...user, city: 'bajaur'}


// console.log(newUser)

// let user = {name: 'anje', age: 21, city: 'pesh' }

// const {name, ...rest} = user;
// console.log(name)
// console.log(rest)

// TEMPLATE LITERALS 

// let name = 'najee';
// let age = 21;
// console.log(`My name is ${name} and i'm ${age} year old`)


// let myPromise = new Promise((resoved, rejected) =>{
//     let success = true;

//     if(success){
//         resoved('promise filfilled')
//     }
//     else {
//         rejected('promise rejected')
//     }
// })

// myPromise
// .then((message) =>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// console.log(myPromise)


// function fetchData(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve('data fetched')
//         }, 1000);
//     })
// }

// async function getData(){
//  let data = await fetchData()
//  console.log(data)
// }

// getData()