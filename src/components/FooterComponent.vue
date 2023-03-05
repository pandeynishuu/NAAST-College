<template>
    <section class="text-white">
        <div  class="footer py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <address>
                            <h5> Contact us</h5>
                            <span>{{ school.address }}</span> <br>
                            <a href="" style="color:white">
                                <i class="fas fa-envelope"></i> {{ school.email }}<br>
                            </a>
                            
                        </address>

                    </div>

                    <div class="col-md-3 mb-4">
                        <h5>Related</h5>
                        <ul class="m-0 p-0 list-unstyled">
                            <li> <a class="text-white" target="_blank" href="">UGC</a>
                            </li>
                            <li> <a class="text-white" target="_blank" href="">T.U</a></li>
                            <li><a class="text-white" target="_blank" href="">T.U
                                    IOST</a>
                            </li>
                            <li> <a class="text-white" target="_blank" href="">BALKHU
                                    EXAM</a></li>
                        </ul>

                    </div>
                    <div class="col-md-3 mb-4">
                        <a href="#" class="text-decoration-none">
                            <h5 style="color:white">Information Officer</h5>
                            </a><div><a href="#" class="text-decoration-none">
                                <div class="text-center">
                                    <img src="http://192.168.0.108:8000/images/1677772405.png" class=" " width="80" alt="">
                                </div>
                                </a><div ><a href="#" class="text-decoration-none">
                                    </a><a href="#" style="color:white">
                                        <h6 >Prof.Dr.Dhan Bdr.Karki</h6>
                                    </a>
                                    <a href="#" style="color:white">
                                        <small>9862023343</small>
                                    </a> <br>
                                    <a href="#" style="color:white">
                                        <small>profdhan@gmail.com</small>
                                    </a>
                                </div>
                            </div>
                        
                    </div>
                    <div class="col-md-3 mb-4">
                        <h4>Location</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <div v-html="school.map" class="w-100"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div style="background-color: rgb(74, 84, 141);" class="text-white p-1">
            <center>Powered By: <a href="https://codeit.com.np" class="text-white text-decoration-none">Code IT</a>
            </center>
        </div>
    </section>

            
    
           

</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name:"FooterComponent",
        computed:{
            ...mapGetters({
                school:"get_school",
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>