const toggle = document.querySelector('.devices__toggle')
const extra = document.querySelector('.devices__extra')
const text = document.querySelector('.devices__text')
const arrow = document.querySelector('.devices__arrow')

toggle.addEventListener('click', () => {
  const open = extra.classList.contains('show')

  if (open) {
    extra.classList.remove('show')
    text.textContent = 'Показать все'
    arrow.style.transform = 'rotate(0deg)'
  } else {
    extra.classList.add('show')
    text.textContent = 'Скрыть'
    arrow.style.transform = 'rotate(180deg)'
  }
})
