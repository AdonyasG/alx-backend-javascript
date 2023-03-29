interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Adonyas',
    lastName: 'Getachew',
    age: 1000,
    location: 'Addis Ababa'
}
const student2: Student = {
    firstName: 'Chapi',
    lastName: 'Adonyas',
    age: 1000,
    location: 'Addis Ababa'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

// Loop through the studentsList array and append a new row to the table for each student
studentsList.forEach((student) => {
  // Create a new table row element
  const row = table.insertRow();
  
  // Create a new table data element for the first name
  const firstNameData = row.insertCell();
  firstNameData.textContent = student.firstName;
  
  // Create a new table data element for the location
  const locationData = row.insertCell();
  locationData.textContent = student.location;
});

document.body.appendChild(table);