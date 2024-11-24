// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  icon.className =
    document.body.dataset.theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("theme", document.body.dataset.theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.dataset.theme = savedTheme;
  icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

themeToggle.addEventListener("click", toggleTheme);

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Validation
const contactForm = document.getElementById("contactForm");

function validateForm(e) {
  e.preventDefault();
  let isValid = true;

  // Reset errors
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  // Name validation
  const name = document.getElementById("name").value;
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters long";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    isValid = false;
  }

  // Message validation
  const message = document.getElementById("message").value;
  if (message.length < 10) {
    document.getElementById("messageError").textContent =
      "Message must be at least 10 characters long";
    isValid = false;
  }

  if (isValid) {
    // Here you would typically send the form data to a server
    alert("Message sent successfully!");
    contactForm.reset();
  }
}

contactForm.addEventListener("submit", validateForm);
