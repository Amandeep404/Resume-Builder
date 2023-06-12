function redirectToBuildResume() {
  window.location.href = "build.html";
}

/*                   FAQ SECTION CODE STARTS HERE  */
let answers = document.querySelectorAll(".accordion");

answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      // Close any previously expanded question
      answers.forEach((otherEvent) => {
        if (otherEvent !== event && otherEvent.classList.contains("active")) {
          otherEvent.classList.remove("active");
        }
      });

      event.classList.add("active");
    }
  });
});

/*                   FAQ SECTION CODE ENDS HERE  */

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "whitesmoke";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "#1d1d1d";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
