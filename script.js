const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const inquiryForm = document.getElementById('inquiryForm');
const copySummaryBtn = document.getElementById('copySummary');
const telegramLink = document.getElementById('telegramLink');

if (telegramLink) {
  telegramLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'sms:+13238963696?&body=Hi%20Guruji%2C%20I%E2%80%99d%20like%20to%20check%20availability%20for%20RedDoor3.';
  });
}

function buildInquiryText() {
  const guestName = document.getElementById('guestName')?.value || '';
  const guestEmail = document.getElementById('guestEmail')?.value || '';
  const guestPhone = document.getElementById('guestPhone')?.value || '';
  const guestCount = document.getElementById('guestCount')?.value || '';
  const checkin = document.getElementById('checkin')?.value || '';
  const checkout = document.getElementById('checkout')?.value || '';
  const stayPurpose = document.getElementById('stayPurpose')?.value || '';
  const message = document.getElementById('message')?.value || '';

  return `Hello Guruji,%0D%0A%0D%0AI'd like to inquire about RedDoor3.%0D%0A%0D%0AName: ${encodeURIComponent(guestName)}%0D%0AEmail: ${encodeURIComponent(guestEmail)}%0D%0APhone / WhatsApp: ${encodeURIComponent(guestPhone)}%0D%0AGuests: ${encodeURIComponent(guestCount)}%0D%0ACheck-in: ${encodeURIComponent(checkin)}%0D%0ACheck-out: ${encodeURIComponent(checkout)}%0D%0APurpose of stay: ${encodeURIComponent(stayPurpose)}%0D%0A%0D%0AAbout the stay:%0D%0A${encodeURIComponent(message)}`;
}

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('RedDoor3 Inquiry');
    const body = buildInquiryText();
    window.location.href = `mailto:booking@reddoor3.com?subject=${subject}&body=${body}`;
  });
}

if (copySummaryBtn) {
  copySummaryBtn.addEventListener('click', async () => {
    const rawText = decodeURIComponent(buildInquiryText().replaceAll('%0D%0A', '\n'));
    try {
      await navigator.clipboard.writeText(rawText);
      copySummaryBtn.textContent = 'Copied';
      setTimeout(() => { copySummaryBtn.textContent = 'Copy Booking Summary'; }, 1600);
    } catch {
      alert('Could not copy. Please try again.');
    }
  });
}
