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
          <h1>{{ pedagogy.title }}</h1>
          <img :src="pedagogy.image" class="float-md-end w-50 " alt="">
          <div v-html="pedagogy.content"></div>
        </div>
      </div>
    </section>
  </template-view>
</template>
  
  <script>
import TemplateView from "@/views/TemplateView";
import { mapGetters } from 'vuex';
export default {
  components: {
    TemplateView,
  },
  computed:{
    ...mapGetters({
      pedagogy : 'get_pedagogy',
      loading : 'get_pedag_loading'
    })
  }
};
</script>