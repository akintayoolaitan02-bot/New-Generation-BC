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
