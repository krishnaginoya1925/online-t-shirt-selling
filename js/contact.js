// alert("JS Loaded");

document.addEventListener("DOMContentLoaded", function () {
  const accountBtn = document.getElementById("accountBtn");
const dropdown = document.getElementById("accountDropdown");

accountBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

document.addEventListener("click", () => {
  dropdown.classList.remove("show");
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("Logged out successfully");
});



  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    successMsg.classList.add("show");

    // Reset form
    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
      successMsg.classList.remove("show");
    }, 3000);
  });
});
