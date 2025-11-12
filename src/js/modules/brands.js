const toggle = document.querySelector('.services__toggle')
const extra = document.querySelector('.services__extra')
const text = document.querySelector('.services__text')
const arrow = document.querySelector('.services__arrow')

toggle.addEventListener('click', () => {
  const isVisible = extra.classList.contains('show')

  if (isVisible) {
    extra.classList.remove('show')
    text.textContent = 'Показать все'
    arrow.style.transform = 'rotate(0deg)'
  } else {
    extra.classList.add('show')
    text.textContent = 'Скрыть'
    arrow.style.transform = 'rotate(180deg)'
  }
})

let swiperInstance = null

function initSwiper() {
  const width = window.innerWidth

  if (width >= 320 && width <= 767) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.swiper-mySwiper', {
        modules: [Pagination],
        slidesPerView: 1.3,
        spaceBetween: 8, // расстояние между кнопками
        centeredSlides: true, // центрирование слайдов
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }
  }
}

initSwiper()
window.addEventListener('resize', initSwiper)
