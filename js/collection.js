document.addEventListener("DOMContentLoaded", () => {

  const wishBtns = document.querySelectorAll(".wishlist-btn");

  // Highlight already added items on page load
  const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishBtns.forEach(btn => {
    const id = btn.dataset.id;
    const icon = btn.querySelector("i");

    const exists = savedWishlist.some(item => item.id === id);

    if (exists) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "red";
    }
  });

  // Add to wishlist
  wishBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      // IMPORTANT: Reload wishlist every click
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const img = btn.dataset.img;
      const price = btn.dataset.price;
      const icon = btn.querySelector("i");

      const exists = wishlist.some(item => item.id === id);

      if (!exists) {
        wishlist.push({ id, name, img, price });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "red";

        alert("Added to Wishlist ❤️");
      } else {
        alert("Item is already in Wishlist!");
      }
    });
  });
});
