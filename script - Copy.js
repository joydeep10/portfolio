var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },
    },
    autoplay:{
        delay: 4000,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false, // Set to false to disable pagination bullets
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true, // Set to true to hide the scrollbar
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




/*
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/*
            <div class="project-slider swiper-container mt-4">

              <div class="swiper-wrapper">
    
                <div class="swiper-slide box">
                  <div class="card" style="width: 18rem;">
                    <img src="project.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide box">
                  <div class="card" style="width: 18rem;">
                    <img src="project.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide box">
                  <div class="card" style="width: 18rem;">
                    <img src="project.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide box">
                  <div class="card" style="width: 18rem;">
                    <img src="project.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide box">
                  <div class="card" style="width: 18rem;">
                    <img src="project.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
    
    
              </div>
            </div>

var swiper = new Swiper(".project-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false, // Set to false to disable pagination bullets
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true, // Set to true to hide the scrollbar
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
*/