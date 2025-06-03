document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.arrow-left');
  const nextButton = document.querySelector('.arrow-right');
  const container = document.querySelector('.list');
  const items = container ? container.querySelectorAll('.item') : [];
  const indicadores = document.querySelector('.indicadores');
  const dots = indicadores ? indicadores.querySelectorAll('ul li') : [];
  const lastPosition = items.length - 1;
  let active = 0;

  prevButton.onclick = () => {
    const itemOld = container.querySelector('.item.active');
    if (itemOld) itemOld.classList.remove('active');

    active = active === 0 ? lastPosition : active - 1;
    items[active].classList.add('active');

    const dotsOld = indicadores.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicadores.querySelector('.number').innerHTML = (active + 1).toString().padStart(2, '0');
  };

  nextButton.onclick = () => {
    const itemOld = container.querySelector('.item.active');
    if (itemOld) itemOld.classList.remove('active');

    active = active === lastPosition ? 0 : active + 1;
    items[active].classList.add('active');

    const dotsOld = indicadores.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicadores.querySelector('.number').innerHTML = (active + 1).toString().padStart(2, '0');
  };
});
