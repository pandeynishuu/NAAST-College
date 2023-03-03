import { axiosApi } from "@/config/axios"

export const state = {
   gallery : [],
   galleryLoading : false
}
export const getters = {
   get_gallery : (state)=>state.gallery,
   get_gallery_loading : (state)=>state.galleryLoading,

}
export const mutations = {
   set_gallery :(state,data) => state.gallery = data,
   set_gallery_loading :(state,data) => state.galleryLoading = data

}
export const actions = {
   async fetchGallery({commit}){
       try{
          commit('set_gallery_loading',true)
           var response = await axiosApi.get("")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_gallery',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_gallery_loading',false)
       }
   }
}
