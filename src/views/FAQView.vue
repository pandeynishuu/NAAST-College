<template>
  <template-view>
    <div v-if="loading" class="w-100 h-100 d-flex align-items-center justify-content-center">
      <img src="@/assets/loading.gif" class="w-25" alt="">
  </div>
    <div v-else>
    <section class="py-5">
      <div class="container">
        <h1>{{ faqs.question }}</h1>
        <div v-html="faqs.answer"></div>
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
  computed:{
    ...mapGetters({
      faqs:"get_faq",
      loading:"get_faq_loading",
    })
  }
  }
</script>

<style lang="scss" scoped>

</style>

