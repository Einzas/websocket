const Student = require('./student.js');

class StudentList {
  constructor() {
    this.students = [
      new Student('John'),
      new Student('Jane'),
      new Student('Mario'),
      new Student('Luigi'),
    ];
  }

  addStudent(name) {
    const student = new Student(name);
    this.students.push(student);
    return student;
  }

  getStudents() {
    return this.students;
  }

  increaseVotes(id) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.votes++;
      }
      return student;
    });
  }

  removeStudent(id) {
    this.students = this.students.filter((student) => student.id !== id);
  }

  changeStudentName(id, name) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.name = name;
      }
      return student;
    });
  }
}

module.exports = StudentList;
