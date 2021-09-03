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

  // Fetching data from the Github user api

  fetch('https://api.github.com/users/' + originalName)
    .then((result) => result.json())
    .then((data) => {
      //fetch all the user data into data variable .
      avatar.src = data.avatar_url;

      //user full name

      if (data.name == null) {
        name.innerHTML = `I am anonymous 😕`;
      } else {
        name.innerHTML = data.name;
      }

      //  user github account
      user_name.innerHTML = `@${data.login}`;
      user_name.href = `https://github.com/${data.login}`;

      // join date

      let day_joining_github = data.created_at.slice(0, 10);

      join_date.innerHTML = `Joined ${day_joining_github}`;

      // bio section

      if (data.bio == null) {
        bio.innerHTML = `Oooops !! ${data.name} didn't add a bio yet. `;
      } else bio.innerHTML = data.bio;

      // Profile data section

      nbr_repo.innerHTML = data.public_repos;

      nbr_followers.innerHTML = data.followers;

      nbr_following.innerHTML = data.following;

      // Social links section

      loc.innerHTML = data.location;

      if (data.twitter_username == null) {
        twitter_user_name.innerHTML = 'Not aviable.';
      } else {
        twitter_user_name.innerHTML = data.twitter_username;
        twitter_user_name.href = `https://twitter.com/${data.twitter_username}`;
      }

      // company working at
      if (data.company == null) {
        company.innerHTML = 'Not aviable.';
      } else {
        company.innerHTML = data.company;
      }

      // // website url
      if (data.blog == '') {
        blog_url.innerHTML = 'Not aviable.';
      } else {
        blog_url.innerHTML = data.blog;
        blog_url.href = `${data.blog}`;
      }
    });
});

//Function to convert months from numbers into letters.

// function convert_month(nbr) {
//   let months = ['Jan', 'Feb', 'Mar'];
//   return months[nbr];
// }
