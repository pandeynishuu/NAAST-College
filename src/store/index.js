import Vue from 'vue'
import Vuex from 'vuex'
import * as carousel from './module/home/carousel'
import * as menu from './module/menu'
import * as principal from './module/home/principal'
import * as coordinator from './module/home/coordinator'
import * as post from './module/post'
import * as school from './module/school'
import * as academic from './module/home/academic'
import * as administrative from './module/home/administrative'
import * as faq from './module/faq'
import * as gallery from './module/gallery'
import * as downloads from './module/downloads'
import * as notice from './module/notice'
import * as pedagogy from './module/pedagogy'
import * as alumini from './module/alumini'
import * as batch from './module/batch'
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
    administrative,
    faq,
    gallery,
    downloads,
    notice,
    pedagogy,
    alumini,
    batch
  }
})
