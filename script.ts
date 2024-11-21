document.addEventListener("DOMContentLoaded", () => {
  const editableElements = document.querySelectorAll(".editable");

  // Add blur event listener to each editable element
  editableElements.forEach((element) => {
    element.addEventListener("blur", () => {
      saveToLocalStorage();
    });
  });

  // Load saved data from localStorage on page load
  loadFromLocalStorage();

  //"Generate Resume" button 
  const generateBtn = document.getElementById('generateResumeBtn');
  
  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      alert('Your resume is ready! Implement your download or export functionality here.');
    });
  }
});

// Save content to localStorage
function saveToLocalStorage(): void {
  const sections = document.querySelectorAll(".editable");
  const resumeData: { [key: string]: string } = {};

  sections.forEach((section, index) => {
    resumeData[`section-${index}`] = section.innerHTML;
  });

  localStorage.setItem("resumeData", JSON.stringify(resumeData));
}

// Load content from localStorage
function loadFromLocalStorage(): void {
  const savedData = localStorage.getItem("resumeData");
  if (!savedData) return;

  const resumeData = JSON.parse(savedData);
  const sections = document.querySelectorAll(".editable");

  sections.forEach((section, index) => {
    if (resumeData[`section-${index}`]) {
      section.innerHTML = resumeData[`section-${index}`];
    }
  });
}
