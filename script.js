// Simple mobile navigation toggle.
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Update the footer year in one place.
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Open the full-size portrait from the small profile image.
const portraitTrigger = document.querySelector('.portrait-trigger');
const portraitDialog = document.getElementById('portrait-dialog');
const portraitDialogClose = document.querySelector('.portrait-dialog-close');

if (portraitTrigger && portraitDialog && portraitDialogClose) {
  portraitTrigger.addEventListener('click', () => {
    portraitDialog.showModal();
  });

  portraitDialogClose.addEventListener('click', () => {
    portraitDialog.close();
  });

  portraitDialog.addEventListener('click', (event) => {
    if (event.target === portraitDialog) {
      portraitDialog.close();
    }
  });
}
