const API_KEY = window.API_KEY;

async function handleUpload() {
  const fileInput = document.getElementById("myFileInput");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = async function (event) {
      const arrayBuffer = event.target.result;
      const text = await extractTextFromPdf(arrayBuffer);

      const messageContent = `
  <div class="resume-content">
    This is my resume<br/>
    <br/>
    - ${text}<br/>
    <br/>
    Check my resume content and provide feedback on areas where I can improve and make my resume even better.<br/>
  </div>
`;

      // Making the API call
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: messageContent }],
          temperature: 0.9,
        }),
      };
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          options
        );
        const data = await response.json();
        console.log(data);
        let suggestions = data.choices[0].message.content;
        const textOutput = document.querySelector(".analysis-subpara");
        const modifiedMessage = suggestions.replace(
          /^As an AI language model,\s*/i,
          ""
        );
        textOutput.innerHTML = modifiedMessage.replace(/\n/g, "<br>");
      } catch (error) {
        console.error("Error making API call:", error);
      } finally {
        // Hide the loading animation
      }
    };

    reader.readAsArrayBuffer(file);
  }
}

async function extractTextFromPdf(arrayBuffer) {
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });

  const pdf = await loadingTask.promise;
  const totalPages = pdf.numPages;
  let text = "";

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str + " ").join(" ");
    text += pageText + "\n\n"; // Add spacing between paragraphs
  }

  return text;
}
