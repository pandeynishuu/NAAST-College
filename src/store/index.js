import Vue from 'vue'
import Vuex from 'vuex'
import * as carousel from './module/home/carousel'
import * as menu from './module/menu'
import * as principal from './module/home/principal'
import * as coordinator from './module/home/coordinator'
import * as post from './module/post'
import * as school from './module/school'
import * as academic from './module/home/academic'
import * as faq from './module/faq'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    carousel,
    menu,
    principal,
    coordinator,
    post,
    school,
    academic,
    faq
  }
})
