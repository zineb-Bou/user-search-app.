// Variables
const theme = document.querySelector('#theme-link');
const input = document.querySelector('#input_switch');
const icon = document.querySelector('.icon-name');

// When clicking on the toggle switch btn
input.addEventListener('change', function () {
  // if the current theme is light theme.
  if (theme.getAttribute('href') == 'css/Light_theme.css') {
    theme.href = 'css/Dark_theme.css';
    // change the inner text to -light-
    icon.textContent = 'Light';
    // Add bg_transition class to the body to implement transition when switching between themes
    document.body.classList.add('bg_transition');
  } else {
    theme.href = 'css/Light_theme.css';
    // change the inner text to -Dark-
    icon.textContent = 'Dark';
    // Add bg_transition class to the body to implement transition when switching between themes
    document.body.classList.add('bg_transition');
  }
});
