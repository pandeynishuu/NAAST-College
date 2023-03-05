<template>
  <template-view>
      <section class="py-5">
        <div class="container">
            <h1>{{ alumni.title }}</h1>
            <img :src="alumni.photo" class="w-50 float-md-end rounded-2" alt="">
            <div v-html="alumni.description"></div>
        </div>
      </section>

      <section class="py-5">
          <div class="container">
            <div class="row my-5" v-for="(batch,index) in batch" :key=index>
            <div class="col-md-12">
              <h3>{{ batch.batch }}</h3>
              <div class="row g-2">
                <div class="col-md-6" v-for="(student,i) in batch.students" :key="i">
                    <el-card shadow="hover">
                      <div class="row">
                        <div class="col-md-4">
                          <img :src="student.image" class="img-fluid rounded img-thumbnail" alt="">
                        </div>
                        <div class="col-md-8">
                          <h5>{{ student.name }}</h5>
                          <div v-html="student.description"></div>
                        </div>
                      </div>
                    </el-card>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
  </template-view>
</template>

<script>
import { mapGetters } from 'vuex'
import TemplateView from './TemplateView.vue'
  export default {
      components:{TemplateView},
      computed:{
        ...mapGetters({
          alumni : 'get_alumni',
          batch : 'get_batch',
        })
      }
  }
</script>

<style scoped>

</style>