document.addEventListener("DOMContentLoaded", () => {
  // focus email input
  const emailField = document.getElementById("email-address-input");
  if (emailField) {
    emailField.focus({ preventScroll: true });
  }

  // Hamburger menu
  const hamburger = document.getElementById("hamburgerMenu");
  const dropdown = document.getElementById("dropdownMenu");

  if (hamburger && dropdown) {
    hamburger.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  }

  // Wishlist functionality
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const buttons = document.querySelectorAll(".wishlist-btn");

  buttons.forEach(btn => {
    const id = btn.dataset.id;
    const icon = btn.querySelector("i");

    // Highlight saved items
    if (wishlist.some(item => item.id === id)) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "red";
    }

    // Add click listener
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const img = btn.dataset.img;
      const price = btn.dataset.price;

      const index = wishlist.findIndex(item => item.id === id);

      if (index === -1) {
        wishlist.push({ id, name, img, price });
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "red";
        alert("Added to Wishlist ❤️");
      } else {
        wishlist.splice(index, 1);
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "black";
        alert("Removed from Wishlist ❌");
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });
});
