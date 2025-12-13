document.addEventListener("DOMContentLoaded", () => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // =======================
  // CART COUNT
  // =======================
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  const cartTable = document.getElementById("cartTable");
  const totalEl = document.getElementById("total");
  const emptyMsg = document.getElementById("emptyCart");

  // =======================
  // EMPTY CART
  // =======================
  if (cart.length === 0) {
    cartTable.style.display = "none";
    totalEl.style.display = "none";
    emptyMsg.style.display = "block";
    return;
  }

  cartTable.style.display = "table";
  totalEl.style.display = "block";
  emptyMsg.style.display = "none";

  let total = 0;

  cart.forEach((item, index) => {

    // ✅ SAFELY PARSE PRICE
    let price = parseFloat(item.price);

    if (isNaN(price)) price = 0; // fallback safety

    const row = cartTable.insertRow();

    row.innerHTML = `
      <td>
        <div style="display:flex;align-items:center;gap:15px;justify-content:center;">
          <img src="${item.img}" width="60" style="border-radius:8px;">
          <span>${item.name}</span>
        </div>
      </td>
      <td>$${price}</td>
      <td>
        <button onclick="removeItem(${index})">Remove</button>
      </td>
    `;

    total += price;
  });

  totalEl.innerText = `Total: $${total}`;
});

// =======================
// REMOVE ITEM
// =======================
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
