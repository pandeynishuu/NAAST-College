<template>
  <template-view>
    <section class="py-5">
      <div class="container">
        <div
          v-if="loading"
          class="w-100 h-100 d-flex align-items-center justify-content-center"
        >
          <img src="@/assets/loading.gif" class="w-25" alt="" />
        </div>
        <div v-else>
            <div class="row">
              <div class="col-md-4" v-for="(gallery,index) in galleries" :key="index">
                <el-card shadow="hover">
                    <a :href="gallery.url" target="page"><img :src="gallery.featuredImage" class="img-fluid" alt="" ></a>
                    <div class="my-2 text-center">
                      {{ gallery.title }}
                    </div>
                </el-card>
              </div>
            </div>
        </div>
      </div>
    </section>
  </template-view>
</template>
  
  <script>
// @ is an alias to /src
import TemplateView from "@/views/TemplateView";
import { mapGetters } from 'vuex';

export default {
  name: "GalleryView",
  components: {
    TemplateView,
  },
  computed:{
    ...mapGetters({
      galleries : 'get_gallery',
      loading : 'get_gallery_loadingß'
    })
  }
};
</script>