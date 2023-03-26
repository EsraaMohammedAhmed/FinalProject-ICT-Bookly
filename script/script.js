const loader = document.querySelector('#loader');
const main = document.querySelector('body');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5000);
}
init();



const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});




/* Initialize Swiper */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
  },
});



 /* Open when someone clicks on the span element */
 function openNav() {
  document.getElementById("myNav").style.width = "100%";
 }

/* Close when someone clicks on the "x" symbol inside the overlay */
 function closeNav() {
   document.getElementById("myNav").style.width = "0%";
 }



/*sectionSwiperThree*******************************/
var swiper = new Swiper(".sectionThree-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },


    991: {
      slidesPerView: 4,
    },


    1024: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },
});


////////scroll************ */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
