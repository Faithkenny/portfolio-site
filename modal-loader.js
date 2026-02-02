const modal = document.getElementById('dynamic-modal');
const modalBody = modal.querySelector('.modal-body');
const overlay = document.getElementById('overlay');
const closeBtn = modal.querySelector('.closeButton');

function openModal(url) {
  overlay.style.display = 'block';
  modal.style.display = 'block';

  modalBody.innerHTML = '<p>Loading…</p>';
  document.body.style.overflow = 'hidden';


    fetch(url)
    .then(res => res.text())
    .then(html => {
        modalBody.innerHTML = html;

        // autoplay any video inside the loaded modal
        const video = modalBody.querySelector('video');
        if (video) {
        video.setAttribute('autoplay', '');
        video.play().catch(() => {});
        }
    });


}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';

  // 🔥 THIS is what actually stops videos
  modalBody.innerHTML = '';

  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-modal]');
  if (!trigger) return;

  openModal(trigger.dataset.modal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});



const prefetched = new Set();

document.addEventListener('mouseover', (e) => {
  const trigger = e.target.closest('[data-modal]');
  if (!trigger) return;

  const url = trigger.dataset.modal;
  if (prefetched.has(url)) return;

  fetch(url);
  prefetched.add(url);
});
