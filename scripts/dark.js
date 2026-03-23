const darkbut = document.getElementById("dark");
const lightbut = document.getElementById("light");
const defbut = document.getElementById("default");

const THEME_CLASSES = ["theme-dark", "theme-light"];

defbut.addEventListener("click", function (e) {
    document.body.classList.remove(...THEME_CLASSES);
    applyTheme("default");
});

darkbut.addEventListener("click", function (e) {
    document.body.classList.remove(...THEME_CLASSES);
    document.body.classList.add("theme-dark");
});

lightbut.addEventListener("click", function (e) {
    document.body.classList.remove(...THEME_CLASSES);
    document.body.classList.add("theme-light");
});