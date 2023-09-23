function toggleMenu() {
  const icon = document.querySelector(".hamburguer-icon");
  const menu = document.querySelector(".menu-links");

  icon.classList.toggle("open");
  menu.classList.toggle("open");
}

// Get a references to the dark mode toggle
const darkModeToggle = document.getElementById("darkmode-toggle");
// social media icons
const linkedinIcon = document.querySelector(".linkedin-icon");
const githubIcon = document.querySelector(".github-icon");

// Function to toggle dark mode
function toggleDarkMode() {
  // Get a reference to the body element or the element you want to apply dark mode styles to
  const body = document.body;

  // Check if the dark mode toggle is checked
  if (darkModeToggle.checked) {
    // If it's checked, add a class to enable dark mode
    body.classList.add("dark-mode");

    // Update the social media icons src for dark mode
    linkedinIcon.src = "./assets/linkedin-dark.png";
    githubIcon.src = "./assets/github-dark.png";
  } else {
    // If it's not checked, remove the class to disable dark mode
    body.classList.remove("dark-mode");

    // Update the social media icons src for light mode
    linkedinIcon.src = "./assets/linkedin.png";
    githubIcon.src = "./assets/github.png";
  }
}

// Add an event listener to the checkbox to call the toggleDarkMode function when the checkbox changes
darkModeToggle.addEventListener("change", toggleDarkMode);
