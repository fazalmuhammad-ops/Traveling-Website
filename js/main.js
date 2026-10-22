// Mobile Navigation Handler
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.textContent = isOpen ? '✕ Close' : '☰ Menu';
  });

  // Auto-close menu when clicking a link
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰ Menu';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰ Menu';
    }
  });
}

// Contact Form Handler & Preselection
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  // Preselect package from URL parameter (?package=...)
  const params = new URLSearchParams(window.location.search);
  const selectedPkg = params.get('package');

  if (selectedPkg && contactForm.package) {
    const pkgLower = selectedPkg.toLowerCase();
    Array.from(contactForm.package.options).forEach((opt) => {
      if (opt.text.toLowerCase().includes(pkgLower) || pkgLower.includes(opt.text.toLowerCase())) {
        opt.selected = true;
      }
    });
  }

  // Handle Form Submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = contactForm.name ? contactForm.name.value.trim() : 'there';
    const emailVal = contactForm.email ? contactForm.email.value.trim() : 'your email';
    const msgEl = document.getElementById('form-msg');

    if (msgEl) {
      msgEl.textContent = `✓ Thank you, ${nameVal}! We have received your inquiry and will reply to ${emailVal} within 24 hours.`;
      msgEl.className = 'msg success';
      msgEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    contactForm.reset();
  });
}
