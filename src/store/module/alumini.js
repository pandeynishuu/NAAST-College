import { axiosApi } from "@/config/axios"

export const state = {
   alumini : [],
   aluminiLoading : false
}
export const getters = {
   get_alumini : (state)=>state.alumini,
   get_alumini_loading : (state)=>state.aluminiLoading,

}
export const mutations = {
   set_alumini :(state,data) => state.alumini = data,
   set_alumini_loading :(state,data) => state.aluminiLoading = data

}
export const actions = {
   async fetchAlumini({commit}){
       try{
          commit('set_alumini_loading',true)
           var response = await axiosApi.get("")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_alumini',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_alumini_loading',false)
       }
   }
}
