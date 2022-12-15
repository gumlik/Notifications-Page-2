"use strict";

// Mark all as read
const ui_all_unread = () => {
  let unreadNotifications = document.querySelectorAll(".unread");
  let notifDots = document.querySelectorAll(".dot");

  unreadNotifications.forEach((element) => element.classList.remove("unread"));
  notifDots.forEach((element) => element.classList.remove("dot"));
  document.querySelector("span").textContent = 0;
};

// Removes style from unread to read
const markUnread = document.getElementById("mark-all");
markUnread.addEventListener("click", ui_all_unread);

const unreadNotif = document.querySelectorAll(".unread");
for (let i = 0; i < unreadNotif.length; i++) {
  unreadNotif[i].addEventListener("click", function () {
    unreadNotif[i].classList.remove("unread");
    setCounter();
  });
}

// Updates counter when a notification is read
const setCounter = function () {
  const unreadElementsArr = [...document.getElementsByClassName("unread")];
  let counter = unreadElementsArr.length;
  document.querySelector("span").textContent = counter;
};

setCounter();
