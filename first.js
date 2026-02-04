function Person(name , age){
    this.name=name;
    this.age=age;
} // this will act as the base for others in heirarchy.


Person.prototype.printDetails = function(){
    console.log(`My Name is ${this.name}.My age is ${this.age}. My employeeid is ${this.empId}`);
}

function Employee(name , age , empId){
    Person.call(this,name,age);//parent constructor calliing
    this.empId=empId;
  
}
Employee.prototype = Object.create(Person.prototype); // It basically links the prototype of Person with Employee's prototype.
Employee.prototype.constructor = Employee;


function Developer(name, age, empId, role) {
  Employee.call(this, name, age, empId);
  this.role = role;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;


Developer.prototype.getRole = function(){
    console.log(`I am working at to the new as ${this.role}`);
}

let obj = new Developer("Ambar" , 21 , 8859 , "Fullstack Developer");
console.log(obj);
obj.printDetails();
obj.getRole();