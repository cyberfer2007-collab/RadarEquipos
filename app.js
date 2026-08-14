
const frame = document.getElementById('excelFrame');
const refreshBtn = document.getElementById('refreshBtn');

refreshBtn.addEventListener('click', () => {
  const src = frame.src;
  frame.src = 'about:blank';
  setTimeout(() => { frame.src = src; }, 120);
});

window.addEventListener('online', () => {
  document.querySelector('.status-wrap span:last-child').textContent = 'Fuente en línea';
  document.querySelector('.status-dot').style.background = '#10a37f';
});

window.addEventListener('offline', () => {
  document.querySelector('.status-wrap span:last-child').textContent = 'Sin conexión';
  document.querySelector('.status-dot').style.background = '#b42318';
});
