const NULL = 0;

$(document).on('click', '.signin', function(event) {
  event.preventDefault();
  $('.abcRioButton').click();
});

function onSignIn(googleUser) {
  localStorage.setItem("signedIn", "1");
  
  var profile = googleUser.getBasicProfile();
  localStorage.setItem("name", profile.getName());
  localStorage.setItem("email", profile.getEmail());
  localStorage.setItem("ImageURL", profile.getImageUrl());
};

$(document).on('load',checkSignIn());

function checkSignIn() {
  var signInVal = localStorage.getItem("signedIn");
  if(signInVal == "1" && (window.location.href == "http://localhost:5500/" || window.location.href == "http://localhost:5500/index.html")) {
    window.location.href = "http://localhost:5500/welcome-page.html";
  } else if (signInVal == "0" && (window.location.href != "http://localhost:5500/" && window.location.href != "http://localhost:5500/index.html")) {
    window.location.href = "http://localhost:5500/";
  }
}

setInterval(function() {
  var signInVal = localStorage.getItem("signedIn");
  if(signInVal == "1" && (window.location.href == "http://localhost:5500/" || window.location.href == "http://localhost:5500/index.html")) {
    window.location.href = "http://localhost:5500/welcome-page.html";
  } else if (signInVal == "0" && (window.location.href != "http://localhost:5500/" && window.location.href != "http://localhost:5500/index.html")) {
    window.location.href = "http://localhost:5500/";
  }
}, 500);

/* Sign Out */

gapi.load('auth2', function() {
  var auth2 = gapi.auth2.init({
    client_id: '344814890774-98pb7erarmiq4q2evprthqhd1aq5srmu.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin'
  })
})

function signOut() {
  gapi.auth2.getAuthInstance().signOut().then(function() {
    localStorage.setItem("signedIn", "0");
  })
}

document.getElementById("username").innerHTML = localStorage.getItem("name");