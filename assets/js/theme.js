// Check for saved theme preference, otherwise use system preference
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Function to set theme
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Update button icon
  const icon = document.querySelector(".theme-toggle i");
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
};

// Initialize theme
document.addEventListener("DOMContentLoaded", () => {
  setTheme(getPreferredTheme());

  // Add click handler to theme toggle button
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
});
