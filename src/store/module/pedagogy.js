import { axiosApi } from "@/config/axios"

export const state = {
   pedagogy : {},
   pedagogyLoading : false
}
export const getters = {
   get_pedagogy : (state)=>state.pedagogy,
   get_pedagogy_loading : (state)=>state.pedagogyLoading,

}
export const mutations = {
   set_pedagogy :(state,data) => state.pedagogy = data,
   set_pedagogy_loading :(state,data) => state.pedagogyLoading = data

}
export const actions = {
   async fetchPedagogy({commit}){
       try{
          commit('set_pedagogy_loading',true)
           var response = await axiosApi.get("pedagogy")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_pedagogy',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_pedagogy_loading',false)
       }
   }
}
