import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', function () {
  // Sidebar toggle (для мобильных)
  const sidebar = document.getElementById('sidebar')
  const overlay = document.getElementById('menuOverlay')
  const toggles = document.querySelectorAll('.js-toggle-sidebar')

  function toggleMenu() {
    sidebar.classList.toggle('menu--open')
    if (overlay) {
      overlay.classList.toggle('active')
    }
    // Блокируем скролл при открытом меню
    if (sidebar.classList.contains('menu--open')) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  toggles.forEach((btn) => {
    btn.addEventListener('click', toggleMenu)
  })

  // Закрытие меню при клике на overlay
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('menu--open')
      overlay.classList.remove('active')
      document.body.style.overflow = ''
    })
  }

  // Brands "Показать все"
  const brandsToggle = document.querySelector('.js-brands-toggle')
  const brandsExtra = document.getElementById('brandsExtra')
  if (brandsToggle && brandsExtra) {
    brandsToggle.addEventListener('click', function () {
      const isOpen = brandsExtra.style.display === 'block'
      brandsExtra.style.display = isOpen ? 'none' : 'block'
      brandsToggle.setAttribute('aria-pressed', String(!isOpen))
      brandsToggle.querySelector('.brands__text').textContent = isOpen
        ? 'Показать все'
        : 'Скрыть'
    })
  }

  // Swiper init для brands
  try {
    const brandsSwiper = new Swiper('.mySwiper', {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 12,
      pagination: {
        el: '.mySwiper .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }
    })
  } catch (e) {
    console.warn('Brands Swiper init error', e)
  }

  // Swiper init для devices
  try {
    const devicesSwiper = new Swiper('.devicesSwiper', {
      loop: false,
      slidesPerView: 1.3,
      spaceBetween: 16,
      pagination: {
        el: '.devicesSwiper .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 1.3 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 }
      }
    })
  } catch (e) {
    console.warn('Devices Swiper init error', e)
  }

  // Swiper init для prices
  try {
    const pricesSwiper = new Swiper('.pricesSwiper', {
      loop: false,
      slidesPerView: 1.3,
      spaceBetween: 16,
      pagination: {
        el: '.pricesSwiper .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 1.3 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 }
      }
    })
  } catch (e) {
    console.warn('Prices Swiper init error', e)
  }

  if (brandsToggle) {
    brandsToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        brandsToggle.click()
      }
    })
  }

  const readMoreCheckbox = document.getElementById('readMore')
  const readMoreLabel = document.getElementById('readMoreLabel')
  if (readMoreCheckbox && readMoreLabel) {
    function updateReadMoreText() {
      readMoreLabel.querySelector('.services__arrow').style.transform =
        readMoreCheckbox.checked ? 'rotate(180deg)' : 'rotate(0deg)'
      readMoreLabel.firstChild.textContent = readMoreCheckbox.checked
        ? 'Свернуть'
        : 'Читать далее'
    }
    // Начальное состояние
    updateReadMoreText()
    readMoreCheckbox.addEventListener('change', updateReadMoreText)
  }

  // Devices "Показать все"
  const devicesToggle = document.querySelector('.devices__toggle')
  const devicesExtra = document.querySelector('.devices__extra')
  const devicesText = document.querySelector('.devices__text')
  const devicesArrow = document.querySelector('.devices__arrow')

  if (devicesToggle && devicesExtra && devicesText && devicesArrow) {
    devicesToggle.addEventListener('click', function () {
      const isOpen = devicesExtra.classList.contains('show')

      if (isOpen) {
        devicesExtra.classList.remove('show')
        devicesExtra.classList.add('hidden')
        devicesText.textContent = 'Показать все'
        devicesArrow.style.transform = 'rotate(0deg)'
      } else {
        devicesExtra.classList.add('show')
        devicesExtra.classList.remove('hidden')
        devicesText.textContent = 'Скрыть'
        devicesArrow.style.transform = 'rotate(180deg)'
      }
    })
  }
})
