const studentRepository = require("./studentRepository")

module.exports = studentService = {
    getStudentList: () => studentRepository.getStudentList(),
    postStudent: (name, grade) => studentRepository.postStudent(name, grade)
    ,
}