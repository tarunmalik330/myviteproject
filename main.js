import './style.css'
import { setupCounter } from './counter.js'
import Logo from './public/assets/images/png/pagelogo.png'

document.querySelector('#app').innerHTML = `
<div class="bg-secondary py-5">
    <div class="container">
      <h2 class="bg_gray text-white fs-3 fw-bold text-center rounded-5 py-3 mb-0">My Vite Project</h2>
    </div>
</div>
<div class="bg_gray py-3">
  <div class="container py-1">
    <a herf="#"><img src="${Logo}" alt="logo" width="176" height="56"/></a>
  </div>
</div>
  <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
    speed="600" parallax="true" pagination="true" pagination-clickable="true" navigation="false">
    <div slot="container-start" class="parallax-bg"
      style="background-image: url(./public/assets/images/png/sliderimg.png);" data-swiper-parallax="-23%"></div>
    <swiper-slide>
     <h2 class="text-center ff_josefin text_xl fw-bold mw_927 mx-auto lh_100 mb-1">Et dictumst diam pharetra volutpat.</h2>
     <p class="text-center fw-semibold text-white mw_899 mx-auto text_md lh_155 mt-3 mb-5">Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo, pellentesque laoreet amet.</p>
     <button class="btn_start fw-semibold text_md text-white mx-auto lh_119 d-flex align-items-center justify-content-center">GET STARTED</button>
    </swiper-slide>
    <swiper-slide>
      <h2 class="text-center ff_josefin text_xl fw-bold mw_927 mx-auto lh_100 mb-1">Et dictumst diam pharetra volutpat.</h2>
     <p class="text-center fw-semibold text-white mw_899 mx-auto text_md lh_155 mt-3 mb-5">Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo, pellentesque laoreet amet.</p>
     <button class="btn_start fw-semibold text_md text-white mx-auto lh_119 d-flex align-items-center justify-content-center">GET STARTED</button>
    </swiper-slide>
    <swiper-slide>
      <h2 class="text-center ff_josefin text_xl fw-bold mw_927 mx-auto lh_100 mb-1">Et dictumst diam pharetra volutpat.</h2>
     <p class="text-center fw-semibold text-white mw_899 mx-auto text_md lh_155 mt-3 mb-5">Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo, pellentesque laoreet amet.</p>
     <button class="btn_start fw-semibold text_md text-white mx-auto lh_119 d-flex align-items-center justify-content-center">GET STARTED</button>
    </swiper-slide>
     <swiper-slide>
      <h2 class="text-center ff_josefin text_xl fw-bold mw_927 mx-auto lh_100 mb-1">Et dictumst diam pharetra volutpat.</h2>
     <p class="text-center fw-semibold text-white mw_899 mx-auto text_md lh_155 mt-3 mb-5">Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo, pellentesque laoreet amet.</p>
     <button class="btn_start fw-semibold text_md text-white mx-auto lh_119 d-flex align-items-center justify-content-center">GET STARTED</button>
    </swiper-slide>
  </swiper-container>
`

setupCounter(document.querySelector('#counter'))