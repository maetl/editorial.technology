$(document).ready(function() {
  var hero = $("#hero");
  var header = $("#header");
  var flipOffset = hero.offset().top + 160;
  var fromBottom = $(document).height() - ($(window).scrollTop() + $(window).height());

  $(window).scroll(function() { 
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > flipOffset) {
      if (header.hasClass("masthead")) {
        header.removeClass("masthead");
      }
      header.addClass("navigation");
    } else {
      if (header.hasClass("navigation")) {
        header.removeClass("navigation");
      }
      header.addClass("masthead");
    }

    var sections = [];
    $("nav ul li a").each(function(i, a) {
      var sectionId = $(a).attr('href');
      var sectionElement = $(sectionId);
      var section = {
        "id": sectionId,
        "top": sectionElement.offset().top,
        "bottom": sectionElement.offset().top + sectionElement.height()
      };
      sections.push(section);
    });

    $.each(sections, function(i, s) {
      if (scrollPosition >= s.top && scrollPosition < s.bottom) {
        $("a[href='"+ s.id +"']").parent().addClass('active');
      } else {
        $("a[href='"+ s.id +"']").parent().removeClass('active')
      }
    });

    if (fromBottom == 0) {
      $("li.active").removeClass('active');
      $("li:last").addClass('active');
    }

  });

});