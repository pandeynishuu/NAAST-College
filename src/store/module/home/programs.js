import { axiosApi } from "@/config/axios"

export const state = {
   programs : [],
   programLoading : false
}
export const getters = {
   get_programs : (state)=>state.programs,
   get_program_loading : (state)=>state.programLoading,

}
export const mutations = {
   set_programs:(state,data) => state.programs = data,
   set_program_loading :(state,data) => state.programLoading = data

}
export const actions = {
   async fetchPrograms({commit}){
       try{
          commit('set_program_loading',true)
           var response = await axiosApi.get("program")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_programs',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_program_loading',false)
       }
   }
}
