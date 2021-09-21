// Variables
var dark_btn = document.querySelector('.dark_btn');
var light_btn = document.querySelector('.light_btn');

dark_btn.addEventListener('click', function () {
  document.body.classList.add('dark_theme');
  dark_btn.style.visibility = 'hidden';
  light_btn.style.visibility = 'visible';
  // Add bg_transition class to the body to implement transition when switching between themes
  document.body.classList.add('bg_transition');
});
light_btn.addEventListener('click', function () {
  document.body.classList.remove('dark_theme');
  light_btn.style.visibility = 'hidden';
  dark_btn.style.visibility = 'visible';
  // Add bg_transition class to the body to implement transition when switching between themes
  document.body.classList.add('bg_transition');
});
// variables
const form = document.getElementById('myForm');

const main = document.querySelector('.main');

let avatar = document.querySelector('#avatar');

let search_btn = document.querySelector('#search_btn');

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

let no_results = document.querySelector('.no-results-tag');

//Handle the event lisntener when submiting the search
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let search = document.getElementById('search-input').value;
  //remove space from search input value
  let originalName = search.split(' ').join('');
  // ...send the form data and get a response asynchronously
  fetch('https://api.github.com/users/' + originalName)
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject({
          status: result.status,
          statusText: result.statusText,
        });
      }
    })
    .then((data) => {
      //make the no_result tag invisible if the previous request was error
      no_results.classList.remove('make_it_visible');
      //Remove the erro styling if the previous request was error
      myForm.classList.remove('error');
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

      //Slice year
      let year = data.created_at.slice(0, 4);
      //Slice month convert number into letters.
      let month = convert_month_to_letters(data.created_at.slice(5, 7));
      //Slice the day
      let day = data.created_at.slice(8, 10);

      //concatenate year/ month / day, then disply the join date .
      join_date.innerHTML = `Joined ${year} ${month} ${day}`;

      // bio section
      if (data.bio == null) {
        bio.innerHTML = `Oooops !! I didn't add a bio yet. `;
      } else bio.innerHTML = data.bio;

      // Profile data section
      nbr_repo.innerHTML = data.public_repos;

      nbr_followers.innerHTML = data.followers;

      nbr_following.innerHTML = data.following;

      // Social links section
      if (data.location == null) {
        loc.innerHTML = 'Not aviable.';
        loc.style.opacity = '0.5';
      } else {
        loc.innerHTML = data.location;
      }
      //twitter link
      if (data.twitter_username == null) {
        twitter_user_name.innerHTML = 'Not aviable.';
        twitter_user_name.style.opacity = '0.5';
      } else {
        twitter_user_name.innerHTML = data.twitter_username;
        twitter_user_name.href = `https://twitter.com/${data.twitter_username}`;
      }

      // company working at
      if (data.company == null) {
        company.innerHTML = 'Not aviable.';
        company.style.opacity = '0.5';
      } else {
        company.innerHTML = data.company;
      }

      // website url (slice the link display only 10 char for UI purpore)
      if (data.blog == '') {
        blog_url.innerHTML = 'Not aviable.';
        blog_url.style.opacity = '0.5';
      } else {
        blog_url.innerHTML = `${data.blog.slice(0, 20)}... `;
        blog_url.href = `${data.blog}`;
      }
    })
    //handle the error
    .catch(function () {
      display_noResult();
    });
});

//Function to convert months from numbers into letters.

function convert_month_to_letters(month) {
  //convert month to number
  let month_nbr = Number(month);
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nev',
    'Dec',
  ];
  return months[month_nbr - 1];
}

//function that make the no_result tag visible
function display_noResult() {
  no_results.classList.add('make_it_visible');
  myForm.classList.add('error');
}
