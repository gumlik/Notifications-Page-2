"use strict";

// Mark all as read
const ui_all_unread = () => {
  let unread = document.querySelectorAll(".unread");
  let dots = document.querySelectorAll(".dot");

  unread.forEach((element) => element.classList.remove("unread"));
  dots.forEach((element) => element.classList.remove("dot"));
  document.querySelector("span").textContent = 0;
};

// Removes style from unread to read
const markUnread = document.getElementById("mark-all");
markUnread.addEventListener("click", ui_all_unread);

const unreadNotif = document.querySelectorAll(".unread");
for (let i = 0; i < unreadNotif.length; i++) {
  unreadNotif[i].addEventListener("click", function () {
    unreadNotif[i].classList.remove("unread");
  });
}

// counter
// const setCounter = function () {
//   const unreadElementsArr = [...document.getElementsByClassName("unread")];

//   let counter = unreadElementsArr.length;
//   document.querySelector("span").textContent = counter;
//   console.log(counter);
// };
// setCounter();

const setCounter = function () {
  // Get all elements with the "unread" class
  const unreadElementsArr = [...document.getElementsByClassName("unread")];

  // Get the number of elements with the "unread" class
  let counter = unreadElementsArr.length;

  // Update the text content of the "span" element to the number of unread elements
  document.querySelector("span").textContent = counter;
};

const unreadNotifs = document.querySelectorAll(".unread");

for (let i = 0; i < unreadNotifs.length; i++) {
  // Add an event listener to the notification that calls the setCounter function when the notification is clicked
  unreadNotif[i].addEventListener("click", function () {
    // Remove the "unread" class from the clicked notification
    unreadNotif[i].classList.remove("unread");

    // Update the counter
    setCounter();
  });
}

setCounter();
