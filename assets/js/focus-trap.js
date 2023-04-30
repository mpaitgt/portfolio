const menuContainer = document.querySelector(".navbar");

const focusSelectors = [
  "#burger.active", // close button
  "li.nav__link", // nav menu items
  'input[type="checkbox"]#darkmode', // dark mode toggle
];

let menuHasEventListener = false;

// util fn
const isNavCollapsed = (width) => {
  if (typeof width !== "number") return false;
  return width <= 952;
};

// trap focus function provided to the keydown event listener
const trapFocus = function (e) {
  const focusableElements = menuContainer.querySelectorAll(focusSelectors);

  const isTabKey = e.key === "Tab";
  const KEYCODE_TAB = 9;

  if (
    !e ||
    e.keyCode !== KEYCODE_TAB ||
    !focusableElements.length ||
    !isTabKey
  ) {
    return;
  }

  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  if (e.shiftKey) {
    /* shift + tab */
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
};

// check onload if we need to apply trap focus for mobile menu
if (isNavCollapsed(window.innerWidth)) {
  menuContainer.addEventListener("keydown", (e) => {
    trapFocus(e, menuContainer, focusSelectors.join(", "));
  });
}

// event listener to add/remove event listener on resize when needed
window.addEventListener("resize", (e) => {
  const screenSize = window.innerWidth;

  if (isNavCollapsed(screenSize) && !menuHasEventListener) {
    // apply trap focus to menu when nav is collapsed
    menuContainer.addEventListener("keydown", trapFocus);
    menuHasEventListener = true;
  } else if (screenSize >= 953 && menuHasEventListener) {
    // remove trap focus to menu when nav is uncollapsed
    menuContainer.removeEventListener("keydown", trapFocus);
    menuHasEventListener = false;
  }
});
