let showmenu = document.getElementById("showmenu");

function openmenu() {
  showmenu.style.right = "0";
}

function closemenu() {
  showmenu.style.right = "-200px"; // Match the value used in CSS
}

document.addEventListener("DOMContentLoaded", () => {
  closemenu(); // Ensure the menu is closed on page load
});

let title = document.getElementsByClassName("title");
let tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabName) {
  // Hide all tab-content elements
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active-tab");
  }

  // Remove active-link class from all title elements
  tablinks = document.getElementsByClassName("title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Show the current tab and add an active-link class to the clicked title
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}

// Show the default tab (Skills) on page load
document.getElementById("skill").style.display = "block";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzwY8E4Nzl4ph5slSewLx0ujELxUyctsKgNwbK1etWyPGbNcWJN1bUpcW9gL2ib9vst9Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";

      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
