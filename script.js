const theme = document.querySelector('#theme-link');

const input = document.querySelector('#input_switch');
const icon = document.querySelector('.icon-name');
input.addEventListener('change', function () {
  if (theme.getAttribute('href') == 'css/Light_theme.css') {
    theme.href = 'css/Dark_theme.css';
    icon.textContent = 'Light';
    document.body.classList.add('active');
  } else {
    theme.href = 'css/Light_theme.css';
    icon.textContent = 'Dark';
    document.body.classList.add('active');
  }
});
