import { axiosApi } from "@/config/axios"

export const state = {
   facilities : [],
   facilitiesLoading : false
}
export const getters = {
   get_facilities : (state)=>state.facilities,
   get_facilities_loading : (state)=>state.facilitiesLoading,

}
export const mutations = {
   set_facilities :(state,data) => state.facilities = data,
   set_facilities_loading :(state,data) => state.facilitiesLoading = data

}
export const actions = {
   async fetchFacilities({commit}){
       try{
          commit('set_facilities_loading',true)
           var response = await axiosApi.get("facilities")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_facilities',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_facilities_loading',false)
       }
   }
}
