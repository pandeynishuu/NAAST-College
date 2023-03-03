import { axiosApi } from "@/config/axios"

export const state = {
   notice : [],
   noticeLoading : false
}
export const getters = {
   get_notice : (state)=>state.notice,
   get_notice_loading : (state)=>state.noticeLoading,

}
export const mutations = {
   set_notice :(state,data) => state.notice = data,
   set_notice_loading :(state,data) => state.noticeLoading = data

}
export const actions = {
   async fetchNotice({commit}){
       try{
          commit('set_notice_loading',true)
           var response = await axiosApi.get("")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_notice',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_notice_loading',false)
       }
   }
}
