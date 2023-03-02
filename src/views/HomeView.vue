<template>
  <template-view>
    <div v-if="loading">
      loading...
    </div>

   <div v-else>
 <!-- carousel  -->
 <section>
  <div class="flux-container">
    <carousel-component></carousel-component>
  </div>
</section>

<!-- program     -->
<section>
  <div class="container">

  </div>
</section>

<!-- message about principal -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="principal.image" alt="">
      </div>
      <div class="col-md-8">
        <h1>{{ principal.name }}</h1>
        <div v-html="principal.content"></div>
      </div>
      
    </div>
  </div>
</section>

<!-- message about Coordinator -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <h1>{{ coordinator.name }}</h1>
        <div v-html="coordinator.content.toString().substring(0, 1550) + '...'"></div>
       <div class="frame">
         <button class="custom-btn btn-5"><span>Read More</span></button>
       </div>
      </div>
      <div class="col-md-5">
        <img :src="coordinator.image" alt="">
      </div>
    </div>
  </div>
</section>

<!-- Why Study at DMC/NAAST? -->
<section>

</section>

<!-- Academic Member -->
<section>
  <div class="container">
   
      <carousel :autoplay="true" :margin=10 :dots=true :nav="false" :responsive="{0:{items:1,nav:false,dots:true},600:{items:6,nav:false, dots:true}}">
        <div><img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
        <div><img src="https://cdn.pixabay.com/photo/2016/11/14/03/43/buddhism-1822518__340.jpg" alt=""></div>
      </carousel>
  </div>
</section>

<!-- Non-Academic Member -->
<section>

</section>

<!-- Notices -->
<section>

</section>
   </div>
  </template-view>
</template>

<script>
// @ is an alias to /src
import TemplateView from '@/views/TemplateView'
import CarouselComponent from '@/components/CarouselComponent'
import { mapGetters } from 'vuex';
import carousel from 'vue-owl-carousel'
export default {
  name: 'HomeView',
  components: {
    TemplateView,
    CarouselComponent,
    carousel
  },
  computed:{
    ...mapGetters({
      menus:"get_menu",
      principal:"get_principal",
      coordinator:"get_coordinator",
    })
  },

}
</script>
