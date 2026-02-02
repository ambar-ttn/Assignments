let p = Number(prompt("Enter the principal amount:"));
let r = Number(prompt("Enter the interest rate:"));
let t = Number(prompt("Enter the time"));

document.getElementsByClassName("res")[0].textContent = (p * r * t) / 100;
