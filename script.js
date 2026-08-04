const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const soundButton = document.querySelector('.teaser-sound');
const teaserVideo = document.querySelector('.teaser-video');
const teaserAudio = document.querySelector('.teaser-audio');

if (soundButton && teaserVideo && teaserAudio) {
  soundButton.addEventListener('click', () => {
    const isOn = soundButton.getAttribute('aria-pressed') === 'true';
    if (isOn) {
      teaserAudio.pause();
      soundButton.setAttribute('aria-pressed', 'false');
    } else {
      teaserAudio.currentTime = 0;
      teaserAudio.play().catch(() => {});
      soundButton.setAttribute('aria-pressed', 'true');
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) teaserAudio.pause();
  });
}
