$(document).ready(function() {
   var slideIndex = 0;
 
   function showNextSlide() {
     var slides = $('.slide');
     var currentSlide = slides.eq(slideIndex);
     currentSlide.removeClass('active');
 
     slideIndex = (slideIndex + 1) % slides.length;
 
     var nextSlide = slides.eq(slideIndex);
     nextSlide.addClass('active');
   }
 
   setInterval(showNextSlide, 3000);
 });
 