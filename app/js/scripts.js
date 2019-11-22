'use strict';

$(document).ready(function() {

  $('.tab-link').on('click', '.tab', function(e){
    e.preventDefault();

    let id = $(this).attr('href');

    $(this).parents('.tab-link').find('.active').removeClass('active');
    $(this).addClass('active');
    $(id).parents('.tab-container').find('.active').removeClass('active');
    $(id).addClass('active');
  });

  $( ".selectmenu" ).selectmenu();

  $('.slider').slick({
    dots: true,
    appendDots: $(".slider-dots"),
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8L0 6L12 6L8 2L9 0L16 7L9 14L8 12L12 8L0 8Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8L0 6L12 6L8 2L9 0L16 7L9 14L8 12L12 8L0 8Z"/></svg></button>'
  });

  $('.slider-case').slick({
    vertical: true,
    dots: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8L0 6L12 6L8 2L9 0L16 7L9 14L8 12L12 8L0 8Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8L0 6L12 6L8 2L9 0L16 7L9 14L8 12L12 8L0 8Z"/></svg></button>'
  });

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $('input[type=tel]').forceNumbericOnly();
});
