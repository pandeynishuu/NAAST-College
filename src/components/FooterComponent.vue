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
                            <h5 class="text-2 text-center" style="color:white">Information Officer</h5>
                            </a><div class="d-block align-items-center bg-2 p-1 rounded text-center"><a href="#" class="text-decoration-none">
                                <div class="text-center">
                                    <img src="http://192.168.0.108:8000/images/1677772405.png" class=" " width="80" alt="">
                                </div>
                                </a><div class="details ms-1"><a href="#" class="text-decoration-none">
                                    </a><a href="#" style="color:white">
                                        <h6 class="mb-0">Prof.Dr.Dhan Bdr.Karki</h6>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14242.648482944307!2d87.2862987!3d26.8188851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b8526c7c4c7bc1c!2sCode%20IT!5e0!3m2!1sen!2snp!4v1641223938902!5m2!1sen!2snp" class="w-100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div style="background-color: rgb(74, 84, 141);" class="text-white p-1">
            <center>Powered By: <a href="https://codeitapps.com" class="text-white text-decoration-none">Code IT</a>
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