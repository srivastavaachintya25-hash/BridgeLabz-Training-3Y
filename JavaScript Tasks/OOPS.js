// Student Management Portal
// Fields:- StudentID, Student Name, Student Age,
// Student Branch, Student Specialization

// Functions:- AddStudent, DisplayDetails, RemoveStudent
// Menu Driven using switch case

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
        console.log("Student Details :-");
        this.displayDetails();
    }

    removeStudent() {
        console.log("Student Removed Successfully");
    }
}

// Initialize Variables

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

            studentID = Number(prompt("Enter Student ID :- "));
            studentName = prompt("Enter Student Name :- ");
            studentAge = Number(prompt("Enter Student Age :- "));
            studentBranch = prompt("Enter Student Branch :- ");
            studentSpecialization = prompt("Enter Student Specialization :- ");

            student = new StudentManagement(
                studentID,
                studentName,
                studentAge,
                studentBranch,
                studentSpecialization
            );

            student.addStudent();

            break;

        case 2:

            if (student != null) {
                student.displayStudent();
            }
            else {
                console.log("No Student Record Found");
            }

            break;

        case 3:

            if (student != null) {
                student.removeStudent();
                student = null;
            }
            else {
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