/**
 * FlipPlay - Sleek Streaming & Reading Platform
 * Interaktivitas Navigasi, Filter Koleksi, Video Modal, dan Formulir Kontak
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Navigasi Seluler (Mobile Menu)
     ========================================================================== */
  const toggle = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const toggleLabel = document.querySelector('#menu-label');

  if (toggle && mobileMenu && toggleLabel) {
    const closeMenu = (returnFocus = false) => {
      mobileMenu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggleLabel.textContent = 'Menu';
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      mobileMenu.classList.toggle('hidden', isExpanded);
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      toggleLabel.textContent = isExpanded ? 'Menu' : 'Tutup';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
      if (event.matches) {
        closeMenu();
      }
    });
  }

  /* ==========================================================================
     2. Filter Koleksi Interaktif (Tab Switching)
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.collection-card');

  if (filterBtns.length > 0 && cards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active tab styling
        filterBtns.forEach(b => {
          b.classList.remove('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30');
          b.classList.add('bg-purple-950/30', 'text-gray-300', 'border-purple-900/40');
        });
        btn.classList.remove('bg-purple-950/30', 'text-gray-300', 'border-purple-900/40');
        btn.classList.add('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30');

        const category = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || category === cardCat) {
            card.style.display = 'flex';
            card.classList.add('animate-fadeIn');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ==========================================================================
     3. Video Preview Modal
     ========================================================================== */
  const videoModal = document.querySelector('#video-modal');
  const closeModalBtn = document.querySelector('#close-modal');
  const modalVideo = document.querySelector('#modal-video');
  const playBtns = document.querySelectorAll('.play-modal-btn');

  if (videoModal && modalVideo) {
    playBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        videoModal.classList.remove('hidden');
        videoModal.classList.add('flex');
        modalVideo.play().catch(() => {});
      });
    });

    const closeModal = () => {
      videoModal.classList.add('hidden');
      videoModal.classList.remove('flex');
      modalVideo.pause();
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     4. Formulir Kontak (Validasi & Pratinjau Pesan)
     ========================================================================== */
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get('nama') || '').trim();
      const topic = String(data.get('topik') || '');
      const message = String(data.get('pesan') || '').trim();

      if (!name || !message) {
        status.textContent = 'Isi nama dan pesan dengan teks, bukan hanya spasi.';
      } else {
        status.textContent = `✨ Terima kasih, ${name}! Pratinjau pesan untuk topik "${topic}" berhasil dibuat. Tim FlipPlay akan memproses masukanmu.`;
      }

      status.classList.remove('hidden');
      status.focus();
    });
  }
});
