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
