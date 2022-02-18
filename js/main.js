//  Dark Mode

let DarkModeCheck = localStorage.getItem("DarkModeCheck");

const light = document.querySelector(".lightMode");

const dark = document.querySelector(".darkMode");

const body = document.querySelector("body");

const enableDarkMode = () => {
  body.classList.add("DarkMode");

  localStorage.setItem("DarkModeCheck", "enabled");

  light.style.display = "none";

  dark.style.display = "block";
};

const disableDarkMode = () => {
  body.classList.remove("DarkMode");

  localStorage.setItem("DarkModeCheck", null);

  light.style.display = "block";

  dark.style.display = "none";
};

if (DarkModeCheck === "enabled") {
  enableDarkMode();
}

light.addEventListener("click", () => {
  DarkModeCheck = localStorage.getItem("DarkModeCheck");

  if (DarkModeCheck !== "enabled") {
    enableDarkMode();
  }
});

dark.addEventListener("click", () => {
  DarkModeCheck = localStorage.getItem("DarkModeCheck");

  if (DarkModeCheck !== null) {
    disableDarkMode();
  }
});

mediumZoom(".zoom", {
  margin: 20,
  scrollOffset: 120,
  background: "#252525",
});
