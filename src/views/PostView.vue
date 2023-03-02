<template>
  <template-view>
   <section class="py-5">
    <div class="container">
      <div v-if="loading">
        loading...
      </div>
      <div v-else>
        <!-- <h1>{{ post.title }}</h1> -->
        <img :src="post.image" alt="" class="float-md-end w-50 rounded img-fluid">
        <div v-html="post.content"></div>
      </div>
    </div>
   </section>
  </template-view>
</template>

<script>
import TemplateView from '@/views/TemplateView'
import { mapGetters,mapActions } from 'vuex';
  export default {
    components:{TemplateView},
    props:['slug'],
    computed:{
      ...mapGetters({
        post:'get_post',
        loading:'get_post_loading',
      })
    },
    methods:{
      ...mapActions([
        'fetchPost'
      ])
    },

  mounted(){
    this.fetchPost(this.slug)
  }
  }
</script>

<style lang="scss" scoped>

</style>