const dialog = document.querySelector('dialog');
if (dialog) {
  document.querySelectorAll('[data-photo]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const image = dialog.querySelector('img');
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
});
