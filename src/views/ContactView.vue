<template>
<template-view>
    <section class="py-5">
        <div class="container">
            <h1>Contact Us</h1>
            <p>Science and Technology Education Service Co. Pvt. Ltd. is the brainchild of entrepreneurs, academicians, educationists, social activists, and philanthropists of Dharan. The company is
                privileged to have Prof. Jagat Bahadur KC (former Vice-Chancellor of Purwanchal University) as the founder president of the company.</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card border-0 py-5">
                        <div class="card-body">
                            <h1> Get in Touch <i class="fa-solid fa-address-card"></i></h1>
                                <ul class="llist-group">
                                    <li class="list-group-item"><i class="fa-solid fa-school-circle-check"></i> {{ school.name }}</li>
                                    <hr>
                                    <li class="list-group-item"><i class="fa-solid fa-earth-americas"></i> {{ school.address }}</li>
                                     <hr>
                                    <li class="list-group-item"><i class="fa-solid fa-square-phone"></i> {{ school.contactOne }} <span v-if="school.contactTwo"> / {{school.contactTwo}}</span></li>
                                    <hr>
                                    <li class="list-group-item"><i class="fa-solid fa-envelope"></i> {{ school.email }}</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="contact">
                        <div class="container">
                            <div class="row">
                                <h4>Send Message</h4>
                                <form role="form" id="feedbackForm" data-toggle="validator" data-disable="false">
                                    <div class="form-group">
                                        <label class="control-label" for="name">Full Name <span>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required />
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">Please enter your name.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="email">Email <span>*</span></label>
                                        <div class="input-group">
                                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required />
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">Please enter a valid e-mail address.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="name">subject<span>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="subject" required />
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">subject</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="message">Message <span>*</span></label>
                                        <div class="input-group">
                                            <textarea rows="5" cols="30" class="form-control" id="message" name="message" placeholder="Enter your message" required></textarea>
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">Please enter a message.</span>
                                    </div>
                                    <button type="submit" id="feedbackSubmit" class="btn btn-primary btn-lg" data-loading-text="Sending..." style="display: block; margin-top: 10px;">Submit</button>
                                </form>
                            </div>
                            <!-- end row contact -->
                        </div>
                        <!-- end container footer section -->
                    </div>
                </div>
            </div>
        </div>

    </section>
</template-view>
</template>

<script>
// @ is an alias to /src
import TemplateView from '@/views/TemplateView'
import { mapGetters } from 'vuex';

export default {
    name: 'ContactView',
    components: {
        TemplateView
    },
    computed:{
      ...mapGetters({
        school:"get_school"
      })
    }
}
</script>

<style scoped>
body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: #fff;
    margin: 0;
    padding: 0;
}

h4 {
    color: var(--kPrimary);
    font-size: 35px;
    font-family: 'Montserrat', sans-serif;

}

h4:after {
    content: '';
    width: 50px;
    height: 3px;
    background: var(--kPrimary);
    display: block;
    margin: 15px auto;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

h4:hover:after {
    width: 100px;
}

h3,
h4,
h5 {
    font-family: 'Montserrat', sans-serif;
}

/*/ start contact /*/

footer {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
}

#contact h4 {
    margin-top: 22px;
    padding-bottom: 10px;
    text-align: center;
}

footer p {
    margin-top: 50px;
}

.social,
footer a {
    font-size: 30px;
    color: #24242a;
    margin: 10px;
}

footer a:hover,
footer a:after,
footer a:visited footer a:focus {
    color: var(--kPrimary);
}

.copyright {
    margin-top: 35px;
    font-size: 14px;
}

/*/ end contact /*/

/*/ form /*/

.form-group {
    margin-bottom: 8px;
}

.form-control:focus {
    border-color: var(--kPrimary);
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

#feedbackForm {
    font-size: 14px;
    text-align: left;
    color: var(--kPrimary);
}

#feedbackForm span {
    color: #fff;
}

.input-group-addon {
    padding: 6px 17px;
    background-color: var(--kPrimary);
    border: var(--kPrimary);
}

#feedbackSubmit {
    background-color: var(--kPrimary);
    font-size: 16px;
    margin: 0 auto;
    border-color: var(--kPrimary);
    font-family: 'Montserrat', sans-serif;
}

#feedbackSubmit:hover {
    background-color: var(--kPrimary);
    color: #fff;
    border-color: var(--kPrimary);
}
</style>
