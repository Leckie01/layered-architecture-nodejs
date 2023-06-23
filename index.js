const http = require('http');
const studentRoutes = require('./student/studentRoutes');

const server = http.createServer().listen(process.env.PORT);

studentRoutes(server);

