import { axiosApi } from "@/config/axios"

export const state = {
   downloads : {},
   downloadsLoading : false
}
export const getters = {
   get_downloads : (state)=>state.downloads,
   get_downloads_loading : (state)=>state.downloadsLoading,

}
export const mutations = {
   set_downloads :(state,data) => state.downloads = data,
   set_downloads_loading :(state,data) => state.downloadsLoading = data

}
export const actions = {
   async fetchDownloads({commit}){
       try{
          commit('set_downloads_loading',true)
           var response = await axiosApi.get("download")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_downloads',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_downloads_loading',false)
       }
   }
}
