'use strict';

$(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
    $("#header .main-nav").toggleClass("active");
  });

  $(".main-nav a").click(function(){
    $("#hamburger").removeClass("active");
    $("#header .main-nav").removeClass("active");
  });
});
//スライダー
const images = ['images/main_visual01.jpg','images/main_visual02.jpg','images/main_visual03.jpg'];
let current = 0;

function changeImage(num) {
  if(current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
  }
};

document.getElementById('prev').onclick = function() {
  changeImage(-1);
};
document.getElementById('next').onclick = function() {
  changeImage(1);
};
