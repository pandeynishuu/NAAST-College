import { axiosApi } from "@/config/axios"

export const state = {
   program : [],
   programLoading : false
}
export const getters = {
   get_program : (state)=>state.program,
   get_program_loading : (state)=>state.programLoading,

}
export const mutations = {
   set_program :(state,data) => state.program = data,
   set_program_loading :(state,data) => state.programLoading = data

}
export const actions = {
   async fetchProgram({commit}){
       try{
          commit('set_program_loading',true)
           var response = await axiosApi.get("programs")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_program',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_program_loading',false)
       }
   }
}
