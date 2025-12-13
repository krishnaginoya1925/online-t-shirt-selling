document.addEventListener("DOMContentLoaded", () => {

    // Load wishlist safely
    let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
    let container = document.getElementById("wishlistBox");

    if (!container) return;

    // ---------------- LOAD WISHLIST ----------------
    function loadWishlist() {
        container.innerHTML = "";

        if (wishlistData.length === 0) {
            container.innerHTML =
                "<h2 style='grid-column:1/-1; text-align:center;'>No items in wishlist</h2>";
            return;
        }

        wishlistData.forEach(item => {
            let price = Number(item.price);
            if (isNaN(price)) price = 0; // safety

            container.innerHTML += `
                <div class="wishlist-item" id="item-${item.id}">
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>₹ ${price}</p>

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

    // ---------------- REMOVE FROM WISHLIST ----------------
    window.removeItem = function (id) {
        wishlistData = wishlistData.filter(item => item.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(wishlistData));

        const el = document.getElementById("item-" + id);
        if (el) el.remove();

        if (wishlistData.length === 0) {
            container.innerHTML =
                "<h2 style='grid-column:1/-1; text-align:center;'>No items in wishlist</h2>";
        }
    };

    // ---------------- MOVE TO CART ----------------
    window.moveToCart = function (id) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let selectedItem = wishlistData.find(item => item.id === id);
        if (!selectedItem) return;

        let price = Number(selectedItem.price);
        if (isNaN(price)) price = 0; // safety fallback

        let existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({
                id: selectedItem.id,
                name: selectedItem.name,
                price: price,
                img: selectedItem.img,
                qty: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart 🛒");

        removeItem(id); // auto remove from wishlist
    };

    // Initial load
    loadWishlist();
});
