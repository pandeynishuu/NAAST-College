import { axiosApi } from "@/config/axios"

export const state = {
   alumni : {},
   alumniLoading : false
}
export const getters = {
   get_alumni : (state)=>state.alumni,
   get_alumni_loading : (state)=>state.alumniLoading,

}
export const mutations = {
   set_alumni :(state,data) => state.alumni = data,
   set_alumni_loading :(state,data) => state.alumniLoading = data

}
export const actions = {
   async fetchAlumni({commit}){
       try{
          commit('set_alumni_loading',true)
           var response = await axiosApi.get("alumni")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_alumni',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_alumni_loading',false)
       }
   }
}
