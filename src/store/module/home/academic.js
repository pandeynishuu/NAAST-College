import { axiosApi } from "@/config/axios"

export const state = {
   academic : [],
   academicLoading : false
}
export const getters = {
   get_academic : (state)=>state.academic,
   get_academic_loading : (state)=>state.academicLoading,

}
export const mutations = {
   set_academic :(state,data) => state.academic = data,
   set_academic_loading :(state,data) => state.academicLoading = data

}
export const actions = {
   async fetchAcademic({commit}){
       try{
          commit('set_academic_loading',true)
           var response = await axiosApi.get("member-academic")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_academic',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_academic_loading',false)
       }
   }
}
