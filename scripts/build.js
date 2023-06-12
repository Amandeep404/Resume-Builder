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
