<template>
  <template-view>
   <section class="py-5">
    <div class="container">
      <div v-if="loading" class="w-100 h-100 d-flex align-items-center justify-content-center">
          <img src="@/assets/loading.gif" class="w-25" alt="">
      </div>
      <div v-else>
        <!-- {{ post }} -->
        <h1>{{ post.title }}</h1>
        <img :src="post.image" alt="" class="float-md-end w-50 img-fluid rounded m-4">      
        <div v-html="post.content"></div>
      </div>
    </div>
   </section>
  </template-view>
</template>

<script>
import TemplateView from '@/views/TemplateView'
import { mapGetters } from 'vuex';
  export default {
    components:{TemplateView},
    props:['slug'],
    computed:{
      ...mapGetters({
        menus:'get_menu'
      }),

      posts(){
        return this.menus.map((m) => m.posts.find((p) => p.slug == this.slug))
      },

      post(){
        return this.posts.find((p) => p != null)
      }
    },
  
    
  
  }
</script>

<style lang="scss" scoped>

</style>