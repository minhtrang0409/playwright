const Employee = require('./Employee');
const SalaryControler = require('./SalaryController');

//Create Data || OOP
let teo = new Employee('Teo', 22, 1000);
let ti = new Employee('Ti', 23, 2000);
let tun = new Employee('Tun', 24, 3000);

// Init controller, process data
let salaryControler = new SalaryControler();
const totalSalary = salaryControler.getTotalSalary([teo, ti, tun]);
console.log(totalSalary);