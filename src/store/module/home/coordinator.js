import { axiosApi } from "@/config/axios"

export const state = {
   coordinator : [],
   coordinatorLoading : false
}
export const getters = {
   get_coordinator : (state)=>state.coordinator,
   get_coordinator_loading : (state)=>state.coordinatorLoading,

}
export const mutations = {
   set_coordinator :(state,data) => state.coordinator = data,
   set_coordinator_loading :(state,data) => state.coordinatorLoading = data

}
export const actions = {
   async fetchCoordinator({commit}){
       try{
          commit('set_coordinator_loading',true)
           var response = await axiosApi.get("message-from-coordinator")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_coordinator',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_coordinator_loading',false)
       }
   }
}
