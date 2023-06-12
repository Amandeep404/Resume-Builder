document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the resume content from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const encodedResume = urlParams.get("resume");

  // Set the initial resume content in the textarea
  const resumeContentTextarea = document.getElementById("resume-content");
  resumeContentTextarea.value = decodeURIComponent(encodedResume);

  // Event listener for the "Update Resume" button
  document
    .getElementById("update-button")
    .addEventListener("click", function () {
      const updatedResume = resumeContentTextarea.value;

      // Encode the updated resume content as a URL parameter
      const encodedUpdatedResume = encodeURIComponent(updatedResume);

      // Redirect back to the resume display page with the updated resume content
      window.location.href = `resume-display.html?resume=${encodedUpdatedResume}`;
    });

  // Event listener for the "Edit Resume" button
  document.getElementById("edit-button").addEventListener("click", function () {
    // Redirect back to the resume builder page
    window.location.href = "build-resume.html";
  });
});
