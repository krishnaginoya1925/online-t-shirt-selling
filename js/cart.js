<<<<<<< HEAD
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
=======
const delivery = 10;
const gstRate = 0.18;

document.addEventListener("click", function (e) {

  // INCREASE QTY
  if (e.target.classList.contains("plus")) {
    const qtySpan = e.target.parentElement.querySelector(".qty");
    qtySpan.innerText = parseInt(qtySpan.innerText) + 1;
    updateCart();
  }

  // DECREASE QTY
  if (e.target.classList.contains("minus")) {
    const qtySpan = e.target.parentElement.querySelector(".qty");
    let qty = parseInt(qtySpan.innerText);
    if (qty > 1) {
      qtySpan.innerText = qty - 1;
      updateCart();
    }
  }

  // REMOVE ITEM
  if (e.target.classList.contains("remove-btn")) {
    e.target.closest(".cart-left").remove();
    updateCart();
  }

});

function updateCart() {
  let subtotal = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseFloat(
      item.querySelector(".price").innerText.replace("$", "")
    );
    const qty = parseInt(item.querySelector(".qty").innerText);

    subtotal += price * qty;
  });

  if (subtotal === 0) {
    document.querySelector(".cart-right").style.display = "none";
    document.querySelector(".cart-layout").innerHTML =
      "<h2 style='text-align:center;'>Your cart is empty</h2>";
    return;
  }

  const gst = subtotal * gstRate;
  const total = subtotal + gst + delivery;
>>>>>>> 198aa30fc433491dca86bb5cf3af3f5aa04365cf

    cart.forEach((item, index) => {
      total += item.price * item.qty;

<<<<<<< HEAD
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
=======
function goToCheckout() {
  window.location.href = "checkout.html";
}
>>>>>>> 198aa30fc433491dca86bb5cf3af3f5aa04365cf

  renderCart();
});
