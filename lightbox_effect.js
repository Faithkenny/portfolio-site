(() => {
    const images = document.querySelectorAll('.s-01 img, .s-05 img, .s-06 img');

    // Create overlay once
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-image';

    overlay.appendChild(lightboxImg);
    document.body.appendChild(overlay);

    // Open lightbox
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close on click outside image
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }
  })();

