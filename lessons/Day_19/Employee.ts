export default abstract class Employee {
    
    protected bonus: number;
    protected salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

public getSalary(): number {
    return this.salary;
}

// Strong force IS-A relationship
protected abstract setBonus(): void;
//Abstract method không có implementation ở bên trong 

public getBonus(): number {
    return this.bonus;

}
}