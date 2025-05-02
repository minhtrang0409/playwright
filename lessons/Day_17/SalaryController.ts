import {Employee} from './Employee';

const Employee = require('./Employee');

class SalaryController(employeeList: Employee[]):number {

    let totalSalary: number = 0;
    for (const employee of employeeList) {
        totalSalary += employee.salary;
    }
    return totalSalary;
}

export {SalaryController};

