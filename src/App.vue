<template>
  <div id="app">
    <vue-facebook-page data-href="https://www.facebook.com/profile.php?id=100057522097898" link-text="Your Page Name" />

    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods:{
    ...mapActions([
      'fetchMenu',
      'fetchPrincipal',
      'fetchCarousel',
      'fetchCoordinator',
      'fetchPost',
      'fetchSchool',
      'fetchAcademic',
      'fetchFaq'
    ])
  },

  created() {
    this.fetchMenu();
    this.fetchPrincipal();
    this.fetchCarousel();
    this.fetchCoordinator();
    this.fetchPost();
    this.fetchSchool();
    this.fetchAcademic();
    this.fetchFaq();
  }
}
</script>

<style>
:root {
  --kPrimary:#457B9D ;
  --kHeading : #000000;
  --kParagraph : #666666;

}
h1,h2,h3,h4,h5,h6{
  color: var(--kHeading)
}

h1{
  font-size: 2.25rem;
}

h2{
  font-size: 2rem
}

p{
  font-size: 1rem;
}

.bg-primary{
  background-color: var(--kPrimary) !important;
  color: #fff
}

.text-primary{
  color: var(--kPrimary) !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  
}

.frame {
  width: 90%;
  text-align: center;
}
button {
  margin: 20px;
}
.custom-btn {

  color: #fff;
  border-radius: 5px;
  
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

/* 5 */
.btn-5 {
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  background: var(--kPrimary);
background: linear-gradient(0deg, rgb(88, 95, 140) 0%, rgb(101, 125, 190) 100%);
}
.btn-5:hover {
  color: black;
  background: transparent;
   box-shadow:none;
}
.btn-5:before,
.btn-5:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: var(--kPrimary);
  box-shadow:
   -1px -1px 5px 0px #fff,
   7px 7px 20px 0px #0003,
   4px 4px 5px 0px #0002;
  transition:400ms ease all;
}
.btn-5:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.btn-5:hover:before,
.btn-5:hover:after{
  width:100%;
  transition:800ms ease all;
}

hr{
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: .25;
}
hr:not([size]) {
  height: 1px;
  width: 50%!important;
  margin-right: auto!important;
  margin-left: auto!important;
}
.new{
  border: 1px solid red;
  text-decoration: none;
  background-color: rgb(241, 47, 47);
  color: white;
  border-radius: 3px;
  padding: 1px;
}
</style>
