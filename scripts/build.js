const API_KEY = "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";

const generateResumeButton = document.getElementById("generateResumeButton");
// Personal Details
var photo = document.getElementById("imgField").value;
var user_name = document.getElementById("namefield").value;
var desiredRole = document.getElementById("desire").value;
var contactNo = document.getElementById("contactfield").value;
var email = document.getElementById("emailfield").value;
var age = document.getElementById("age").value;
var website = document.getElementById("websitefield").value;
var github = document.getElementById("githubfield").value;
var linkedin = document.getElementById("linkedinfield").value;
var twitter = document.getElementById("twitterfield").value;

// Professional Experience
var skillSet = document.getElementById("skillfield").value;

function addNewExp() {
  // Get the work experience container
  var workExperienceContainer = document.getElementById(
    "workExperienceContainer"
  );

  // Create a new work experience div
  var newWorkExperience = document.createElement("div");
  newWorkExperience.classList.add("workExperience");

  // Create input elements
  var roleInput = document.createElement("input");
  roleInput.type = "text";
  roleInput.classList.add("form-control", "roleInput");
  roleInput.placeholder = "Role";

  var durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.classList.add("form-control", "durationInput");
  durationInput.placeholder = "Duration";

  var descriptionInput = document.createElement("textarea");
  descriptionInput.classList.add("form-control", "descriptionInput");
  descriptionInput.placeholder = "Description";

  // Create delete button
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener("click", function () {
    workExperienceContainer.removeChild(newWorkExperience);
  });

  // Append the input elements and delete button to the new work experience div
  newWorkExperience.appendChild(roleInput);
  newWorkExperience.appendChild(durationInput);
  newWorkExperience.appendChild(descriptionInput);
  newWorkExperience.appendChild(deleteButton);
  newWorkExperience.appendChild(document.createElement("div")); // Clear float

  // Append the new work experience div to the container
  workExperienceContainer.appendChild(newWorkExperience);
}

generateResumeButton.addEventListener("click", getMessage);

async function getMessage() {
  console.log("clicked generate resume button");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: messageContent }],
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

var messageContent = `Create me a full page formatted resume including objective summary and pther details provided below:

1. Name: ${user_name}
2. Desired Role: ${desiredRole}
3. Contact Number: ${contactNo}
4. Email: ${email}
5. Age: ${age}
6. Skill Set: ${skillSet}

Please use the provided information to generate a professional resume. Thank you!`;
