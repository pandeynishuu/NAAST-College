<template>
    <div class="d-flex flex-column" style="height: 100vh">
        <header>
    <section class="py-2 bg-primary">
        <div class="container d-flex justify-content-between">
          <div>
            <span style="padding-right: 10px"
              ><i class="fa-solid fa-location-dot"></i>{{ school.address }},
            </span>
            <span style="padding-right: 10px"
              ><i class="fa-solid fa-envelope"></i>{{ school.email }}</span
            >
          </div>
          <div style="color: white">
            <span
              ><a href=""
                ><i
                  class="fa-brands fa-facebook"
                  style="color: white; padding-right: 10px"
                ></i></a
            ></span>
            <span
              ><a href=""
                ><i
                  class="fa-brands fa-youtube"
                  style="color: white; white; padding-right:10px;"
                ></i></a
            ></span>
          </div>
        </div>
      </section>
  
      <!-- middle navbar -->
      <section class="py-2">
        <div class="container">
          <div class="row">
            <div class="col-md-1">
              <a href="">
                <img :src="school.logo" width="120" class="img-fluid"/>
              </a>
            </div>
            <div class="col-md-11">
              <h1>{{ school.name }}</h1>
              <span>Slogan goes here</span>
            </div>
          </div>
        </div>
      </section>
  
          <navbar-component/>
        </header>
    
        <body class="mb-auto">
          <slot></slot>
        </body>
    
        <footer>
          <footer-component/>
        </footer>
      </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import FooterComponent from '@/components/FooterComponent'
import { mapGetters } from 'vuex';
    export default {
        name:"TemplateView",
        components:{
            NavbarComponent,
            FooterComponent
        },
        computed:{
          ...mapGetters({
            school:"get_school",
          })
        }
    }
</script>

<style lang="scss" scoped>

</style>