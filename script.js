// "use strict";
let menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";
menuList.style.background = "white";

function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.background = "#59d92b";
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.background = "white";
  }
}
