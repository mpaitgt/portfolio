// const menuContainer = document.querySelector(".mobile-nav__container");
// const focusSelectors = "#burger li.nav__link, input[type='checkbox']#darkmode"; // @todo: include div#burger
// let menuHasEventListener = false;

// const isNavCollapsed = (width) => {
//   if (typeof width !== "number") return false;
//   return width <= 952;
// };

// window.addEventListener("resize", function () {
//   const width = window.innerWidth;

//   if (!isNavCollapsed(width)) return;

//   // nav-collapse scenario
//   if (!menuHasEventListener) {
//     console.log(`-----apply trapFocus -----`);
//     menuContainer.addEventListener("keydown", applyTrapFocus);
//     menuHasEventListener = true;
//   } else if (menuHasEventListener) {
//     console.log(`~~~~~ remove trapFocus ~~~~~`);
//     menuContainer.removeEventListener("keydown", applyTrapFocus);
//     menuHasEventListener = false;
//   }
// });

// const applyTrapFocus = function (e) {
//   const focusableElements = document.querySelectorAll(focusSelectors);

//   console.log({ focusableElements });

//   const KEYCODE_TAB = 9;

//   if (!focusableElements || e.key !== "Tab" || e.keyCode !== KEYCODE_TAB) {
//     return;
//   }

//   const firstFocusableElement = focusableElements[0];
//   const lastFocusableElement = focusableElements[focusableElements.length - 1];

//   if (e.shiftKey) {
//     /* shift + tab */
//     if (document.activeElement === firstFocusableElement) {
//       lastFocusableElement.focus();
//       e.preventDefault();
//     }
//   } else {
//     if (document.activeElement === lastFocusableElement) {
//       firstFocusableElement.focus();
//       e.preventDefault();
//     }
//   }
// };

// const initialWidth = window.innerWidth;

// if (isNavCollapsed(initialWidth)) {
//   applyTrapFocus();
// }
