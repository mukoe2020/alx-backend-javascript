const express = require('express');
const { readFile } = require('fs');

/**
 * recreate the small HTTP server using Express:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display
 * This is the list of our students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

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

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((data) => {
    // console.log(data);
    res.send(`This is the list of our students\n${data}`);
  }).catch(() => {
    // console.error(error);
    res.send('Cannot load or read the database');
  });
});

app.listen(port);

module.exports = app;
