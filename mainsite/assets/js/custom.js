(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }

$(document).ready(function(){
    $('.modal').each(function(){
        var src = $(this).find('iframe').attr('src');
        $(this).on('click', function(){
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
});

$(function(){

	$.scrollUp({
		animation: 'fade',
		scrollText: '', // Text for element
		scrollImg: true,
//		activeOverlay: true,
	});

    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

});

$('.slider-index').slick({
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});

$('.slider-prod').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});

$('.slider-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.slider-gallery-nav',
    responsive: [
        {
            breakpoint: 640,
            settings: {
                dots: true,
            }
        }
    ]
});
$('.slider-gallery-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-gallery',
    arrows: true,
    dots: false,
//    centerMode: true,
    focusOnSelect: true
});


$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-gallery').slick('slickGoTo', slideno - 1);
 });

$("input").blur(function() {
    $("#scrollUp").show();
});

$("input").focus(function() {
    $("#scrollUp").hide();
});

$(".btn-close-alert").click(function(){
    $(".alert-danger").fadeOut();
});
$('.carousel').carousel({
    interval: 3000
})
