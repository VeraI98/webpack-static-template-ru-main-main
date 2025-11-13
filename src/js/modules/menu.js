document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('siteMenu');
  const openBtn = document.getElementById('menuToggleBtn');
  const closeBtn = document.getElementById('menuCloseBtn');

  if (!menu) return;

  function openMenu() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden'; // блокируем скролл под меню
  }

  function closeMenu() {
    menu.classList.remove('active');
    document.body.style.overflow = ''; // восстанавливаем скролл
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Закрыть при клике вне меню (на мобильных)
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) return;
    // если кликнули вне меню и не по кнопке открытия
    if (!menu.contains(e.target) && e.target !== openBtn) {
      closeMenu();
    }
  });

  // при изменении размера экрана — если перешли на десктоп, убедимся, что меню закрыто
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
      document.body.style.overflow = '';
    }
  });
});
