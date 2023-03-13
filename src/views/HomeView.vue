<template>
  <template-view>
    <!-- <modal name="notice" v-if="latestNotice" 
    :min-width="200"
    :min-height="200"
    :reset="true"
    width="30%"
    height="auto"
    @before-open="beforeOpen"
    @opened="opened"
    @before-close="beforeClose"
    @closed="closed" class="v-model">
      <img :src="latestNotice.file" alt="" /> 
  </modal> -->
    <div
      v-if="loading"
      class="w-100 h-100 d-flex align-items-center justify-content-center"
    >
      <img src="@/assets/loading.gif" class="w-25" alt="" />
    </div>

    <div v-else>
      <section class="bg-white py-1">
          <div class="container d-flex justify-content-between">
            <div class="me-2">Notice:</div>
            <div class="w-100"><marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" onload="this.start()" direction="left">
              <span v-for="(notice,index) in notices" :key="index" class="me-2">
               <a class="text-black" href="" @click.prevent="$router.push({name:'notices'})"> <span v-for="(n,i) in notice.notices" :key="i"><i class="fa-solid fa-bullhorn"></i> {{ n.subject }}</span></a>
              </span>
            </marquee>
            </div>
          </div>
      </section>
      <!-- carousel  -->
      <section v-if="carousel.length > 0">
        <div class="flux-container">
          <carousel-component></carousel-component>
        </div>
      </section>

      <!-- Executive -->
      <section>
        <div class="container">
          <div class="row">
            <div
              class="col-md-3"
              v-for="(executive, index) in executives"
              :key="index"
            ></div>
          </div>
        </div>
      </section>

      <!-- Message  -->
      <section  class="py-5" >
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="(message,index) in messages" :key="index">
             
              <img
                :src="message.photo"
                class="img-fluid rounded-4"
                :alt="message.photo"
              />
              
              <h5 class="my-4">{{ message.name }}</h5>
               
              <div v-html="message.message.toString().substring(0, 1500) + '...'"></div>
                <a href="#" class='button button2' @click.prevent="$router.push({name:'message',params:{slug:message.slug}})">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Programs -->
      
      <section class="py-5 bg-light text-center">
        <div class="container">
          <div class="row">
            <h1>Our Programs</h1>
          <div class="col-md-3" v-for="(program,index) in programs" :key="index">
            
            <el-card shadow="hover">
              <h5>{{ program.title }}</h5>
            </el-card>
          </div>
          </div>
        </div>
      </section>

      <!-- Our Facilities -->
      <div v-if="facilitiesLoading"></div>
      <section class="py-5 bg-light text-center" v-else>
        <div class="container">
          <h1>Our Facilities</h1>
          <carousel
            :autoplay="true"
            :nav="false"
            :margin="4"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 4, nav: false },
            }"
          >
            <div  v-for="(facility,index) in facilities" :key="index">
              <el-card shadow="never">
                  <div>
                     <img :src="facility.image" class="img-fluid" alt="" style="width:100%;height:200px;objectFit:cover">
                  </div>
                  <div class="fw-bold text-black  my-2">{{ facility.title }}</div>
                  <div v-html="facility.description"></div>
                </el-card>
            </div>
            
          </carousel>
        </div>
      </section>

      <!-- Mission and Vision -->
      <section class="py-5">
        <div class="container">
          <div class="row g-2">
            <div class="col-md-3 text-center">
              <el-card shadow="hover">
                <i class="fa-brands fa-empire fs-1 text-primary"></i>
                <h5 class="my-2">Our Mission</h5>
              <p>Our school empowers all our students to dream big, believe in their abilities to achieve the dreams through their academic excellence along with their emotional, social and physical well-being.</p>
              </el-card>
            </div>

            <div class="col-md-3 text-center">
              <el-card shadow="hover">
                <i class="fa-solid fa-lightbulb fs-1 text-primary"></i>
                <h5 class="my-2">Our Vision</h5>
              <p>We understand ever individual child is unique with their own god gifted potentials. We aim to hone their talent to excel in life and make a rich for themselves through love, care and inspiration.</p>
              </el-card>
            </div>

            <div class="col-md-6">
              <el-card shadow="hover">
                <i class="fa-solid fa-chalkboard-user fs-1 text-primary"></i>
                <h5 class="my-2">Teaching-Learning Pedagogies</h5>
                <ul>
                  <li>Project Based Learning</li>
                  <li>Using Multiple Intelligence in teaching-learning</li>
                  <li>Lecture, Role-Play, Interactive-Learning,Group-Works, Task-Based Learning, Cross-Curricular-Method are used while teaching-learning</li>
                  <li>A blend of Eastern and Western educational philosophies are applied</li>
                  <li>Emphasis is on learning by doing,rather than rot learning</li>
                </ul>
              </el-card>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Feature Plans -->
      <section class="py-5 bg-lightPrimary">
        <div class="container">
         
          <h1 class="my-2"> Our Future Plans <i class="fa-solid fa-lightbulb fs-1"></i></h1>
          <p>We will upgrade the class every year. class 6 (six) this year to class XII, in near future. A very limited number of students would be enrolled every year to maintain Holy Garden's Academic Excellence and it's enviable legacy. We aimed to be best! </p>
        </div>
      </section>

      <!-- Photo Galleries -->
      <section v-if="galleryLoading">
        <div class="container">loading...</div>
      </section>
      <section class="py-5 bg-white text-center" v-else>
        <div class="container">
          <h1>Photo Gallery</h1>
          <carousel
            :autoplay="true"
            :nav="false"
            :margin="4"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 3, nav: false },
            }"
          >
            <div v-for="(gallery, index) in galleries" :key="index">
              <el-card shadow="hover">
                <a :href="gallery.url" target="_blank"><img :src="gallery.featuredImage" alt="" /></a>
                <div>{{ gallery.title }}</div>
              </el-card>
            </div>
          </carousel>
        </div>
      </section>

      <!-- Members -->
      <section class="text-center bg-light py-5 "  v-for="(member,index) in members" :key="index">
        <div class="container">
            <h1>{{ member.title }}</h1>
          <carousel
            :autoplay="true"
            :nav="false"
            :margin="4"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 5, nav: false },
            }"
          >
            <div v-for="(m, index) in member.members" :key="index">
              <el-card shadow="hover">
                <img :src="m.photo" alt="" />
                <address>
                  <div class="fw-bold">{{ m.name }}</div>
                  <div class="text-primary fw-semibold" style="fontSize:16px">{{ m.title }}</div>
                  <div style="fontSize:12px"><i class="fa-solid fa-id-badge"></i> {{ m.designation }}</div>
                  <div style="fontSize:12px"><i class="fa-solid fa-square-phone"></i> {{ m.phone }}</div>
                  <div style="fontSize:12px"><i class="fa-solid fa-envelope"></i> {{ m.email }}</div>
                </address>
              </el-card>
            </div>
          </carousel>
        </div>
      </section>

    </div>
  </template-view>
</template>

<script>
// @ is an alias to /src
import TemplateView from "@/views/TemplateView";
import CarouselComponent from "@/components/CarouselComponent";
import { mapGetters } from "vuex";
import carousel from "vue-owl-carousel";
export default {
  name: "HomeView",
  components: {
    TemplateView,
    CarouselComponent,
    carousel,
  },
  computed: {
    ...mapGetters({
      menus: "get_menu",
      carousel: "get_carousel",
      loading: "get_menu_loading",
      executives: "get_executives",
      galleries: "get_gallery",
      galleryLoading: "get_gallery_loading",
      members : 'get_members',
      latestNotice : 'get_notice',
      latestNoticeLoading : 'get_notice_loading',
      notices : 'get_notices',
      messages : 'get_messages',
      facilities : 'get_facilities',
      facilitiesLoading : 'get_facilities_loading',
      programs:"get_programs"

    }),

   
  },

    mounted(){
        this.$modal.show('notice')
    },
  
};
</script>
<style scoped>

.button {
  display: inline-block;
  padding:0.5em 0.5em;
  letter-spacing: -1px;
  text-decoration: none;
  border: solid 2px green;
  color: #232323;
  border-radius: 0.4em;
  transition: all 0.3s linear;
  animation-iteration-count: infinite;
}
.button:hover {
  color: #fff;
  background:var(--kPrimary);
  animation: none;
}

.button2 {
  animation-duration: 1s;
  animation-name: shaker;
}

@keyframes shaker {
  0% {
    transform: rotate(0deg);
 }
  29% {
    transform: rotate(0deg);
 }
  30% {
    transform: rotate(1deg);
 }
  31% {
    transform: rotate(2deg);
 }
  33% {
    transform: rotate(1deg);
 }
  35% {
    transform: rotate(0deg);
 }
  37% {
    transform: rotate(-1deg);
 }
  39% {
    transform: rotate(-2deg);
 }
  41% {
    transform: rotate(-1deg);
 }
  43% {
    transform: rotate(0deg);
 }
  45% {
    transform: rotate(1deg);
 }
  47% {
    transform: rotate(2deg);
 }
  49% {
    transform: rotate(1deg);
 }
  51% {
    transform: rotate(0deg);
 }
  53% {
    transform: rotate(-1deg);
 }
  55% {
    transform: rotate(-2deg);
 }
  57% {
    transform: rotate(-1deg);
 }
  59% {
    transform: rotate(0deg);
 }
  100% {
    transform: rotate(0deg);
 }
}


</style>
