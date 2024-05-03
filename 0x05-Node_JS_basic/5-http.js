const { createServer } = require('http');
const process = require('process');
const { readFile } = require('fs');

/**
 * create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display This is the list of our students
 * followed by the same content as the file 3-
 * read_file_async.js (with and without the database)
 * - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
const port = 1245;

function homepage(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf8' }, (err, info) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = info.split('\n').filter((line) => line.length > 0);

        const output = [`Number of students: ${lines.length - 1}`];

        const fields = {};
        let isFirstLine = true;
        for (const line of lines) {
          if (isFirstLine) {
            isFirstLine = false;
            continue; // eslint-disable-line
          }
          const student = line.split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          if (student[0] !== 'firstname' && student[3]) {
            fields[student[3]].push(student[0]);
          }
        }
        for (const field in fields) {
          if (field) {
            output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve(output.join('\n'));
      }
    });
  });
}

function students(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    homepage(req, res);
  } else if (req.url === '/students') {
    students(req, res);
  }
})
  .listen(port);

module.exports = app;
