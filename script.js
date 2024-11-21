document.addEventListener("DOMContentLoaded", function () {
    var editableElements = document.querySelectorAll(".editable");
    // Add blur event listener to each editable element
    editableElements.forEach(function (element) {
        element.addEventListener("blur", function () {
            saveToLocalStorage();
        });
    });
    // Load saved data from localStorage on page load
    loadFromLocalStorage();
    //"Generate Resume" button 
    var generateBtn = document.getElementById('generateResumeBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', function () {
            alert('Your resume is ready! Implement your download or export functionality here.');
        });
    }
});
// Save content to localStorage
function saveToLocalStorage() {
    var sections = document.querySelectorAll(".editable");
    var resumeData = {};
    sections.forEach(function (section, index) {
        resumeData["section-".concat(index)] = section.innerHTML;
    });
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
}
// Load content from localStorage
function loadFromLocalStorage() {
    var savedData = localStorage.getItem("resumeData");
    if (!savedData)
        return;
    var resumeData = JSON.parse(savedData);
    var sections = document.querySelectorAll(".editable");
    sections.forEach(function (section, index) {
        if (resumeData["section-".concat(index)]) {
            section.innerHTML = resumeData["section-".concat(index)];
        }
    });
}
