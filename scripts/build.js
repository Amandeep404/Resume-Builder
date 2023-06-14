const API_KEY = "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";

let loadingTextInterval;

const generateResumeButton = document.getElementById("generateResumeButton");

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
  var user_name = document.getElementById("namefield").value;
  var desiredRole = document.getElementById("desire").value;
  var contactNo = document.getElementById("contactfield").value;
  var email = document.getElementById("emailfield").value;
  var age = document.getElementById("age").value;
  var website = document.getElementById("websitefield").value;
  var college = document.getElementById("education_details").value;
  var github = document.getElementById("githubfield").value;
  var linkedin = document.getElementById("linkedinfield").value;
  // Professional Experience
  var skillSet = document.getElementById("skillfield").value;
  const workExperiences = document.getElementsByClassName("workExperience");
  var experiences = [];
  for (var i = 0; i < workExperiences.length; i++) {
    var role = workExperiences[i].querySelector(".roleInput").value;
    var duration = workExperiences[i].querySelector(".durationInput").value;
    var description =
      workExperiences[i].querySelector(".descriptionInput").value;
    var experience = {
      role: role,
      duration: duration,
      description: description,
    };
    experiences.push(experience);
  }

  //////////////////////////////////////

  console.log("clicked generate resume button");

  var messageContent = `
<h1>Generate a resume for my role as a ${desiredRole}</h1>
<p>
  <strong>My details are:</strong>
  <ol>
    <li>Name: ${user_name}</li>
    <li>Desired Role: ${desiredRole}</li>
    <li>Contact Number: ${contactNo}</li>
    <li>Email: ${email}</li>
    <li>Age: ${age}</li>
    <li>Website: ${website}</li>
    <li>University: ${college}</li>
    <li>Github: ${github}</li>
  </ol>
</p>

<p>
  <strong>My skills are in these technologies:</strong> ${skillSet}.
  <em>Please elaborate on each skills I know in these technologies.</em>
</p>

<p>
  <strong>I have experience working in ${experiences.length} companies.</strong>
  <em>My experiences are:</em>
</p>
`;

  for (var i = 0; i < experiences.length; i++) {
    messageContent += `
<hr>
<p>
  <strong>${i + 1}. Role: ${experiences[i].role}</strong>
  <br>
  <span style="font-size: 12px;">Duration: ${experiences[i].duration}</span>
  <br>
  ${experiences[i].description}
</p>
`;
  }

  messageContent += `
<hr>
<p>
  <em>
    Use different font sizes and styles to depict different and important details in my resume.
    use horizontal lines to separate different sections of my resume and make and give a nice Summary of me on top.
  </em>
  <br>
  <strong>Please use the provided information to generate a professional resume for me.</strong>
  <br>
  Thank you!
</p>
`;

  console.log(messageContent);

  //making api call
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: messageContent }],
      temperature: 0.9,
    }),
  };

  try {
    showLoadingAnimation();

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
    const generatedResume = data.choices[0].message.content;
    // Encode the generated resume message for URL
    const encodedResume = encodeURIComponent(generatedResume);
    // Redirect to the resume_analyzer page with the resume message in the URL
    window.location.href = `resume_preview.html?resume=${encodedResume}`;
  } catch (error) {
    console.log(error);
    hideLoadingAnimation();
  } finally {
    // Hide the loading animation
    hideLoadingAnimation();
  }
}

// loading animation
// Show the loading animation
function showLoadingAnimation() {
  let counter = 0;
  const loadingTextOptions = [
    "Working on your Resume...",
    "Generating Ideas...",
    "Formatting Content...",
  ];

  loadingTextInterval = setInterval(() => {
    const loadingText = loadingTextOptions[counter];
    generateResumeButton.innerHTML = loadingText;
    counter = (counter + 1) % loadingTextOptions.length;
  }, 7000);

  generateResumeButton.disabled = true;
  generateResumeButton.classList.add("spinning");
}

// Hide the loading animation
function hideLoadingAnimation() {
  generateResumeButton.classList.remove("spinning");
  generateResumeButton.innerHTML = "Generate Resume";
  generateResumeButton.disabled = false;
}
