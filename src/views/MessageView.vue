<template>
  <template-view>
    <div v-if="loading" class="w-100 h-100 d-flex align-items-center justify-content-center">
      <img src="@/assets/loading.gif" class="w-25" alt="">
  </div>
    <div v-else>
    <section class="py-5">
      <div class="container">
        <img :src="message.photo" alt="">
        <h1>{{ message.name }}</h1>
        <div>{{ message.designation }}</div>
        <div v-html="message.message"></div>
      </div>
    </section>
    </div>
  </template-view>

</template>

<script>
import TemplateView from '@/views/TemplateView'
import { mapGetters } from 'vuex';
  export default {
    components: {
    TemplateView
  },
  props:['slug'],
  computed:{
    ...mapGetters({
     loading : 'get_messages_loading',
      messages : 'get_messages'
    }),

    message(){
        return this.messages.find((m) => m.slug == this.slug)
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>

