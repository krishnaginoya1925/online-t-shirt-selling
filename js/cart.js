

let price = 78;
let qty = 1;
const delivery = 10;
const gstRate = 0.18;

function updateCart() {
  document.getElementById("qty").innerText = qty;

  let subtotal = price * qty;
  let gst = subtotal * gstRate;
  let total = subtotal + gst + delivery;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("gst").innerText = gst.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

function increaseQty() {
  qty++;
  updateCart();
}

function decreaseQty() {
  if (qty > 1) {
    qty--;
    updateCart();
  }
}

function removeItem() {
  document.querySelector(".cart-container").innerHTML =
    "<h2 style='text-align:center;'>Your cart is empty</h2>";
  document.querySelector(".summary-box").style.display = "none";
}

updateCart();
