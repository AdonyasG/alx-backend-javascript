const fs = require('fs').promises;

module.exports = async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    let count = 0;
    const fields = {};
    const students = {};
    for (const line of lines) {
      if (line !== '') {
        count += 1;
        const student = line.split(',');
        if (!(student[3] in fields)) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
        students[student[0]] = {
          id: student[0],
          firstName: student[1],
          lastName: student[2],
          field: student[3],
        };
      }
    }
    console.log(`Number of students: ${count - 1}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        if (list.length > 1) {
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
