// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // 2. Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // 3. Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // 4. Render a table with Vanilla JS
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  
  const header1 = document.createElement("th");
  header1.textContent = "First Name";
  const header2 = document.createElement("th");
  header2.textContent = "Location";
  
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);
  
  // 5. Loop through students and create rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // 6. Add the table to the document body
  document.body.appendChild(table);
  