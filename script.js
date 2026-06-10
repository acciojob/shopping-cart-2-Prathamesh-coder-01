//your code here
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const grandTotal = document.querySelector(
  '[data-ns-test="grandTotal"]'
);

let total = 0;

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  // Reject invalid input
  if (name === "" || isNaN(price) || price <= 0) {
    return;
  }

  // Remove initial Grand Total row
  if (tableBody.rows.length === 1) {
    tableBody.innerHTML = "";
  }

  // Create item row
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.setAttribute("data-ns-test", "item-name");
  nameCell.textContent = name;

  const priceCell = document.createElement("td");
  priceCell.setAttribute("data-ns-test", "item-price");
  priceCell.textContent = price;

  row.appendChild(nameCell);
  row.appendChild(priceCell);

  tableBody.appendChild(row);

  // Update total
  total += price;

  // Grand total row
  const totalRow = document.createElement("tr");

  const totalText = document.createElement("td");
  totalText.textContent = "Grand Total";

  const totalValue = document.createElement("td");
  totalValue.setAttribute("data-ns-test", "grandTotal");
  totalValue.textContent = total;

  totalRow.appendChild(totalText);
  totalRow.appendChild(totalValue);

  tableBody.appendChild(totalRow);

  // Clear inputs
  nameInput.value = "";
  priceInput.value = "";
});