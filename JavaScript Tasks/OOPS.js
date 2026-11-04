class Student {

    constructor(studentID, studentName, studentAge, studentBranch, studentSpecialization) {
        this.studentID = studentID;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentBranch = studentBranch;
        this.studentSpecialization = studentSpecialization;

    }

    displayDetails() {
        console.log("Student ID :- " + this.studentID);
        console.log("Student Name :- " + this.studentName);
        console.log("Student Age :- " + this.studentAge);
        console.log("Student Branch :- " + this.studentBranch);
        console.log("Student Specialization :- " + this.studentSpecialization);
    }
}

class StudentManagement extends Student {

    constructor(studentID, studentName, studentAge, studentBranch, studentSpecialization) {
        super(studentID, studentName, studentAge, studentBranch, studentSpecialization);
    }

    addStudent() {
        console.log("Student Added Successfully");
        this.displayDetails();
    }

    displayStudent() {
        this.displayDetails();
    }

    removeStudent() {
        console.log("Student Removed Successfully");
    }
}

let studentID = 0;
let studentName = "";
let studentAge = 0;
let studentBranch = "";
let studentSpecialization = "";
let student = null;
let choice = 0;

do {
    choice = Number(prompt(
        "---------------- STUDENT MANAGEMENT PORTAL ----------------\n" +
        "1. Add Student\n" +
        "2. Display Student Details\n" +
        "3. Remove Student\n" +
        "4. Exit\n" +
        "-----------------------------------------------------------\n" +
        "Enter your choice :- "
    ));

    switch (choice) {

        case 1:
            let id = Number(prompt("Enter Student ID :- "));
            let name = prompt("Enter Student Name :- ");
            let age = Number(prompt("Enter Student Age :- "));
            let branch = prompt("Enter Student Branch :- ");
            let specialization = prompt("Enter Student Specialization :- ");

            student = new StudentManagement(id, name, age, branch, specialization);

            student.addStudent();
            break;

        case 2:
            if (student != null) {
                student.displayStudent();
            } else {
                console.log("No Student Record Found");
            }
            break;

        case 3:
            if (student != null) {
                student.removeStudent();
                student = null;
            } else {
                console.log("No Student Record Found");
            }
            break;

        case 4:
            console.log("Thank you for using Student Management Portal");
            break;

        default:
            console.log("Invalid Choice");
    }

} while (choice != 4);
