const theme = document.querySelector('#theme-link');

const input = document.querySelector('#input_switch');

input.addEventListener('change', function () {
  if (theme.getAttribute('href') == 'css/Light_theme.css') {
    theme.href = 'css/Dark_theme.css';
  } else {
    theme.href = 'css/Light_theme.css';
  }
});
