// Minimal JS: login modal behavior and testimonials carousel
document.addEventListener('DOMContentLoaded', function () {
  // Modal with focus trap and keyboard shortcut (Alt+L)
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeLogin = document.getElementById('closeLogin');
  const submitLogin = document.getElementById('submitLogin');
  const loginDialog = loginModal.querySelector('.max-w-md');
  let previouslyFocused = null;

  const FOCUSABLE_SELECTORS = 'a[href], area[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS)).filter(el => el.offsetParent !== null);
  }

  function openModal() {
    previouslyFocused = document.activeElement;
    loginModal.classList.remove('hidden');
    loginModal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Wait a tick then focus first element
    setTimeout(() => {
      const focusables = getFocusableElements(loginDialog);
      if (focusables.length) focusables[0].focus();
    }, 50);

    // attach trap
    document.addEventListener('keydown', trapTabKey);
  }

  function closeModal() {
    loginModal.classList.add('hidden');
    loginModal.classList.remove('flex');
    document.body.style.overflow = '';
    if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    document.removeEventListener('keydown', trapTabKey);
  }

  function trapTabKey(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key !== 'Tab') return;
    const focusables = getFocusableElements(loginDialog);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  loginBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  closeLogin.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });
  loginModal.addEventListener('click', (e) => { if (e.target === loginModal) closeModal(); });

  // Alt+L opens login (accessible keyboard shortcut)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && !e.ctrlKey && !e.metaKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      if (loginModal.classList.contains('hidden')) openModal(); else closeModal();
    }
  });

  submitLogin.addEventListener('click', (ev) => {
    ev.preventDefault();
    // client-side only: show an alert
    const email = document.getElementById('loginEmail').value;
    alert('This is a demo login. Email: ' + email);
    closeModal();
  });

  // Testimonials carousel (very small, accessible)
  const testimonials = Array.from(document.querySelectorAll('#testimonials .testimonial'));
  let current = 0;
  function showTestimonial(i) {
    testimonials.forEach((el, idx) => {
      if (idx === i) {
        el.classList.remove('hidden');
        el.setAttribute('aria-hidden', 'false');
      } else {
        el.classList.add('hidden');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  }
  if (testimonials.length > 0) {
    showTestimonial(0);
    setInterval(() => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    }, 4000);
  }
});
