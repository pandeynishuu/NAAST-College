<template>
  <template-view>
    <section class="py-5">
      <div class="container">
        <h1 style="text-align: center">Download</h1>
        <div
          v-if="loading"
          class="w-100 h-100 d-flex align-items-center justify-content-center"
        >
          <img src="@/assets/loading.gif" class="w-25" alt="" />
        </div>
        <div v-else>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col" class="w-100 border border-1">Subject</th>
                <th scope="col" class="border border-1">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(download,index) in downloads" :key="index">
                <td class="border border-1">{{ download.title }}</td>
                <td class="border border-1">
                  <a :href="download.file" :download="download.file" v-if="download.file != null" target="_blank" class="badge bg-primary">Download</a>
                  <a :href="download.googleDrive" :download="download.googleDrive" v-if="download.googleDrive != null" target="_blank" class="badge bg-primary">Download</a>
                
                </td>
                
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template-view>
</template>
  
  <script>
// @ is an alias to /src
import TemplateView from "@/views/TemplateView";
import { mapGetters } from "vuex";

export default {
  name: "DownloadsView",
  components: {
    TemplateView,
  },
  computed: {
    ...mapGetters({
      downloads: "get_downloads",
    }),
  },
};
</script>