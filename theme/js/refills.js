const $ = require('jquery');

$(document).ready(() => {
  const menuToggle = $('#js-mobile-menu').unbind();

  $('#js-navigation-menu').removeClass('show');

  menuToggle.on('click', e => {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(() => {
      if ($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});
