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

// Open any portfolio image in the shared full-size photo viewer.
const photoDialog = document.getElementById('photo-dialog');
const photoDialogImage = photoDialog?.querySelector('img');
const photoDialogClose = document.querySelector('.photo-dialog-close');

if (photoDialog && photoDialogImage && photoDialogClose) {
  const openPhoto = (image) => {
    photoDialogImage.src = image.currentSrc || image.src;
    photoDialogImage.alt = image.alt;
    photoDialog.setAttribute(
      'aria-label',
      image.alt ? `Enlarged photo: ${image.alt}` : 'Enlarged photo'
    );
    photoDialog.showModal();
  };

  document.querySelectorAll('img').forEach((image) => {
    if (photoDialog.contains(image)) {
      return;
    }

    image.classList.add('photo-enlarge-trigger');
    const hasInteractiveParent = image.closest('button, a');

    if (!hasInteractiveParent) {
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute(
        'aria-label',
        image.alt ? `View larger image: ${image.alt}` : 'View larger image'
      );
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPhoto(image);
        }
      });
    }

    image.addEventListener('click', () => openPhoto(image));
  });

  photoDialogClose.addEventListener('click', () => {
    photoDialog.close();
  });

  photoDialog.addEventListener('click', (event) => {
    if (event.target === photoDialog) {
      photoDialog.close();
    }
  });
}
