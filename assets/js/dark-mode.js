const bodyEl = document.querySelector("body");
const darkmodeIcon = document.querySelector("span.darkmode-icon");
const lightmodeIcon = document.querySelector("span.lightmode-icon");
const darkmodeToggle = document.querySelector("input#darkmode");

const handleThemeChange = (e) => {
  if (!!e) {
    // toggle event handler
    const isDarkMode =
      e.type === "click" ? e.target.checked : !e.target.checked;

    bodyEl.classList.toggle("darkmode");
    darkmodeToggle.checked = isDarkMode;

    console.log({ isDarkMode });

    darkmodeIcon.style.display = isDarkMode ? "block" : "none";
    lightmodeIcon.style.display = isDarkMode ? "none" : "block";
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // onload darkmode preferences
      bodyEl.classList.add("darkmode");
      darkmodeIcon.style.display = "block";
      lightmodeIcon.style.display = "none";
      darkmodeToggle.checked = true;
    }
  }
};

darkmodeToggle.addEventListener("click", handleThemeChange);
darkmodeToggle.addEventListener("keyup", (e) => {
  if (e.key === "Enter") handleThemeChange(e);
});

handleThemeChange();
