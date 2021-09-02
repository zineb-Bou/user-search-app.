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

// variables for the user search

const form = document.getElementById('myForm');

let avatar = document.querySelector('#avatar');

let name = document.querySelector('#name');

let user_name = document.querySelector('#user-name');

let join_date = document.querySelector('#join-date');

let bio = document.querySelector('#bio');

let nbr_repo = document.querySelector('#nbr-repo');

let nbr_followers = document.querySelector('#nbr-followers');

let nbr_following = document.querySelector('#nbr-following');

let loc = document.querySelector('#loc');

let twitter_user_name = document.querySelector('#twitter-user-name');

let blog_url = document.querySelector('#blog-url');

let company = document.querySelector('#company');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let search = document.getElementById('search-input').value;

  //remove space from search input value
  let originalName = search.split(' ').join('');

