import { axiosApi } from "@/config/axios"

export const state = {
   batch : [],
   batchLoading : false
}
export const getters = {
   get_batch : (state)=>state.batch,
   get_batch_loading : (state)=>state.batchLoading,

}
export const mutations = {
   set_batch :(state,data) => state.batch = data,
   set_batch_loading :(state,data) => state.batchLoading = data

}
export const actions = {
   async fetchBatch({commit}){
       try{
          commit('set_batch_loading',true)
           var response = await axiosApi.get("batch")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_batch',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_batch_loading',false)
       }
   }
}
