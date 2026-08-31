document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });
});