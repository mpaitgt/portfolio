const burger = document.getElementById("burger"),
  navContents = document.querySelector(".mobile-nav__container"),
  navItems = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function (e) {
  navContents.classList.toggle("toggle-nav");
  burger.classList.toggle("active");
});

burger.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;

  navContents.classList.toggle("toggle-nav");
  burger.classList.toggle("active");

  if (navContents.classList.contains("toggle-nav")) {
    const ul = document.querySelector("ul.nav__ul");
    ul.firstElementChild.focus();
  }
});

navContents.addEventListener("transitionstart", function (e) {
  if (
    navContents.classList.contains("toggle-nav") &&
    window.innerWidth <= 952
  ) {
    navItems.forEach((item, index) => {
      item.classList.add(`appear-${index + 1}`);
    });
  } else {
    navItems.forEach((item, index) => {
      item.classList.remove(`appear-${index + 1}`);
    });
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    navContents.classList.toggle("toggle-nav");
    burger.classList.toggle("active");
  });

  item.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      navContents.classList.toggle("toggle-nav");
      burger.classList.toggle("active");
    }
  });
});
