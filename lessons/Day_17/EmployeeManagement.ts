import { Employee } from "./Employee";
import { SalaryController } from "./SalaryController";

let teo = new Employee("Teo", 1000);
let ti = new Employee("Ti", 2000);

let salaryController = new SalaryController([teo, ti]);
console.log(salaryController);

const totalSalary = salaryController.totalSalary;
console.log(totalSalary);