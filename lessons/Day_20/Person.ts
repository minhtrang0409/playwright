export default class Person {

    private name: string;
    private age: number;

    constructor ( name: string, age: number) {
        this.validateAge();
        this.name = name;
        this.age = age;
    }

    // Support method 
    private validateAge(): void {
        if (this.age < 0) {
            throw new Error("Age must be greater than 0");
        }
    }

    // service method
    setAge(age: number): void {
        if (age < 0) {
            throw new Error("Age must be greater than 0");
        }
        this.age = age;
    }

}