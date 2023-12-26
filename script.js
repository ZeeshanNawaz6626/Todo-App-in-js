
let data = [];
function addData() {
  const name = document.getElementById("name").value;
  
  if (name) {
    data.push({name});
    updateTable();
    clearForm();
  }
}
function updateTable() {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  data.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.name}</td>
      <td>
        <button onclick="deleteData(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}
function clearForm() {
  document.getElementById("name").value = "";
}
function deleteData(index) {
  data.splice(index, 1);
  updateTable();
}