"use strict";
// // 1. Define a custom type called Student
// type Student = {
//   name: string;
//   age: number;
//   gender?: string; // optional
//   greet: (country: string) => string;
// };
// // 2. Create a student object using that type
// const student1: Student = {
//   name: "Vinod",
//   age: 29,
//   greet: (country: string): string => {
//     return `Welcome! My name is ${student1.name}, I am ${student1.age} yrs old & I am from ${country}`;
//   },
// };
// // 3. A function that introduces a student
// const introduction = (student: Student): string => {
//   const { name, age } = student;
//   console.log("Logging details...");
//   console.log(`Name: ${name}, Age: ${age}`);
//   return `Welcome! My name is ${name}, I am ${age} yrs old`;
// };
// // 4. Call the functions
// console.log(introduction(student1));
// console.log(student1.greet("India"));
// 1. Create a custom type called PersonInfo
// 
function add(a, b) {
    console.log("Type of a:", typeof a);
    console.log("Type of b:", typeof b);
}
// Call with numbers
const result1 = add(5, 10);
// Call with strings
const result2 = add("Hello", "World!");
