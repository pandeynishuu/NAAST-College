import { axiosApi } from "@/config/axios"

export const state = {
   faq : {},
   faqLoading : false
}
export const getters = {
   get_faq : (state)=>state.faq,
   get_faq_loading : (state)=>state.faqLoading,

}
export const mutations = {
   set_faq :(state,data) => state.faq = data,
   set_faq_loading :(state,data) => state.faqLoading = data

}
export const actions = {
   async fetchFAQ({commit}){
       try{
          commit('set_faq_loading',true)
           var response = await axiosApi.get("faq")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_faq',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_faq_loading',false)
       }
   }
}
