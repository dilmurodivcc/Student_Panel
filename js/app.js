const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search");
const add = document.getElementById("add-st");
const deleteBtn = document.getElementById("delete")
const editBtn = document.getElementById("edit");

let students = getLc();

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
                  <button style="box-shadow: 0 0 7px orange" id="open-edit-modal">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button style="box-shadow: 0 0 7px red" id="delete">
                    <i class="fa-solid fa-trash" onclick="deleteStudent(${index})"></i>
                  </button>
                </td>`;
    tableBody.appendChild(tr);
  });
}

getS();

add.addEventListener("submit", (e) => {
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