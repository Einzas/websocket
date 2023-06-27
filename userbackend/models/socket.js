const StudentList = require('./student-list.js');

class Socket {
  constructor(io) {
    this.io = io;
    this.studentList = new StudentList();
    this.socketEvents();
  }
  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('new connection', socket.id);
      socket.emit('current-student', this.studentList.getStudents());
      socket.on('vote-student', (id) => {
        this.studentList.increaseVotes(id);
        this.io.emit('current-student', this.studentList.getStudents());
      });
      socket.on('delete-student', (id) => {
        this.studentList.removeStudent(id);
        this.io.emit('current-student', this.studentList.getStudents());
      });
      socket.on('change-student-name', ({ id, name }) => {
        this.studentList.changeStudentName(id, name);
        this.io.emit('current-student', this.studentList.getStudents());
      });
      socket.on('new-student', ({ name }) => {
        this.studentList.addStudent(name);
        this.io.emit('current-student', this.studentList.getStudents());
      });
    });
  }
}

module.exports = Socket;
