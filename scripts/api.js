async function generateResume() {
  // Get user inputs from the form
  const name = document.getElementById("namefield").value;
  const desiredRole = document.getElementById("desire").value;
  const contact = document.getElementById("contactfield").value;
  const email = document.getElementById("emailfield").value;
  const age = document.getElementById("age").value;

  // Prepare the data payload for the API request
  const data = {
    name: name,
    desiredRole: desiredRole,
    contact: contact,
    email: email,
    age: age,
  };

  try {
    console.log("Sending HTTP request...");

    // Make a POST request to the ChatGPT API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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", // Replace with your API key
      },
      body: JSON.stringify({
        model: "GPT-3.5", // Replace with the name or ID of the GPT-3.5 model you want to use
        prompt: "Generate resume for " + name,
        max_tokens: 100,
        temperature: 0.7,
        // Add any other API parameters you want to customize
      }),
    });

    console.log("HTTP request completed.");

    // Parse the API response
    const result = await response.json();
    console.log("Response received:", result);

    const resumeText = result.choices[0].text.trim();

    // Store the resume text in local storage for the next page
    localStorage.setItem("resumeText", resumeText);

    // Redirect to the resume preview/edit page
    window.location.href = "resume_preview.html";
  } catch (error) {
    console.error("Error:", error);
    // Handle error case
  }
}
