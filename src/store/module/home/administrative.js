import { axiosApi } from "@/config/axios"

export const state = {
   administrative : [],
   administrativeLoading : false
}
export const getters = {
   get_administrative : (state)=>state.administrative,
   get_administrative_loading : (state)=>state.administrativeLoading,

}
export const mutations = {
   set_administrative :(state,data) => state.administrative = data,
   set_administrative_loading :(state,data) => state.administrativeLoading = data

}
export const actions = {
   async fetchAdministrative({commit}){
       try{
          commit('set_administrative_loading',true)
           var response = await axiosApi.get("member-nonacademic")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_administrative',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_administrative_loading',false)
       }
   }
}
