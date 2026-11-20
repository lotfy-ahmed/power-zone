const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const navigationMenu = document.getElementById("navigation-menu");

const homeSection = document.getElementById("home");
let scrolledPastHome = false;

function setMenuIcon(isOpen) {
  const bars = menuToggle.children;
  if (isOpen) {
    bars[0].style.transform = "translateY(7px) rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "translateY(-7px) rotate(-45deg)";
  } else {
    bars[0].style.transform = "";
    bars[1].style.opacity = "";
    bars[2].style.transform = "";
  }
}

function setDotActive(dot, isActive) {
  if (isActive) {
    dot.style.width = "28px";
    dot.style.background = "#39FF14";
  } else {
    dot.style.width = "10px";
    dot.style.background = "#555";
  }
}

function updateNavbarMode() {
  if (window.innerWidth < 1100) {
    header.className = "is-collapsed";
    header.style.backgroundColor = "#1E1E1E";
  } else {
    header.className = "";
    if (scrolledPastHome) {
      header.style.backgroundColor = "#1E1E1E";
    } else {
      header.style.backgroundColor = "transparent";
    }
    navigationMenu.className = "nav-links";
    setMenuIcon(false);
  }
}

menuToggle.addEventListener("click", function () {
  if (navigationMenu.className === "nav-links is-open") {
    navigationMenu.className = "nav-links";
    setMenuIcon(false);
  } else {
    navigationMenu.className = "nav-links is-open";
    setMenuIcon(true);
  }
});

const navIds = ["link-home", "link-about", "link-programs", "link-membership", "link-gallery", "link-contact", "link-join"];

navIds.forEach(function (id) {
  const link = document.getElementById(id);
  link.addEventListener("click", function () {
    navigationMenu.className = "nav-links";
    setMenuIcon(false);
  });
});

updateNavbarMode();
window.addEventListener("resize", function () {
  updateNavbarMode();
});

const slides = [
  {
    title: "Programs for beginners",
    text: "Simple programs to help you start training."
  },
  {
    title: "Train at your own pace",
    text: "Choose what fits your level and your schedule."
  },
  {
    title: "Get in touch",
    text: "Send us a message to ask about the club."
  }
];

const slideTitle = document.getElementById("slide-title");
const slideText = document.getElementById("slide-text");
const dotsContainer = document.getElementById("slider-dots");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slideDots = [];
let currentSlide = 0;

slides.forEach(function (slide, index) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "dot";
  dot.addEventListener("click", function () {
    showSlide(index);
    resetSlideTimer();
  });
  dotsContainer.appendChild(dot);
  slideDots.push(dot);
});

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slideTitle.textContent = slides[currentSlide].title;
  slideText.textContent = slides[currentSlide].text;

  slideDots.forEach(function (dot, i) {
    setDotActive(dot, i === currentSlide);
  });
}

let slideTimer;

function startSlideTimer() {
  slideTimer = setInterval(function () {
    showSlide(currentSlide + 1);
  }, 3000);
}

function resetSlideTimer() {
  clearInterval(slideTimer);
  startSlideTimer();
}

prevBtn.addEventListener("click", function () {
  showSlide(currentSlide - 1);
  resetSlideTimer();
});

nextBtn.addEventListener("click", function () {
  showSlide(currentSlide + 1);
  resetSlideTimer();
});

showSlide(0);
startSlideTimer();

const galleryImages = [
  {
    image: "./images/file.webp",
    title: "Training area",
    alt: "Training area of the gym"
  },
  {
    image: "./images/file3.webp",
    title: "Equipment",
    alt: "Gym equipment"
  },
  {
    image: "./images/file2.webp",
    title: "Group sessions",
    alt: "Group training session"
  },
  {
    image: "./images/file1.webp",
    title: "Relax zone",
    alt: "Relax zone of the gym"
  }
];

const galleryImg = document.getElementById("gallery-img");
const galleryCaption = document.getElementById("gallery-caption");
const galleryDotsContainer = document.getElementById("gallery-dots");
const galleryDots = [];
let galleryIndex = 0;

galleryImages.forEach(function (item, index) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "dot";
  dot.addEventListener("click", function () {
    showGallery(index);
  });
  galleryDotsContainer.appendChild(dot);
  galleryDots.push(dot);
});

function showGallery(index) {
  galleryIndex = (index + galleryImages.length) % galleryImages.length;
  galleryImg.src = galleryImages[galleryIndex].image;
  galleryImg.alt = galleryImages[galleryIndex].alt;
  galleryCaption.textContent = galleryImages[galleryIndex].title;

  galleryDots.forEach(function (dot, i) {
    setDotActive(dot, i === galleryIndex);
  });
}

showGallery(0);

let galleryTimer = setInterval(function () {
  showGallery(galleryIndex + 1);
}, 3000);

const programs = [
  {
    title: "Beginner Strength",
    description: "A simple start to strength training.",
    image: "./images/program-strength.png",
    alt: "Dumbbell icon for the strength program"
  },
  {
    title: "Cardio Basics",
    description: "Easy cardio sessions to build your stamina.",
    image: "./images/program-cardio.png",
    alt: "Heart icon for the cardio program"
  },
  {
    title: "Mobility & Stretching",
    description: "Gentle movements to improve flexibility.",
    image: "./images/program-mobility.png",
    alt: "Stretching person icon for the mobility program"
  },
  {
    title: "Group Training",
    description: "Train together and stay motivated.",
    image: "./images/program-group.png",
    alt: "Group icon for the group training program"
  }
];

const programsContainer = document.getElementById("programs-container");

programs.forEach(function (program) {
  const card = document.createElement("article");
  card.className = "program-card";

  const img = document.createElement("img");
  img.src = program.image;
  img.alt = program.alt;

  const body = document.createElement("div");
  body.className = "program-body";

  const title = document.createElement("h3");
  title.textContent = program.title;

  const description = document.createElement("p");
  description.textContent = program.description;

  body.appendChild(title);
  body.appendChild(description);
  card.appendChild(img);
  card.appendChild(body);
  programsContainer.appendChild(card);
});

const plans = [
  { name: "Standard", description: "Start your fitness journey." },
  { name: "Silver", description: "Train at your own pace." },
  { name: "Gold", description: "Build a regular routine." },
  { name: "Premium", description: "Make the most of your training." }
];

const plansGrid = document.getElementById("plans-grid");

plans.forEach(function (plan) {
  const card = document.createElement("article");
  card.className = "plan";

  const name = document.createElement("h3");
  name.className = "plan-name";
  name.textContent = plan.name;

  const description = document.createElement("p");
  description.className = "plan-desc";
  description.textContent = plan.description;

  const button = document.createElement("a");
  button.href = "join.html?plan=" + plan.name;
  button.className = "plan-btn";
  button.textContent = "Join Now";

  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(button);
  plansGrid.appendChild(card);
});

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";
  nameInput.style.borderColor = "";
  emailInput.style.borderColor = "";
  messageInput.style.borderColor = "";

  if (nameValue === "") {
    nameError.textContent = "Enter your name";
    nameInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (nameValue.length < 3 || nameValue.length > 15) {
    nameError.textContent = "Name must be between 3 and 15 characters.";
    nameInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (emailValue === "") {
    emailError.textContent = "Enter your email";
    emailInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
    emailError.textContent = "Enter a valid email address";
    emailInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (messageValue !== "" && messageValue.length < 3) {
    messageError.textContent = "Message must be at least 3 characters";
    messageInput.style.borderColor = "#FF8A8A";
    return;
  }

  nameInput.style.borderColor = "#4CAF50";
  emailInput.style.borderColor = "#4CAF50";
  if (messageValue !== "") {
    messageInput.style.borderColor = "#4CAF50";
  }

  successMessage.textContent = "Thank you! Your message has been sent.";
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});

form.addEventListener("input", function () {
  successMessage.textContent = "";
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  const pastHome = window.scrollY > homeSection.offsetHeight - 100;
  if (pastHome !== scrolledPastHome) {
    scrolledPastHome = pastHome;
    updateNavbarMode();
  }

  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
