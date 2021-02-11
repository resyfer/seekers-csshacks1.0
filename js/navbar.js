function openNav(){
  $('#navbar-container').css({
    'transform':'translate(0, -50%)',
    'transition-duration':'0.2s',
  });
  $('#navbar-toggle-on').css({
    'opacity':'0',
    'transition-duration':'0.2s',
  })
}

function closeNav(){
  $('#navbar-container').css({
    'transform':'translate(-100%, -50%)',
    'transition-duration':'0.2s',
  });
  $('#navbar-toggle-on').css({
    'opacity':'100%',
    'transition-duration':'0.2s',
  })
}