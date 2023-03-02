<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
             
              <li class="nav-item dropdown" v-for="(menu,index) in menus" :key="index">
                <a class="nav-link"  href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-if="menu.posts.length == 0">
                    {{ menu.name }}
                </a>
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-else>
                    {{ menu.name }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" v-if="menu.posts.length>0">
                  <li v-for="(post,i) in menu.posts" :key="i"><a class="dropdown-item" href="#" @click.prevent="$router.push({name:'post',params:{slug:post.slug}}).then(() => {$router.go()})">{{ post.title }}</a></li>
                 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavbarComponent",
  computed: {
    ...mapGetters({
      menus: "get_menu",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
