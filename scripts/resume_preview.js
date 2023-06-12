// Retrieve the resume text from local storage
const resumeText = localStorage.getItem("resumeText");

// Display the resume content in the textarea
const resumeContent = document.getElementById("resumeContent");
resumeContent.value = resumeText;

// Function to edit the resume content
function editResume() {
  // Enable editing of the textarea
  resumeContent.removeAttribute("readonly");
}
