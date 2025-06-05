"use strict";
// 2. Create a student object using that type
const student1 = {
    name: "Vinod",
    age: 29,
    greet: (country) => {
        return `Welcome! My name is ${student1.name}, I am ${student1.age} yrs old & I am from ${country}`;
    },
};
// 3. A function that introduces a student
const introduction = (student) => {
    const { name, age } = student;
    console.log("Logging details...");
    console.log(`Name: ${name}, Age: ${age}`);
    return `Welcome! My name is ${name}, I am ${age} yrs old`;
};
// 4. Call the functions
console.log(introduction(student1));
console.log(student1.greet("India"));
