// Vacation Modal
var vacationModal = new bootstrap.Modal(document.getElementById("modal-vacation"), {});
document.onreadystatechange = function () {
  if(document.readyState === "complete"){
	  if (document.cookie.indexOf('modal_shown=') >= 0) {
	  } else if (document.cookie.indexOf('modal_submitted=') >= 0) {
} else {
  vacationModal.show();
  document.cookie = 'modal_shown=seen';

}

  }
}

//Submit Vacation Form - Cookie Creation
$('#rp1').submit(function(e) {
    document.cookie = "modal_submitted=yes;expires=30";
});


// Navbar
var mainNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    mainNav.classList.add("nav-scroll");
  } else {
    mainNav.classList.remove("nav-scroll");
  }
};

// Lazy Load
var lazyLoadInstance = new LazyLoad({
  elements_selector: "[loading=lazy]",
  use_native: true,
});
lazyLoadInstance.update();

// Highlight current link
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].classList.add('active');
    }
}

// Scroll to top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//PhotoSwipe
photoswipeSimplify.init();

var glider = document.getElementById("glide");
  if(glider){
    // Card carousel
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 2,
      peek: 50,
      autoplay: 5000,
      breakpoints: {
        1200: {
          startAt: 0,
          perView: 1,
        },
        800: {
          startAt: 0,
          perView: 1,
          peek: 50,
        }
      }
    }).mount();
  }
