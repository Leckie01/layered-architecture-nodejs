const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

module.exports = studentRepository = {
    getStudentList: () =>
        new Promise((resolve, reject) => {
            connection.query('SELECT name, grade FROM student', (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve({
                    students: result
                });
            })
        }),
    postStudent: (name, grade) =>
        new Promise((resolve, reject) => {
            connection.query(`INSERT INTO student (name, grade) VALUES ("${name}", ${grade})`, (err) => {
                if (err) {
                    return reject(err);
                }

                return resolve({
                    message: '생성되었습니다.'
                });
            });
        })
}