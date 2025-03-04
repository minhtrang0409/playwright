class Employee {
    constructor(name, age, salary){
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get salary(){
        return this._salary;
    }
}
module.exports = Employee;