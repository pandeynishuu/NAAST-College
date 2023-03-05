<template>
  <template-view>
    <div v-if="loading" style="width:100%;height:100vh d-flex jusify-content-center align-items-center">
        <img src="@/assets/loading.gif" class="w-25" alt="">
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
        <img :src="principal.image" class="img-fluid rounded" alt="">
      </div>
      <div class="col-md-8">
        <h1>{{ principal.name }}</h1>
        <div v-html="principal.content"></div>
      </div>
      
    </div>
  </div>
</section>

<!-- message about Coordinator -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ coordinator.name }}</h1>
        <div v-html="coordinator.content.toString().substring(0, 1250) + '...'"></div>
       <div class="frame">
        <a href=""> <button class="custom-btn btn-5"><span>Read More</span></button></a>
       </div>
      </div>
      <div class="col-md-4">
        <img :src="coordinator.image" class="img-fluid rounded"  alt="">
      </div>
    </div>
  </div>
</section>

<!-- Why Study at DMC/NAAST? -->
<section>

</section>
<!-- Academic Member -->

<section v-if="academic_loading">
  <div class="container">
    loading....
  </div>
</section>
<section class="py-5" v-else>
  <div class="container">
    <h1 style="text-align:center;">Academic Members Profile</h1>
    
      <carousel :autoplay="true" :margin=4 :dots=false :nav="false" :responsive="{0:{items:1,nav:false,dots:false},600:{items:5,nav:false, dots:false}}">
        <div v-for="(academic, index) in academics" :key="index">
         <el-card shadow="never" >
           <div style="w-100">
              <img :src="academic.photo" style="width: 100%;height:150px;objectFit:contain;">
          </div>
          <div>
            <address>
              <span class="fw-bold">{{ academic.name }}</span> <br>
              <span style="font-size:14px">{{ academic.title }}</span> <br>
              <span class="text-primary" style="font-size:14px">{{ academic.designation }}</span> <br>
              <span class="text-primary" style="font-size:14px"><i class="fa-solid fa-envelope"></i> {{ academic.email }}</span> <br>
              <span class="text-primary" style="font-size:14px"><i class="fa-solid fa-phone-square"></i> {{ academic.phone }}</span> <br>
            </address>
          </div>
         </el-card>
      </div>
      </carousel>
  </div>
</section>

<!-- Non-Academic Member -->
<section v-if="administrative_loading ">
  <div class="container">
    loading....
  </div>
</section>
<section class="py-5 bg-light" v-else>
  <div class="container">
    <h1 style="text-align:center;">Administrative Members Profile</h1>
   
      <carousel :autoplay="true" :margin=4 :dots=false :nav="false" :responsive="{0:{items:1,nav:false,dots:false},600:{items:5,nav:false, dots:false}}">
        <div v-for="(administrative, index) in administrative" :key="index">
         <el-card shadow="never" >
           <div style="w-100">
              <img :src="administrative.photo" style="width: 100%;height:150px;objectFit:contain;">
          </div>
          <div>
            <address>
              <span class="fw-bold">{{ administrative.name }}</span> <br>
              <span style="font-size:14px">{{ administrative.title }}</span> <br>
              <span class="text-primary" style="font-size:14px">{{ administrative.designation }}</span> <br>
              <span class="text-primary" style="font-size:14px"><i class="fa-solid fa-envelope"></i> {{ administrative.email }}</span> <br>
              <span class="text-primary" style="font-size:14px"><i class="fa-solid fa-phone-square"></i> {{ administrative.phone }}</span> <br>
            </address>
          </div>
         </el-card>
      </div>
      </carousel>
  </div>
</section>

<!-- Notices -->
<section class="py-5">
  <div class="container">
    <h1 style="text-align:center;">Notice</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" class="border border-1">Date</th>
          <th scope="col" class="border border-1 w-50">Subject</th>
          <th scope="col" class="border border-1">Notice Category</th>
          <th scope="col" class="border border-1">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(notice,index) in notices" :key="index">
          <td class="border border-1" scope="row">{{ notice.post_on }}</td>
          <td class="border border-1">{{ notice.subject }} <span class="badge bg-danger badge-sm">new</span></td>
          <td class="border border-1">{{notice.type}}</td>
          <td class="border border-1"><a :href="notice.file" target="_page" class="badge bg-primary">Preview</a></td>
        </tr>
        
      </tbody>
    </table> 
  </div>
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
      loading : 'get_menu_loading',
      principal:"get_principal",
      coordinator:"get_coordinator",
      academics:"get_academic",
      academic_loading : 'get_academic_loading',
      administrative:"get_administrative",
      administrative_loading : 'get_administrative_loading',
      notices : 'get_notice',
    })
  },

}
</script>
