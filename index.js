
 var slideIndex = 1;
        displaySlide(slideIndex);
  
        function moveSlides(n) {
            displaySlide(slideIndex += n);
        }
  
        function activeSlide(n) {
            displaySlide(slideIndex = n);
        }
  
        /* Main function */
        function displaySlide(n) {
            var i;
            var totalslides =
                document.getElementsByClassName("slide");
             
            var totaldots =
                document.getElementsByClassName("footerdot");
             
            if (n > totalslides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = totalslides.length;
            }
            for (i = 0; i < totalslides.length; i++) {
                totalslides[i].style.display = "none";
            }
            for (i = 0; i < totaldots.length; i++) {
                totaldots[i].className =
                totaldots[i].className.replace(" active", "");
            }
            totalslides[slideIndex - 1].style.display = "block";
            totaldots[slideIndex - 1].className += " active";
        }

    // slider script
    $(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
  },
});
    // slider end