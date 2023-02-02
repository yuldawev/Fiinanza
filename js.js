const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', () => {
  const isOpen = panel.classList.contains('open');
  panels.forEach(panel => panel.classList.remove('open'));
  if(!isOpen) {
    panel.classList.add('open');
  }
}));

panels.forEach(panel => panel.addEventListener('transitionend', e => {
  if(e.propertyName.includes('flex')) {
    panels.forEach(panel => {
      if(panel.classList.contains('open')) {
        panel.classList.add('open-active');
      } else {
        panel.classList.remove('open-active');
      }
    });
  }
}));