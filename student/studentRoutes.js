const qs = require('qs');
const studentService = require('./studentService');

module.exports = function studentRoutes(server, connection) {
    server.on('request', async (request, response) => {
        const { method, url } = request;

        if (method === 'POST' && url === '/students') {
            let body = '';

            request.on('data', (chunk) => {
                body += chunk;
            })

            request.on('end', async () => {
                body = qs.parse(body);
                const result = await studentService.postStudent(body.name, body.grade)
                return response.setHeader('content-type', 'json').end(JSON.stringify(result));
            })
        } else if (method === 'GET' && url === '/students') {
            const result = await studentService.getStudentList()
            return response.setHeader('content-type', 'json').end(JSON.stringify(result));
        }
    })
}