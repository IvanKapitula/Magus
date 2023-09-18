const popup = document.querySelector(".popup");
const navList = document.querySelector(".nav-list");
const navContacts = document.querySelector(".nav-contacts");
const logo = document.querySelector(".logo");
const showdow = document.querySelector(".showdow");
const navListItems = document.querySelectorAll(".nav-list__item");
const popupItem1 = document.querySelector(".popup__item:nth-child(1)");
const popupItem2 = document.querySelector(".popup__item:nth-child(2)");
const popupItem3 = document.querySelector(".popup__item:nth-child(3)");
const popupItem4 = document.querySelector(".popup__item:nth-child(4)");

popup.addEventListener("click", openMenu);

for (let i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", closeMenu);
}

const body = document.querySelector("body");

body.addEventListener("click", function (event) {
  if (
    event.target !== navList &&
    event.target !== popup &&
    event.target !== popupItem1 &&
    event.target !== popupItem2 &&
    event.target !== popupItem3 &&
    event.target !== popupItem4
  ) {
    closeMenu();
  }
});

function closeMenu() {
  navList.style.left = "150%";
  popupItem1.style.transform = "rotate(0)";
  popupItem2.style.transform = "rotate(0)";
  popupItem3.style.display = "block";
  popupItem4.style.display = "block";
  navContacts.classList.remove("flag");
}

function openMenu() {
  if (!navContacts.classList.contains("flag")) {
    navList.style.left = "30vw";
    navContacts.classList.add("flag");
    popupItem1.style.transform = "rotate(135deg)";
    popupItem2.style.transform = "rotate(215deg)";
    popupItem3.style.display = "none";
    popupItem4.style.display = "none";
    // showdow.style.display = "block";
  } else if (navContacts.classList.contains("flag")) {
    closeMenu();
  }
}
