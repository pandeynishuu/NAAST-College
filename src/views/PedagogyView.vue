<template>
    <template-view>
      <section class="py-5">
        <div class="container">
          <div v-if="loading" class="w-100 h-100 d-flex align-items-center justify-content-center">
            <img src="@/assets/loading.gif" class="w-25" alt="">
        </div>
         <div v-else>
          <h1>Pedagogy pages goes here</h1>
          <p>Requires API to continue</p>
         </div>
        </div>
      </section>
    </template-view>
  </template>
  
  <script>
  // @ is an alias to /src
  import TemplateView from '@/views/TemplateView'
  
  export default {
    name: 'PedagogyView',
    components: {
      TemplateView
    }
  }
  </script>