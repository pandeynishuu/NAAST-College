import { axiosApi } from "@/config/axios"

export const state = {
   menu : [],
   menuLoading : false
}
export const getters = {
   get_menu : (state)=>state.menu,
   get_menu_loading : (state)=>state.menuLoading,

}
export const mutations = {
   set_menu :(state,data) => state.menu = data,
   set_menu_loading :(state,data) => state.menuLoading = data

}
export const actions = {
   async fetchMenu({commit}){
       try{
          commit('set_menu_loading',true)
           var response = await axiosApi.get("menus")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_menu',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }finally{
        commit('set_menu_loading',false)
       }
   }
}
