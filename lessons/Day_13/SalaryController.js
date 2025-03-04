class SalaryControler {

    getTotalSalary(employList) {
        let totalSalary = 0;
        for (const employee of employList) {
            totalSalary = totalSalary + employee.salary;
        }
        return totalSalary;
    }
} 
module.exports = SalaryControler;