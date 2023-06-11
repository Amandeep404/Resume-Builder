function redirectToBuildResume() {
  window.location.href = "build-resume_page.html";
}

/* NIGHT MODE AND LIGHT MODE */
const modeSwitch = document.getElementById("mode-switch");

// Set the initial mode based on the default value of the checkbox
document.body.classList.toggle("light-mode", !modeSwitch.checked);

modeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("light-mode");
});

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
