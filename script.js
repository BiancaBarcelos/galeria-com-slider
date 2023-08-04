var larguraImg = 1200;
var larguraTela = $(window).width();
var espacamentoSlidePrincipal = (larguraTela - larguraImg) / 2;

$('.slider-principal').slick({
    centerMode: true,
    centerPadding: `${espacamentoSlidePrincipal}px`,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-secundario',
    infinite: true,
    draggable: false,

  });
  $('.slider-secundario').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-principal',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true
  });