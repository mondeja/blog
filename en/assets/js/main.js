
var cleanWindowLocation = function() {
  if (history) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  } else {
    window.location.hash = "";
    parent.location.hash = "";
  }
}

var showProjects = function() {
  var timelineWrapper = $('.timeline-wrapper');
  var panelCover = $('.panel-cover');
  timelineWrapper.css("display", "");

  var currentWidth = panelCover.width();
  if (currentWidth < 960) {
    panelCover.addClass('panel-cover--collapsed')
    timelineWrapper.addClass('showing');
  } else {
    panelCover.css('max-width', currentWidth);
    panelCover.animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {
      timelineWrapper.addClass('showing');
    })
  };
}

var hideProjects = function() {
  var panelCover = $('.panel-cover');
  panelCover.removeClass('panel-cover--collapsed')
  panelCover.css('max-width', '100%')
  panelCover.animate({'width': '100%'}, 400, swing = 'swing', function () {
    cleanWindowLocation();

    var timelineWrapper = $('.timeline-wrapper');
    timelineWrapper.removeClass('showing');
    timelineWrapper.css("display", "none");
  })
}

$(document).ready(function () {
  $('.projects-button').click(function (e) {
    if ($('.timeline-wrapper').hasClass('showing')){
      hideProjects();
    } else {
      showProjects();
    }
  });

  if (window.location.hash == "#projects") {
    showProjects();
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
});
