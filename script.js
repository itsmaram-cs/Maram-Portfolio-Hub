const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("submission-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "submission-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});
