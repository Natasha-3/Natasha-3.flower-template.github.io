const menuIcon = document.getElementsByClassName("icon-menu-wrap")[0];
const navigationMenu = document.getElementsByClassName("navigation__menu")[0];
const login = document.getElementsByClassName("login")[0];
const footerMenuContainer = document.getElementsByClassName(
    "footer-wrap__footer-menu-container")[0];

menuIcon.onclick = function () {
  if (menuIcon.classList.contains("active-button")) {
    menuIcon.classList.toggle("active-button");
    navigationMenu.style.visibility = "hidden";
  } else {
    menuIcon.classList.toggle("active-button");
    navigationMenu.style.visibility = "visible";
  }
};

navigationMenu.onclick = function (event) {
  if (window.innerWidth < 1224) {
    let target = event.target;
    while (target !== navigationMenu) {
      if (target.tagName == "LI") {
        navigationMenu.style.visibility = "hidden";
        menuIcon.classList.remove("active-button");
        return;
      }
      target = target.parentNode;
    }
  }
};

login.onclick = function () {
  if (window.innerWidth < 1224) {
    login.classList.toggle("active-button");
  }
};

footerMenuContainer.onclick = function (event) {
  let target = event.target;
  if (target.tagName === "SPAN") {
    if (target.classList.contains("icon-triangle-down")) {
      target.classList.remove("icon-triangle-down");
      target.classList.add("icon-triangle-up");
      target.nextElementSibling.style.display = "block";
    } else {
      target.classList.remove("icon-triangle-up");
      target.classList.add("icon-triangle-down");
      target.nextElementSibling.style.display = "none";
    }
  }
};

