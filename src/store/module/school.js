import { axiosApi } from "@/config/axios"

export const state = {
   school : {},
   schoolLoading : false
}
export const getters = {
   get_school : (state)=>state.school,
   get_school_loading : (state)=>state.schoolLoading,

}
export const mutations = {
   set_school :(state,data) => state.school = data,
   set_school_loading :(state,data) => state.schoolLoading = data

}
export const actions = {
   async fetchSchool({commit}){
       try{
          commit('set_school_loading',true)
           var response = await axiosApi.get("school-profile")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_school',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_school_loading',false)
       }
   }
}
