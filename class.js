/*
Write a program to implement inheritance upto 3 classes.
The Class must contain private and public variables and static functions.
*/
class Person {
    #name
    age
    constructor(name,age){
        this.age=age;
        this.#name=name;
    }
    get info(){
        console.log(`Hi my name is ${this.#name} and my age is ${this.age}`)
    }
    static createPerson(name,age){
        return new Person(name ,age);
    }

}

class Employee extends Person{
    salary

    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
    }

}

class Youtuber extends Employee{
    subscribers
    constructor(subscribers,name,age,salary){
        super(name,age,salary);
        this.subscribers=subscribers;
    }
    static createX(subscribers,name,age,salary){
        return new Youtuber(subscribers,name,age,salary);
    }
}

let yt = Youtuber.createX(1000000,'Ambar',21,2100000);
yt.info;