import { axiosApi } from "@/config/axios"

export const state = {
   messages : [],
   messagesLoading : false
}
export const getters = {
   get_messages : (state)=>state.messages,
   get_messages_loading : (state)=>state.messagesLoading,

}
export const mutations = {
   set_messages :(state,data) => state.messages = data,
   set_messages_loading :(state,data) => state.messagesLoading = data

}
export const actions = {
   async fetchMessages({commit}){
       try{
          commit('set_messages_loading',true)
           var response = await axiosApi.get("messages")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_messages',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_messages_loading',false)
       }
   }
}
