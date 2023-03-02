<template>
    <div>

        <div class="img-fluid">
            <vue-flux
              :options="fluxOptions"
              :images="fluxImages"
              :transitions="fluxTransitions"
              ref="slider"
            >
              <flux-pagination slot="pagination"></flux-pagination>
            </vue-flux>
          </div>
    </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from "vue-flux";
import { mapGetters } from "vuex";
    export default {
        name:"CarouselComponent",
        components: {
    VueFlux,
    FluxPagination,
  }, 

  data: () => ({
    fluxOptions: {
      autoplay: true,
      height: "600px",
    },
   
    fluxTransitions: {
      transitionBook: Transitions.transitionKenburn,
    },
  }),
  computed:{
    ...mapGetters({
      carousel:"get_carousel"
    }),
    fluxImages(){
      return this.carousel.map((e) => e.logo)
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>