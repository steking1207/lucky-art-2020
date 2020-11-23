(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//$(".btn-paint").on("click", function() {
//    $('.img-preview').attr('src', $('.btn-paint').attr('data-paint'));
//    $('.btn-paint-dl').attr('href', $('.btn-paint').attr('data-paint'));
//    $('.modal-paint').modal('show');
//});

paintModal();

function paintModal() {
    var trigger = $("body").find('.btn-paint');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            imgSRC = $(this).attr("data-theImg"),
            imgSRCauto = imgSRC;
        $(theModal + ' img').attr('src', imgSRCauto);
        $(theModal + ' .btn-paint-dl').attr('href', imgSRCauto);
//        $(theModal + ' .btn-print').attr('href', imgSRCauto);
    });
}

//function printImg(url) {
//    var win = window.open('');
//    win.document.write('<img src="' + url + '" onload="window.print();window.close()" />');
//    win.focus();
//}

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

    $(".input-number").TouchSpin({
        min: 0,
        max: 99,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
    });

    $.fn.datepicker.defaults.language = 'zh-TW';
});

$('.slider-index').slick({
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
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
            breakpoint: 1200,
            settings: {
                arrows: true,
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
$('.slick-other').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
//        centerMode: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 994,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-gallery').slick('slickGoTo', slideno - 1);
 });
