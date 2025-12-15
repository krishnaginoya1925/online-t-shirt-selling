document.addEventListener("DOMContentLoaded", () => {

  /* ================= ACCOUNT DROPDOWN ================= */
  const accountBtn = document.getElementById("accountBtn");
  const dropdown = document.getElementById("accountDropdown");

  if (accountBtn) {
    accountBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
    });
  }

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    alert("Logged out successfully");
  });

  /* ================= WISHLIST ================= */
  let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
  const container = document.getElementById("wishlistBox");

  if (!container) return;

  function loadWishlist() {
    container.innerHTML = "";

    if (wishlistData.length === 0) {
      container.innerHTML =
        "<h2 style='grid-column:1/-1;text-align:center;'>No items in wishlist</h2>";
      return;
    }

    wishlistData.forEach(item => {
      const price = Number(item.price) || 0;

      container.innerHTML += `
        <div class="wishlist-item" id="item-${item.id}">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>$ ${price}</p>

          <div class="btn-row">
            <button class="remove-btn" onclick="removeItem('${item.id}')">
              Remove
            </button>
            <button class="cart-btn" onclick="moveToCart('${item.id}')">
              Add to Cart
            </button>
          </div>
        </div>
      `;
    });
  }

  /* ================= REMOVE FROM WISHLIST ================= */
  window.removeItem = function (id) {
    wishlistData = wishlistData.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));
    loadWishlist();
  };

  /* ================= ADD TO CART + REDIRECT ================= */
window.moveToCart = function (id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = wishlistData.find(i => i.id === id);
  if (!item) return;

  // Check if already in cart (optional safety)
  const alreadyInCart = cart.find(c => c.id === item.id);
  if (!alreadyInCart) {
    cart.push({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      img: item.img
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to cart");



  // Redirect to cart page
  window.location.href = "cart.html";
};

  loadWishlist();
});
