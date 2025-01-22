const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search");
const addForm = document.getElementById("add-st");
const EdM = document.getElementById("edit-modal");
const closeEditModalBtn = document.getElementById("close-edit-modal");
const editForm = document.getElementById("edit-form");
let students = getLc();
let editIndex = null; 

function getS() {
  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${student.firstName}</td>
     <td>${student.lastName}</td>
     <td>${student.group}</td>
     <td>${student.works ? "Ha" : "Yo'q"}</td>
     <td>
       <button style="box-shadow: 0 0 7px orange" onclick="openEditModal(${index})">
         <i class="fa-solid fa-pen-to-square"></i>
       </button>
       <button style="box-shadow: 0 0 7px red" onclick="deleteStudent(${index})">
         <i class="fa-solid fa-trash"></i>
       </button>
     </td>`;
    tableBody.appendChild(tr);
  });
}

getS();

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  students.push({
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    group: e.target.group.value,
    works: e.target.works.checked,
  });
  getS();
  e.target.reset();
  saveToLc();
  modal.style.display = 'none';

});

function saveToLc() {
  localStorage.setItem("students", JSON.stringify(students));
}

function getLc() {
  const storedData = localStorage.getItem("students") || "[]";
  return JSON.parse(storedData);
}

function deleteStudent(index) {
  students.splice(index, 1);
  getS();
  saveToLc();
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredStudents = students.filter((student) => {
    return (
      student.firstName.toLowerCase().includes(searchTerm) ||
      student.lastName.toLowerCase().includes(searchTerm) ||
      student.group.toLowerCase().includes(searchTerm)
    );
  });
  tableBody.innerHTML = "";
  filteredStudents.forEach((student, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
     <td>${index + 1}</td>
     <td>${student.firstName}</td>
     <td>${student.lastName}</td>
     <td>${student.group}</td>
     <td>${student.works ? "Ha" : "Yo'q"}</td>
     <td>
       <button style="box-shadow: 0 0 7px orange" onclick="openEditModal(${index})">
         <i class="fa-solid fa-pen-to-square"></i>
       </button>
       <button style="box-shadow: 0 0 7px red" onclick="deleteStudent(${index})">
         <i class="fa-solid fa-trash"></i>
       </button>
     </td>`;
    tableBody.appendChild(tr);
  });
});

function openEditModal(index) {
  editIndex = index;
  const student = students[index];
  EdM.style.display = "flex";
  editForm.first_name.value = student.firstName;
  editForm.last_name.value = student.lastName;
  editForm.group_edit.value = student.group;
  editForm.edit_works.checked = student.works;
}

closeEditModalBtn.addEventListener("click", () => {
  EdM.style.display = "none";
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (editIndex !== null) {
    students[editIndex] = {
      firstName: e.target.first_name.value,
      lastName: e.target.last_name.value,
      group: e.target.group_edit.value,
      works: e.target.edit_works.checked,
    };
    editIndex = null;
    getS();
    saveToLc();
    EdM.style.display = "none";
    e.target.reset();
  }
});
