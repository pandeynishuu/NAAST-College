<template>
    <section class="text-primary">
        <footer class="py-5 bg-lightPrimary">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <address>
                            <h5> Contact us</h5>
                            <div><span>{{ school.name }}</span></div>
                            <div><span><i class="fa-solid fa-earth-americas"></i> {{ school.street }}, {{ school.city }}</span></div>
                            <a :href="`mailto:${school.email}`" class="text-primary">
                                <i class="fas fa-envelope"></i> {{ school.email }}<br>
                            </a>
                             <a :href="`tel:${school.contactOne}`" class="text-primary">
                                <i class="fas fa-phone-square"></i> {{ school.contactOne }} <span v-if="school.contactTwo != null"> / {{school.contactTwo }}</span><br>
                            </a>
                            <div class="fw-bold">Office Hours:</div>
                            <a class="text-primary" href="">{{ school.office_hour }}</a>
                            
                        </address>

                    </div>

                    <div class="col-md-4">
                        <h5>Quick Links</h5>
                        <ul class="m-0 p-0 list-unstyled">
                            <li> <a class="text-primary" target="_blank" href="" @click.prevent="$router.push({name:'notices'})">Notice</a>
                            </li>
                            <li> <a class="text-primary" target="_blank" href="" @click.prevent="$router.push({name:'gallery'})">Photo Gallery</a></li>
                            
                        </ul>
                    </div>
                   
                    <div class="col-md-4">
                        <h4>Location</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <div v-html="school.map" class="w-100"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
        <div class="text-white bg-primary p-1 ">
            <center>Powered By: <a href="https://codeit.com.np" class="text-white text-decoration-none">Code IT</a></center>
            <center>Prithvi Path, Dharan, Sunsari | <a class="text-white"  href="tel:+977-25-525163">+977-25-525163</a></center>
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