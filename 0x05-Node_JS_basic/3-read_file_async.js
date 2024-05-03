const fs = require('fs');

/**
 * Create a function named countStudents. It should accept a path in argument
 * The script should attempt to read the database file asynchronously
 * The function should return a Promise
 * If the database is not available, it should throw an error with the text Cannot load the database
 * If the database is available, it should log the following message to the console
 *  Number of students: NUMBER_OF_STUDENTS
 * It should log the number of students in each field, and the list with the following format:
 * Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, info) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = info.split('\n').filter((line) => line.length > 0);

        console.log(`Number of students: ${lines.length - 1}`);

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
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
