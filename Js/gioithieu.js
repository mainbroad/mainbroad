// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var slideIndex = 1;
// var t;
// showSlides(slideIndex);

// // function plusSlides(n) {
// //   showSlides(slideIndex += n);
// // }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setInterval(showSlides, 8000); // Change image every 2 seconds
// }

var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = -1;
var repeater;

function carousel() {

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } // cycle through and hide all the images

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex <= 0) {
    slideIndex = slides.length;
  } // what to do if slideIndex is too high or too low
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // show the relevant slide
}

function cycle(r) {

  if (r) { // if r is true then clear and restart the timer
    clearInterval(repeater); // clear the timer
    repeater = setInterval(function() { // start the timer
      carousel();
    }, 10000);
  } else {
    clearInterval(repeater); // clear and stop the timer if r isn't true
  }
}

window.onload = function() {
  carousel();
}; // show the start image on load

carousel();
cycle(true);


function plusSlides(n) {
  cycle(true);
  slideIndex += n - 1;
  carousel();
}

function currentSlide(n) {
  cycle(true);
  slideIndex = n - 1;
  carousel();
}
