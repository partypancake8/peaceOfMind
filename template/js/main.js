// ===================================
// MULTI-STEP FORM FUNCTIONALITY
// ===================================

let currentStep = 1;
const totalSteps = 7;
let formData = {};

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initForm();
});

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.querySelector(".mobile-menu-close");
  const menuOverlay = document.querySelector(".mobile-menu-overlay");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", closeMobileMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMobileMenu);
  }

  // Close menu when clicking nav links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// ===================================
// FORM INITIALIZATION
// ===================================
function initForm() {
  updateProgressBar();

  // Add enter key support for text inputs
  const textInputs = document.querySelectorAll(
    'input[type="text"], input[type="tel"], input[type="email"], input[type="date"]'
  );
  textInputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const step = this.closest(".form-step").id.replace("step", "");
        if (step !== "Thanks") {
          nextStep(parseInt(step));
        }
      }
    });
  });
}

// ===================================
// FORM NAVIGATION
// ===================================
function nextStep(step) {
  // Validate current step
  if (!validateStep(step)) {
    return;
  }

  // Hide current step
  document.getElementById("step" + step).classList.remove("active");

  // Show next step
  if (step < totalSteps) {
    document.getElementById("step" + (step + 1)).classList.add("active");
    currentStep = step + 1;
  }

  // Update progress bar
  updateProgressBar();

  // Scroll to top of form
  scrollToForm();
}

function prevStep(step) {
  // Hide current step
  document.getElementById("step" + step).classList.remove("active");

  // Show previous step
  document.getElementById("step" + (step - 1)).classList.add("active");
  currentStep = step - 1;

  // Update progress bar
  updateProgressBar();

  // Scroll to top of form
  scrollToForm();
}

// ===================================
// FORM VALIDATION
// ===================================
function validateStep(step) {
  hideAllErrors();

  switch (step) {
    case 1:
      return validateZip("fromZip", "error1");
    case 2:
      return validateZip("toZip", "error2");
    case 3:
      return validateDate();
    case 4:
      return validateMoveSize();
    case 5:
      return validateName();
    case 6:
      return validatePhone();
    case 7:
      return validateEmail();
    default:
      return true;
  }
}

function validateZip(inputId, errorId) {
  const zip = document.getElementById(inputId).value.trim();
  const zipRegex = /^\d{5}$/;

  if (!zipRegex.test(zip)) {
    showError(errorId);
    return false;
  }

  formData[inputId] = zip;
  return true;
}

function validateDate() {
  const date = document.getElementById("moveDate").value;

  if (!date) {
    showError("error3");
    return false;
  }

  // Check if date is in the future
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    showError("error3");
    return false;
  }

  formData.moveDate = date;
  return true;
}

function validateMoveSize() {
  const moveSize = document.querySelector('input[name="moveSize"]:checked');

  if (!moveSize) {
    return false;
  }

  formData.moveSize = moveSize.value;
  return true;
}

function validateName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const nameRegex = /^[a-zA-Z\s-']+$/;

  if (!firstName || !lastName) {
    showError("error5");
    return false;
  }

  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    showError("error5");
    return false;
  }

  formData.firstName = firstName;
  formData.lastName = lastName;
  return true;
}

function validatePhone() {
  const phone = document.getElementById("phoneNumber").value.trim();
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!phoneRegex.test(phone)) {
    showError("error6");
    return false;
  }

  formData.phoneNumber = phone;
  return true;
}

function validateEmail() {
  const email = document.getElementById("emailAddress").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    showError("error7");
    return false;
  }

  formData.emailAddress = email;
  return true;
}

function showError(errorId) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) {
    errorElement.classList.add("show");
  }
}

function hideAllErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach((error) => error.classList.remove("show"));
}

// ===================================
// FORM SUBMISSION
// ===================================
function submitForm() {
  if (!validateEmail()) {
    return;
  }

  // TODO: IMPLEMENT YOUR FORM SUBMISSION LOGIC
  // This is where you would send the data to your server
  console.log("Form Data:", formData);

  // For now, just show thank you message
  document.getElementById("step7").classList.remove("active");
  document.getElementById("stepThanks").classList.add("active");
  updateProgressBar(100);

  // TODO: Send data to your backend/email service
  // Example:
  // fetch('/api/submit-quote', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData)
  // });
}

// ===================================
// PROGRESS BAR
// ===================================
function updateProgressBar(percentage) {
  const progressBar = document.getElementById("progressBar");

  if (percentage !== undefined) {
    progressBar.style.width = percentage + "%";
  } else {
    const progress = ((currentStep - 1) / totalSteps) * 100;
    progressBar.style.width = progress + "%";
  }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function scrollToForm() {
  const formCard = document.querySelector(".quote-form-card");
  if (formCard) {
    setTimeout(() => {
      formCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }
}

// Auto-format phone number as user types
document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phoneNumber");
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 10) value = value.slice(0, 10);

      let formattedValue = "";
      if (value.length > 0) {
        formattedValue = "(" + value.substring(0, 3);
      }
      if (value.length >= 4) {
        formattedValue += ") " + value.substring(3, 6);
      }
      if (value.length >= 7) {
        formattedValue += "-" + value.substring(6, 10);
      }

      e.target.value = formattedValue;
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Handle viewport resizing for mobile inputs
document.querySelectorAll("input, textarea").forEach((el) => {
  el.addEventListener("focus", () => {
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  });
});
