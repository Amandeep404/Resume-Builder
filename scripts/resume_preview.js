window.addEventListener("DOMContentLoaded", () => {
  // Get the resume message from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const resumeMessage = urlParams.get("resume");

  // Decode the resume message from URL
  const decodedResume = decodeURIComponent(resumeMessage);

  // Set the value of the text area
  const resumeContentDiv = document.getElementById("resumeContent");
  resumeContentDiv.innerHTML = decodedResume;
});

function saveResume() {
  const resumeContent = document.getElementById("resumeContent");
  const container = resumeContent.parentElement;
  const previousHeight = container.style.height;
  container.style.height = "auto";

  var opt = {
    margin: 0,
    filename: "Resume_builder.pdf",
    enableLinks: true,
    jsPDF: { unit: "in", format: "a4", orientation: "p" },
  };

  // Use html2pdf library to save the content as PDF
  html2pdf().set(opt).from(resumeContent).save();
  // Restore the original height of the container
  //container.style.height = previousHeight;
}
