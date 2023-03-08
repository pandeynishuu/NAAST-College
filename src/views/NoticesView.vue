<template>
  <template-view>
    <section class="py-5">
      <div class="container">
        <div
          v-if="loading"
          class="w-100 h-100 d-flex align-items-center justify-content-center"
        >
          <img src="@/assets/loading.gif" class="w-25" alt="" />
        </div>
        <section v-else >
          <div class="container" v-for="(notice,index) in notices" :key="index">
            <h1 style="text-align: center">{{ notice.title }}</h1>
            <table class="table table-striped">
              <thead>
                <tr class="bg-primary">
                  <th scope="col" class="border border-1">Published on</th>
                  <th scope="col" class="border border-1 w-50">Subject</th>
                  <th scope="col" class="border border-1">Notice Category</th>
                  <th scope="col" class="border border-1">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(n, index) in notice.notices" :key="index">
                  <td class="border border-1" scope="row">
                    {{ n.createdAt }}
                  </td>
                  <td class="border border-1">
                    {{ n.subject }}
                    <span class="badge bg-danger badge-sm">new</span>
                  </td>
                  <td class="border border-1">{{ n.noticeCategory }}</td>
                  <td class="border border-1">
                    <a
                      :href="n.file"
                      target="_page"
                      class="badge bg-primary"
                      >Preview</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  </template-view>
</template>
  
  <script>
// @ is an alias to /src
import TemplateView from "@/views/TemplateView";
import { mapGetters } from "vuex";

export default {
  name: "GalleryView",
  components: {
    TemplateView,
  },
  computed: {
    ...mapGetters({
      notices: "get_notices",
    loading: 'get_notices_loading'
    }),
  },
};
</script>