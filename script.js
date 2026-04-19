const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
    });
  });
}

const targetDate = new Date('2026-06-12T17:00:00-07:00').getTime();
const countdownEls = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    Object.values(countdownEls).forEach(el => {
      if (el) el.textContent = '00';
    });
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  if (countdownEls.days) countdownEls.days.textContent = String(days).padStart(2, '0');
  if (countdownEls.hours) countdownEls.hours.textContent = String(hours).padStart(2, '0');
  if (countdownEls.minutes) countdownEls.minutes.textContent = String(minutes).padStart(2, '0');
  if (countdownEls.seconds) countdownEls.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById('year').textContent = new Date().getFullYear();

const telegramLink = document.getElementById('telegramLink');
if (telegramLink) {
  telegramLink.addEventListener('click', (event) => {
    event.preventDefault();
    const number = '+1 323 896 3696';
    navigator.clipboard.writeText(number).catch(() => {});
    window.location.href = 'tel:+13238963696';
    alert('Telegram handle not set yet. The contact number has been copied, and the call option has opened.');
  });
}

function buildInquiryMessage() {
  const name = document.getElementById('guestName').value.trim();
  const email = document.getElementById('guestEmail').value.trim();
  const phone = document.getElementById('guestPhone').value.trim();
  const guests = document.getElementById('guestCount').value.trim();
  const checkin = document.getElementById('checkin').value.trim();
  const checkout = document.getElementById('checkout').value.trim();
  const purpose = document.getElementById('stayPurpose').value.trim();
  const message = document.getElementById('message').value.trim();

  return `Hello Guruji,

I would like to request availability for RedDoor3.

Full name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone}
Guests: ${guests}
Check-in: ${checkin}
Check-out: ${checkout}
Purpose of stay: ${purpose}

Message:
${message || 'N/A'}

Please let me know availability, next steps, and a private quote.

Thank you.`;
}

const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const subject = encodeURIComponent('RedDoor3 Availability Request');
    const body = encodeURIComponent(buildInquiryMessage());
    window.location.href = `mailto:booking@reddoor3.com?subject=${subject}&body=${body}`;
  });
}

const copyBtn = document.getElementById('copySummary');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    if (!inquiryForm.reportValidity()) return;
    try {
      await navigator.clipboard.writeText(buildInquiryMessage());
      copyBtn.textContent = 'Copied';
      setTimeout(() => {
        copyBtn.textContent = 'Copy Booking Summary';
      }, 1600);
    } catch (error) {
      alert('Could not copy automatically. Please submit the form instead.');
    }
  });
}