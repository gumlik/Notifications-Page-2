"use strict";

const markUnread = document.getElementById("mark-all");

const unreadNotif = document.querySelectorAll(".unread");
for (let i = 0; i < unreadNotif.length; i++) {
  unreadNotif[i].addEventListener("click", function () {
    unreadNotif[i].classList.remove("unread");
  });
}

const removeDot = document.querySelectorAll(".dot");
for (let i = 0; i < removeDot.length; i++) {
  removeDot[i].addEventListener("click", function () {
    removeDot[i].classList.remove("dot");
  });
}
