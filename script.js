const root = document.documentElement;
const themeToggleButton = document.getElementById("theme-toggle");
const themeToggleText = document.getElementById("theme-toggle-text");
const yearSpan = document.getElementById("year");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggleText.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemPrefersDark ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  const initialTheme = getPreferredTheme();
  setTheme(initialTheme);

  themeToggleButton.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  yearSpan.textContent = new Date().getFullYear();
});
