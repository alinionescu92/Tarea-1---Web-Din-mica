let table;
let row;
function addRow(){
    table = document.getElementById("addingRow");
    row = table.insertRow(table.lenth);
    row.innerHTML = "<td>Celda nueva</td><td>Celda nueva</td><td>Celda nueva</td><td>Celda nueva</td>"
}
document.getElementById("addRowButton").addEventListener("click", addRow);