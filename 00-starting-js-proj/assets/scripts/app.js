// // // import {apiKey} from "./util.js";

// // // import apiKey from "./util.js";
// // // import {apiKey, abc} from "./util.js";
// // import * as util from "./util.js"

// // console.log("\n");
// // // console.log(apiKey);
// // // console.log(abc);
// // console.log(util);
// // console.log(util.apiKey);
// // console.log(util.abc);

// // console.log("\n");

// // const userName = "Max";
// // const userAge = 34;

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello");
//     console.log(this.age);
//   },
// };
// console.log(user);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// const user2 = new User("Steffen", 34);
// const user3 = new User("Jenny", 27);
// const user4 = new User("Amelie", 8);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
//  user1.greet();

// const array = [1, 2, 3];
// function transformToObjects(numberArray) {
//   const values = numberArray.map((item) => ({ val: item }));
//   return values;
// }

// console.log(transformToObjects(array));

// const userNameData = ["Max", "Schwarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// Destructering
const [firstName, lastName] = ["Max", "Schwarzmüller"];
console.log(firstName, lastName);

// const user = {
//   name: "Max",
//   age: 34,
// };
// const name = user.name;
// const age = user.age;

const {name: userName, age} = {
  name: "Max",
  age: 34,
};
// const name = user.name;
// const age = user.age;

console.log(userName, age);
