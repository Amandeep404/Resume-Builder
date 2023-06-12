// Event listener for the "Generate Resume" button
document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    // Retrieve user inputs
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const education = document.getElementById("education").value;

    // Call the generateResume function
    generateResume(name, position, education);
  });

// Function to generate the resume
function generateResume(name, position, education) {
  // Construct the payload for the OpenAI API request
  const payload = {
    prompt: `Name: ${name}\nPosition: ${position}\nEducation: ${education}\n...`,
    max_tokens: 200,
    temperature: 0.6,
  };

  // Make a POST request to the OpenAI API endpoint
  fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_API_KEY",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const generatedResume = data.choices[0].text;

      // Encode the generated resume content as a URL parameter
      const encodedResume = encodeURIComponent(generatedResume);

      // Redirect to the resume display page and pass the generated resume content as a parameter
      window.location.href = `resume-display.html?resume=${encodedResume}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
