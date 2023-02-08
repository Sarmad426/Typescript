"use strict";
class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        console.log(`Student ${this.name} is ${this.age} years old and have a ${this.gpa} Gpa.`);
    }
}
const student = new Student("Sarmad", 18, 3.61);
const student2 = new Student("Akmal", 19, 3.43);
//# sourceMappingURL=classes.js.map