const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Live dropdown toggle + close behaviour
(function () {
  const liveToggle = document.getElementById('liveToggle');
  const liveMenu = document.getElementById('liveMenu');

  if (!liveToggle || !liveMenu) return; // safe-guard

  function closeDropdown() {
    const parent = liveToggle.closest('.live-dropdown');
    parent.classList.remove('open');
    liveToggle.setAttribute('aria-expanded', 'false');
  }

  function openDropdown() {
    const parent = liveToggle.closest('.live-dropdown');
    parent.classList.add('open');
    liveToggle.setAttribute('aria-expanded', 'true');
    // focus first menu item for keyboard users
    const firstLink = liveMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  liveToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const parent = liveToggle.closest('.live-dropdown');
    const isOpen = parent.classList.contains('open');
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // close when clicking outside
  document.addEventListener('click', function (e) {
    const parent = liveToggle.closest('.live-dropdown');
    if (parent && parent.classList.contains('open') && !parent.contains(e.target)) {
      closeDropdown();
    }
  });

  // close on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const parent = liveToggle.closest('.live-dropdown');
      if (parent && parent.classList.contains('open')) {
        closeDropdown();
        liveToggle.focus();
      }
    }
  });

  // close when selecting a menu link (useful for mobile)
  liveMenu.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A') {
      closeDropdown();
    }
  });
})();

// Mobile dropdown toggle for Gallery
const galleryDropdown = document.querySelector('.dropdown > a'); 
const galleryMenu = document.querySelector('.dropdown-menu');

galleryDropdown.addEventListener('click', (e) => {
  // Prevent default link action
  e.preventDefault();
  
  // Toggle the dropdown menu visibility
  galleryMenu.classList.toggle('open');
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});



// ✍️ Typing effect only for "BAPTIST CHURCH" with longer pause
const typingPart = "BAPTIST CHURCH";
let j = 0;
let typingForward = true;

function typeText() {
  const el = document.querySelector('.typing-text');

  if (typingForward) {
    el.textContent = typingPart.slice(0, j++);
    if (j > typingPart.length) {
      typingForward = false;
      setTimeout(typeText, 2000); // ⏸ pause 2s before erasing
      return;
    }
  } else {
    el.textContent = typingPart.slice(0, j--);
    if (j < 0) {
      typingForward = true;
      j = 0;
      setTimeout(typeText, 1000); // ⏸ pause 1s before typing again
      return;
    }
  }

  setTimeout(typeText, 150);
}

typeText();


// 🌄 Crossfade slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) slide.classList.add('active');
  });
  currentSlide = (currentSlide + 1) % slides.length;
}
showSlide();
setInterval(showSlide, 4000); // change every 4s

// 📌 Navbar background toggle
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");
  if (window.scrollY > hero.offsetHeight - 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

