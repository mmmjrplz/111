// //1
// let a = +prompt("Первое число") 
// let b = +prompt("Второй число") 
// console.log(a+b) 
// console.log(a-b) 
// console.log(a*b) 
// if (b===0) console.log("На 0 делить нельзя") 
// else console.log(a/b)

// //2
// let password = prompt() 
// console.log(password.length >= 10 && password.length <= 20); 

// //3
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 22]; 
// for (let i = 0; i < array.length; i++) 
// { 
//   if ((array[i] % 2) === 0) 
//   { 
//    console.log(array[i]); 
//   } 
// }

// //4 
// const object = { 
//     id: 1, 
//     name: "Konstantin", 
//     lastname: "Gorbunov", 
//     age: 111, 
//     salary: '3000000$ in cash', 
//     manager_name: "Manager of of" 
// };
   
// for (let key in object) { 
//     if (key === "name" || key === "salary") { 
//       console.log(key + ": " + object[key]); 
//     } 
// }

//5
const tables = [ 
  { 
    id: 1, 
    name: 'Dimitry', 
    age: '22', 
    salary: 50, 
  }, 
  { 
    id: 2, 
    name: 'Daniel', 
    age: '23', 
    salary: 0, 
  }, 
  { 
    id: 3, 
    name: 'Leon', 
    age: '30', 
    salary: 1000, 
  }, 
]; 
console.log('1',tables.map((object) => object.name ));  
console.log('2',tables.map(({name, age}) => ({name,age}))); 
console.log('3',tables.reduce((prev, current) => current.salary + prev, 0));