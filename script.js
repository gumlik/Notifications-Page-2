"use strict";

// const markUnread = document.getElementById("mark-all");

// const unreadNotif = document.querySelectorAll(".unread");
// for (let i = 0; i < unreadNotif.length; i++) {
//   unreadNotif[i].addEventListener("click", function () {
//     unreadNotif[i].classList.remove("unread");
//   });
// }

// const removeDot = document.querySelectorAll(".dot");
// for (let i = 0; i < removeDot.length; i++) {
//   removeDot[i].addEventListener("click", function () {
//     removeDot[i].classList.remove("dot");
//   });
// }

// document.querySelector("#mark-all").addEventListener("click", function () {
//   for (let i = 0; i < unreadNotif.length; i++) {
//     unreadNotif.classList.remove("unread");
//   }
// });

const ui_all_unread = () => {
  let unread = document.querySelectorAll(".unread");
  let dots = document.querySelectorAll(".dot");

  unread.forEach((element) => element.classList.remove("unread"));
  dots.forEach((element) => element.classList.remove("dot"));
};

const markUnread = document.getElementById("mark-all");
markUnread.addEventListener("click", ui_all_unread);

const unreadNotif = document.querySelectorAll(".unread");
for (let i = 0; i < unreadNotif.length; i++) {
  unreadNotif[i].addEventListener("click", function () {
    unreadNotif[i].classList.remove("unread");
  });
}
