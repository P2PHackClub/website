// Start of JS to handle the carousel Animations
let slideIndex = 1;
showSlides(slideIndex);

// Arrow controls and reset for the image rotation
function changeSlidePos(n) {
  clearTimeout(timeoutHandle);
  showSlides(slideIndex += n);
}
// Arrow controls and reset for the image rotation
function changeSlideNeg(n) {
  clearTimeout(timeoutHandle);
  showSlides(slideIndex -= n);
}

// Dot controls and reset for the image rotation
function currentSlide(n) {
  clearTimeout(timeoutHandle);
  showSlides(slideIndex = n);
}

// Handles the color/image/text changing for the appropriate image and dot item.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("SlideShow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timeoutHandle = setTimeout(showSlides, 30000); // 30 second timer
}