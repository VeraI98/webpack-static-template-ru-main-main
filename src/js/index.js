import '../scss/style.scss';
import logo from '../img/icons/logo.png';

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
document.body.appendChild(img);


document.addEventListener('DOMContentLoaded', function () {
  // Sidebar toggle (для мобильных)
  const sidebar = document.getElementById('sidebar');
  const toggles = document.querySelectorAll('.js-toggle-sidebar');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('menu--open');
    });
  });

  // Brands "Показать все"
  const brandsToggle = document.querySelector('.js-brands-toggle');
  const brandsExtra = document.getElementById('brandsExtra');
  if (brandsToggle && brandsExtra) {
    brandsToggle.addEventListener('click', function () {
      const isOpen = brandsExtra.style.display === 'block';
      brandsExtra.style.display = isOpen ? 'none' : 'block';
      brandsToggle.setAttribute('aria-pressed', String(!isOpen));
      brandsToggle.querySelector('.brands__text').textContent = isOpen ? 'Показать все' : 'Скрыть';
    });
  }

  // Swiper init
  try {
    const swiper = new Swiper('.mySwiper', {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    });
  } catch (e) {

    console.warn('Swiper init error', e);
  }

  if (brandsToggle) {
    brandsToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        brandsToggle.click();
      }
    });
  }


  const readMoreCheckbox = document.getElementById('readMore');
  const readMoreLabel = document.getElementById('readMoreLabel');
  if (readMoreCheckbox && readMoreLabel) {
    function updateReadMoreText() {
      readMoreLabel.querySelector('.services__arrow').style.transform = readMoreCheckbox.checked ? 'rotate(180deg)' : 'rotate(0deg)';
      readMoreLabel.firstChild.textContent = readMoreCheckbox.checked ? 'Свернуть' : 'Читать далее';
    }
    // Начальное состояние
    updateReadMoreText();
    readMoreCheckbox.addEventListener('change', updateReadMoreText);
  }
});