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
