<template>
  <template-view>
    <modal name="notice" v-if="latestNotice" 
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
  </modal>
    <div
      v-if="loading"
      class="w-100 h-100 d-flex align-items-center justify-content-center"
    >
      <img src="@/assets/loading.gif" class="w-25" alt="" />
    </div>

    <div v-else>
      <section class="bg-primary py-1">
          <div class="container d-flex justify-content-between">
            <div class="me-2">Notice:</div>
            <div class="w-100"><marquee behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()" onload="this.start()" direction="left">
              <span v-for="(notice,index) in notices" :key="index" class="me-2">
               <a class="text-white" href="" @click.prevent="$router.push({name:'notices'})"> <span v-for="(n,i) in notice.notices" :key="i">{{ n.subject }}</span></a>
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

      <!-- Message From Principal -->
      <section v-if="principal" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img
                :src="principal.image"
                class="img-fluid rounded-4"
                :alt="principal.image"
              />
            </div>
            <div class="col-md-8">
              <h1>{{ principal.title }}</h1>
              <div v-html="principal.content"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Facilities -->
      <section class="py-5 bg-light text-center">
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
            <div>
              <el-card shadow="never">
                  <h5 class="fw-bold">Bus Facilities</h5>
                  <p>Holy Garden Academy offers convenient bus facilities for students' transportation needs.</p>
                </el-card>
            </div>
            <div>
              <el-card shadow="never">
                <h5 class="fw-bold">Coaching & Remedial Class</h5>
                <p>We provide remedial class for the students who are in need of extra guidance and attention.</p>
              </el-card>
            </div>
            <div>
              <el-card shadow="never">
                <h5 class="fw-bold">Day Boarder</h5>
                <p>Holy Garden Academy accommodates day boarders with comfortable facilities.</p>
              </el-card>
            </div>
            <div>
              <el-card shadow="never">
                <h5 class="fw-bold">ICT Lab</h5>
                <p>Holy Garden Academy's state-of-the-art ICT lab provides students with a technology-rich learning environment.</p>
              </el-card>
            </div>
            <div>
              <el-card shadow="never">
                <h5 class="fw-bold">Well Equipped Library</h5>
                <p>Holy Garden Academy's well-equipped library offers vast academic resources.</p>
              </el-card>
            </div>
          </carousel>
        </div>
      </section>

      <!-- Mission and Vision -->
      <section class="py-5">
        <div class="container">
          <div class="row g-2">
            <div class="col-md-3">
              <el-card shadow="hover">
                <h5>Our Mission</h5>
              <p>Our school empowers all our students to dream big, believe in their abilities to achieve the dreams through their academic excellence along with their emotional, social and physical well-being.</p>
              </el-card>
            </div>

            <div class="col-md-3">
              <el-card shadow="hover">
                <h5>Our Vision</h5>
              <p>We understand ever individual child is unique with their own god gifted potentials. We aim to hone their talent to excel in life and make a rich for themselves through love, care and inspiration.</p>
              </el-card>
            </div>

            <div class="col-md-6">
              <el-card shadow="hover">
                <h5>Teaching-Learning Pedagogies</h5>
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
          <h1>Our Feature Plans</h1>
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
    }),

    // Filter Principal Message
    postsFilter() {
      return this.menus.map((m) =>
        m.posts.find((p) => p.slug == "message-from-principal")
      );
    },

    principal() {
      return this.postsFilter.find((p) => p != null);
    },
  },


    mounted(){
        this.$modal.show('notice')
    },
  
};
</script>

<style >
@media screen and (min-width: 1024px) {
  .vm--modal{
    width: 30% !important;
    height: 100vh !Important;
    top: 10% !Important;
  }
}
@media screen and (max-width:767px) {
  .vm--modal{
    width: 100% !important;
  }
  
}
@media screen and (min-width: 767px) and (max-width: 1023px){
  .vm--modal{
  width: 100% !important;
  top: 20% !Important;
  }
}
.vm--modal{
  left: 0 !important;

  vertical-align: middle;
  margin: 0 auto;
  height: auto !important;
}
.vm--modal img{
 width: 90%;
  height:auto;
}




</style>
