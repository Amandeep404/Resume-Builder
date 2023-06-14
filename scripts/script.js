function redirectToBuildResume() {
  window.location.href = "build.html";
}

// code for dark mode and light mode toggle
const modeToggle = document.getElementById("darkmode-toggle");
const body = document.body;
const root = document.documentElement;

const title = document.querySelector(".text-container .title");
const subtitle = document.querySelector(".text-container .subtitle");
const buildButton = document.querySelector(".text-container .build-button");
const pg3h1Element = document.querySelector(".Third_page .left-section h1");

modeToggle.addEventListener("change", function () {
  if (modeToggle.checked) {
    root.style.setProperty("--background-color", "#1d1d1d");
    root.style.setProperty("--navbar-color", "#151414");
    root.style.setProperty("--button-blue", "#2177da");
    root.style.setProperty("--hover-green", "#49e6b2");
    root.style.setProperty("--text-h1", "#f5f5f5");
    pg3h1Element.style.color = "#1ebde4";
  } else {
    root.style.setProperty("--background-color", "#f2eded");
    root.style.setProperty("--button-blue", "#2177da");
    root.style.setProperty("--hover-green", "#49e6b2");
    root.style.setProperty("--text-h1", "#151414");
  }
});

// toggle script end here

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

function getStartedBtn() {
  window.location.href = "build.html";
}
