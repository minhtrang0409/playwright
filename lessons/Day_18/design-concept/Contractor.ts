import Employee from "./Employee";

export default class EmployeeContractor {
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (let employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
}
