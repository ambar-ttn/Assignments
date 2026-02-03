1.This implements a calculator using a JavaScript object.
It has methods to read two numbers from the user and perform addition, subtraction, and multiplication.
Each operation is triggered using buttons and displays the result using alerts.


2.This project uses a JavaScript object to convert temperature from Celsius to Fahrenheit and Kelvin.
User input is taken through a prompt, and conversion buttons show results instantly.
A display method shows all temperature values together.  


3.Predict the output and analysis
(a)5
10
undefined
ReferenceError: y is not defined

Explanation:
x is a global variable, so it is accessible inside first().
y is declared inside first() and is accessible inside second() due to scope chain.
z is hoisted but not initialized, so it prints undefined.
Outside first(), y is not accessible, so a ReferenceError occurs.

(b)Due to hoisting, the declaration of variable z is moved to the top of the second() function.
Only the declaration is hoisted, not the initialization.
So when console.log(z) is executed, z exists but has no value yet.
Therefore, the output is undefined.

(c)When console.log(y) is executed inside second(), JavaScript first looks for y in the local scope of second().
Since it is not found there, JavaScript looks in the parent function first().
y is found in first(), so its value is printed.
This process is called the scope chain.

(d)5
10
ReferenceError: Cannot access 'z' before initialization
In case of let we cannot use the variable before its declaration , as the time between the variable is declared and initialized they are in the temporal dead zone and using them in it causes the reference error and the program terminates immidiately.
