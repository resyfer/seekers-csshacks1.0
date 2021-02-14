$(document).on('load', getLocation());

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {

  $('#map').attr ('src', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.1590505366937!2d"+ position.coords.longitude + "!3d" + position.coords.latitude + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1613285048066!5m2!1sen!2sin");
}

