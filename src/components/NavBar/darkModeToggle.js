function darkModeToggle() {
  const darkModeIcon = document.querySelector("#theme-toggle-dark-icon");
  const lightModeIcon = document.querySelector("#theme-toggle-light-icon");

  darkModeIcon.classList.toggle("hidden");
  lightModeIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

export default darkModeToggle;
