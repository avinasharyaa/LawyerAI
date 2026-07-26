const launchDate = new Date('2026-07-29T12:00:00');

const elements = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  status: document.getElementById('status')
};

function updateCountdown() {
  const now = new Date();
  const difference = launchDate - now;

  if (difference <= 0) {
    elements.days.textContent = '00';
    elements.hours.textContent = '00';
    elements.minutes.textContent = '00';
    elements.seconds.textContent = '00';
    elements.status.textContent = 'The lunch event is here!';
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  elements.days.textContent = String(days).padStart(2, '0');
  elements.hours.textContent = String(hours).padStart(2, '0');
  elements.minutes.textContent = String(minutes).padStart(2, '0');
  elements.seconds.textContent = String(seconds).padStart(2, '0');
  elements.status.textContent = 'The countdown is live and running.';
}

updateCountdown();
setInterval(updateCountdown, 1000);
