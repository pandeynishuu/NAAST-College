<template>
    <template-view> 
      <section class="py-5">
        <div class="container">
          <h1 style="text-align:center;">Download Here</h1>
          <div v-if="loading" class="w-100 h-100 d-flex align-items-center justify-content-center">
            <img src="@/assets/loading.gif" class="w-25" alt="">
        </div>
        <div v-else>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Subject</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7th Oct 2022</td>
                <td>Foot Tech</td>
                <td><a href=""><i class="fa-solid fa-download"></i></a></td>
              </tr>
              <tr>
              <td>7th Oct 2022</td>
                <td>Food Tech</td>
                <td><a href=""><i class="fa-solid fa-download"></i></a></td>
              </tr>
              <tr>
                <td>7th Oct 2022</td>
                <td>Food Tech</td>
                <td><a href=""><i class="fa-solid fa-download"></i></a></td>
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
  import TemplateView from '@/views/TemplateView'
  
  export default {
    name: 'DownloadsView',
    components: {
      TemplateView
    }
  }
  </script>