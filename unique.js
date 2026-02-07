let arr = [1,2,3,4,3,3,3,1,2,3,1,3,4]
console.log("Array Before --> ")
console.log(arr);


let s = new Set(arr);

arr= [...s];

console.log("Array after --> ")
console.log(arr);