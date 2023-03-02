import { axiosApi } from "@/config/axios"

export const state = {
   principal : [],
   principalLoading : false
}
export const getters = {
   get_principal : (state)=>state.principal,
   get_principal_loading : (state)=>state.principalLoading,

}
export const mutations = {
   set_principal :(state,data) => state.principal = data,
   set_principal_loading :(state,data) => state.principalLoading = data

}
export const actions = {
   async fetchPrincipal({commit}){
       try{
          commit('set_principal_loading',true)
           var response = await axiosApi.get("message-from-principal")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_principal',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_principal_loading',false)
       }
   }
}
