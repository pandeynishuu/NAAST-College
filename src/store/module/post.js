import { axiosApi } from "@/config/axios";

export const state = {
  post: {},
  postLoading: false,
};
export const getters = {
  get_post: (state) => state.post,
  get_post_loading: (state) => state.postLoading,
};
export const mutations = {
  set_post: (state, data) => state.post = data,
  set_post_loading: (state, data) => (state.postLoading = data),
};
export const actions = {
  async fetchPost({ commit }, slug) {
    try {
      console.warn("demo");
      console.warn(slug);
      commit("set_post_loading", true);
      var response = await axiosApi.get(`post/${slug}`);
      console.warn(response.data.data)
      console.warn(response.data.data);
      if (response.status == 200) {
        commit("set_post", response.data.data);
      }
    } catch (e) {
      console.warn(e);
    } finally {
      commit("set_post_loading", false);
    }
  },
};
