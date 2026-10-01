(() => {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const brandLink = document.querySelector('.brand');

  const closeMenu = () => {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.add('open');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    // Close immediately after the user chooses any navigation option.
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Clicking/tapping anywhere outside the open menu closes it.
    document.addEventListener('click', (event) => {
      if (!navLinks.classList.contains('open')) return;
      if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        closeMenu();
      }
    });

    // Escape key support.
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    // Reset mobile menu when moving back to desktop width.
    window.addEventListener('resize', () => {
      if (window.innerWidth > 880) closeMenu();
    });
  }

  // Logo/brand always takes the visitor to the top/main page and closes menu.
  brandLink?.addEventListener('click', () => {
    closeMenu();
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const form = document.getElementById('appointmentForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('patientName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const contactMode = document.getElementById('contactMode').value;
    const consent = document.getElementById('consent').checked;

    if (!name || !mobile || !service || !date || !time || !consent) {
      status.textContent = 'Please complete all required fields and confirm consent.';
      return;
    }

    const cleanedMobile = mobile.replace(/\D/g, '');
    if (cleanedMobile.length < 10) {
      status.textContent = 'Please enter a valid mobile number.';
      return;
    }

    const message =
`Hello Rejuvea,

I would like to request an appointment.

Name: ${name}
Mobile: ${mobile}
Consultation for: ${service}
Preferred date: ${date}
Preferred time: ${time}
Preferred contact: ${contactMode}

Please confirm availability.`;

    const url = `https://wa.me/919834222352?text=${encodeURIComponent(message)}`;
    status.textContent = 'Opening WhatsApp…';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
