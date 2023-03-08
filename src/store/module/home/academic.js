import { axiosApi } from "@/config/axios"

export const state = {
   members : [],
   membersLoading : false
}
export const getters = {
   get_members : (state)=>state.members,
   get_members_loading : (state)=>state.membersLoading,

}
export const mutations = {
   set_members :(state,data) => state.members = data,
   set_members_loading :(state,data) => state.membersLoading = data

}
export const actions = {
   async fetchMembers({commit}){
       try{
          commit('set_members_loading',true)
           var response = await axiosApi.get("members")
           console.warn(response.data.data)
       if(response.status == 200){
          
           commit('set_members',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_members_loading',false)
       }
   }
}
