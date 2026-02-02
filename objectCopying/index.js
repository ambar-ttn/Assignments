// Original object
let obj1 = {
    name: "Ambar",
    age: 21,
    course: "Web Development"
};

// Empty object to copy data into
let obj2 = {};

// Loop through each property in obj1
for (let key in obj1) {
    // Copy value of each key from obj1 to obj2
    obj2[key] = obj1[key];
}

// Print the copied object
console.log(obj2);

// Original object
// let obj1 = {
//     name: "Ambar",
//     age: 21,
//     course: "Web Development"
// };

 // Copy obj1 into a new object using Object.assign
// let obj2 = Object.assign({}, obj1);

// Print the copied object
// console.log(obj2);

//  Original object
// let obj1 = {
//     name: "Ambar",
//     age: 21,
//     course: "Web Development"
// };

// Copy all properties of obj1 into obj2 using spread operator
// let obj2 = { ...obj1 };

//  Print the copied object
// console.log(obj2);
