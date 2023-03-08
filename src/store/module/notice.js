import { axiosApi } from "@/config/axios"

export const state = {
   notices : [],
   noticesLoading : false
}
export const getters = {
   get_notices : (state)=>state.notices,
   get_notices_loading : (state)=>state.noticesLoading,

}
export const mutations = {
   set_notices :(state,data) => state.notices = data,
   set_notices_loading :(state,data) => state.noticesLoading = data

}
export const actions = {
   async fetchNotices({commit}){
       try{
          commit('set_notices_loading',true)
           var response = await axiosApi.get("notices")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_notices',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_notices_loading',false)
       }
   }
}
