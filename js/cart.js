document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("cartContainer");
  const totalPriceEl = document.getElementById("totalPrice");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty 😢</p>";
      totalPriceEl.textContent = "0";
      return;
    }

    cart.forEach((item, index) => {
      total += item.price * item.qty;

      container.innerHTML += `
        <div class="cart-item">
          <img src="${item.img}">
          <div class="cart-info">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Qty: ${item.qty}</p>
            <button onclick="removeItem(${index})">Remove</button>
          </div>
        </div>
      `;
    });

    totalPriceEl.textContent = total;
  }

  window.removeItem = index => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  renderCart();
});
