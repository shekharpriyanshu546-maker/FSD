const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    body.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = savedTheme === "light" ? "🌙 Dark Mode" : "☀ Light Mode";
}
toggleBtn.addEventListener("click", () => {
    if(body.getAttribute("data-theme") === "light"){
        body.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        toggleBtn.innerHTML = "☀ Light Mode";
    } else {
        body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.innerHTML = "🌙 Dark Mode";
    }
});
