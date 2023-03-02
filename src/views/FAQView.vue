<template>
    <template-view>
      <section class="py-5">
        <div class="container">
          <div v-for="(faq, index) in faqs" :key="index">
            <h4>{{ faq.question }}</h4>
            <div v-html="faq.answer"></div>
          </div>
        </div>
      </section>
    </template-view>
  </template>
  
  <script>
  // @ is an alias to /src
  import TemplateView from '@/views/TemplateView'
import { mapGetters } from 'vuex';
  
  export default {
    name: 'FQAView',
    components: {
      TemplateView
    },
    computed:{
      ...mapGetters({
        faqs:"get_faq",
      })
    }
  }
  </script>