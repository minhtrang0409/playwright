const trang = { name: "Trang", grades: [9, 8, 7] };
const nhoi = JSON.parse(JSON.stringify(trang));
nhoi.name = "Nhoi";
nhoi.grades = [10, 8, 3];

const nhoi2 = JSON.parse(JSON.stringify(trang));
nhoi2.name = "LA";
nhoi2.grades = [10, 8, 7];

//Usage
const bestStudentInfo = findBestStudent([trang, nhoi, nhoi2]);
const { bestStudent, currentHighestAvg } = bestStudentInfo;
console.log(`The best student is ${bestStudent.name} with avg grades ${bestStudent.grades}`);


//Controller
function  findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighestAvg = 0;
    for (const student of students) {
        const avgGrades = calculateAvgGrades(student.grades);
        if (avgGrades > currentHighestAvg) {
            bestStudent = student;
            currentHighestAvg = avgGrades;
        }
    }
    return {bestStudent, currentHighestAvg};
}
function calculateAvgGrades(grades) {
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}