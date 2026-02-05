1 .When obj.b() is called, 
the function is invoked as a method of obj, so this refers to obj.
Because of that, this.a correctly points to "foo" and "foo" is logged.
However, when obj.b is assigned to c, the function loses its object context.
Calling c() is now just a normal function call, not tied to obj. In non-strict mode, this becomes the global object and hence it do not have b as key hence undefined .



2.The spread operator (...) works on iterable values like strings.
A string is iterable character by character, so spreading 'Lydia' breaks it into individual letters. Each character becomes a separate element in the new array, which is why the result is ["L", "y", "d", "i", "a"].


3.In the first destructuring, const { name } = user; creates a variable called name and assigns it the value "Piyush". In the second destructuring, const { name: myName } = { name: 'Lydia' };, the property name is extracted but stored in a different variable called myName, not in name. This means the second line does not update or overwrite the existing name variable. Therefore, name will still be "Piyush" if it is in the same scope, and it will be undefined only if that original name variable is not accessible in the current scope.



4.Objects in JavaScript are compared by reference, not by value. Even though both objects look identical ({a:1}), they are stored at different memory locations. Because of this, both == and === comparisons return false.
JavaScript does not check the contents of objects for equality, it only checks whether both variables point to the same object.


 5.The members array stores a reference to the object { name: 'Lydia' }. When person is later set to null, only the variable person is changed — the original object is not affected. Since the array still holds the reference to that object, it continues to contain { name: "Lydia" }. That’s why the output is an array with the object still inside it.