//navbar dropdown code

const servicesDropdowns = document.querySelectorAll(".dropdown");
const servicesLinks = document.querySelectorAll(".triggered");

// Loop through the dropdowns and use the index 'i' to find the matching link
servicesDropdowns.forEach((dropdown, i) => {
  const link = servicesLinks[i];

  if (link) {
    // Ensure the link exists at this index
    dropdown.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "#1a1a1a";
      link.style.color = "#b5da26";
    });

    dropdown.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "initial";
      link.style.color = "#f2f2f2";
    });
  }
});

//////////////////////////////////////////////////////////

const header = document.querySelector("#header");
const heroHeading = document.querySelector("#hero-heading");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("header-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  });
}, {});

observer.observe(heroHeading);

//////////////////////////////////////////////////////////

const mainSection = document.querySelector(".services01");
const learnMoreLinks = document.querySelectorAll(".learn-more-btn");
const backButtons = document.querySelectorAll(".back-btn");
const allSubSections = document.querySelectorAll(
  ".services02, .services03, .services04",
);

// Handle clicking a main service card to pull up its sub-section
learnMoreLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Read the class identifier from our data attribute
    const targetClass = link.getAttribute("data-target");
    // 1. Instantly drop active classes on all sub-sections to clean the slate
    allSubSections.forEach((section) =>
      section.classList.remove("active-sub-section"),
    );

    // 2. Find and turn on the specific container matching our clicked card
    document.querySelector(targetClass).classList.add("active-sub-section");

    // 3. Slide the main screen out of the way
    mainSection.classList.add("services01-move");
  });
});

// Handle clicking back button
backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Slide the main section container back down into focus
    mainSection.classList.remove("services01-move");

    // 2. Clear out the active status of the sub panels
    allSubSections.forEach((section) =>
      section.classList.remove("active-sub-section"),
    );
  });
});

//////////////////////////////////////////////////////////

const mainExp = document.querySelector(".exp-main");
const expDetailsBtn = document.querySelectorAll(".exp-icon");
const expBackButtons = document.querySelectorAll(".exp-back-btn");
const allSubExps = document.querySelectorAll(
  ".exp-sub01, .exp-sub02, .exp-sub03, .exp-sub04",
);

// Handle clicking a main service card to pull up its sub-section
expDetailsBtn.forEach((link) => {
  link.addEventListener("click", () => {
    // Read the class identifier from our data attribute
    const targetClass = link.getAttribute("data-target");
    console.log(targetClass);
    // 1. Instantly drop active classes on all sub-sections to clean the slate
    allSubExps.forEach((section) => section.classList.remove("active-sub-exp"));
    console.log(targetClass);

    // 2. Find and turn on the specific container matching our clicked card
    document.querySelector(targetClass).classList.add("active-sub-exp");

    // 3. Slide the main screen out of the way
    mainExp.classList.add("exp-main-move");
  });
});

//Handle clicking back button
expBackButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Slide the main section container back down into focus
    mainExp.classList.remove("exp-main-move");

    // 2. Clear out the active status of the sub panels
    allSubExps.forEach((section) => section.classList.remove("active-sub-exp"));
  });
});

//////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  console.log(circles);
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // Check if the element is in view
      if (entry.isIntersecting) {
        const circle = entry.target;
        const targetValue = circle.getAttribute("data-target");
        console.log(targetValue);

        // Apply the value to trigger the CSS transition
        circle.style.setProperty("--value", targetValue);

        // Stop observing this circle once it has animated
        observer.unobserve(circle);
      }
    });
  }, observerOptions);

  circles.forEach((circle) => observer.observe(circle));
});

//////////////////////////////////////////////////////////
