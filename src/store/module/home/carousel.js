import { axiosApi } from "@/config/axios"

export const state = {
   carousel : [],
   carouselLoading : false
}
export const getters = {
   get_carousel : (state)=>state.carousel,
   get_carousel_loading : (state)=>state.carouselLoading,

}
export const mutations = {
   set_carousel :(state,data) => state.carousel = data,
   set_carousel_loading :(state,data) => state.carouselLoading = data

}
export const actions = {
   async fetchCarousel({commit}){
       try{
          commit('set_carousel_loading',true)
           var response = await axiosApi.get("slides")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_carousel',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_carousel_loading',false)
       }
   }
}
