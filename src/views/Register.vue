<template>
    <div id="auth">
        <form class="form-signin" @submit.prevent="submit">
            <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please Sign Up</h1>
            <label for="inputFname" class="sr-only">First Name</label>
            <input type="text" id="inputFname" class="form-control" v-model="form.first_name" placeholder="First Name" required autofocus>
            <label for="inputLname" class="sr-only">Last Name</label>
            <input type="text" id="inputLname" class="form-control" v-model="form.last_name" placeholder="Last Name" required autofocus>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" v-model="form.email" placeholder="Email address" required autofocus>
            <label for="inputPhone" class="sr-only">Phone</label>
            <input type="text" id="inputPhone" class="form-control" v-model="form.phone" placeholder="Phone" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" v-model="form.password" placeholder="Password" required>
            <label for="inputPassword2" class="sr-only">Confirm Password</label>
            <input type="password" id="inputPassword2" class="form-control" v-model="form.password_confirmation" placeholder="Confirm Password" required>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Join Now</button>
            <p class="my-3 text-muted">Already a member <router-link to="/login">Log In</router-link></p>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>

        </form>
    </div>
</template>

<script>
import { o_O } from '@/Helpers/index'
import { Authregister } from '../Services/AuthService'

export default {
    name: 'Register',
    data(){
        return{
            form:{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
                type: 'speakers'
            },
            errors: null
        }
    },

    methods:{
        async submit(){
            let [err, data] = await o_O(
                Authregister(this.form)
            );

            if(data && data.status === 200){
                await this.$store.dispatch('updateUser', data.data);
                this.$router.push({ name: 'Home'})
                this.errors = null
            }
            else{
                this.errors = err.response.data.errors;
            }
        }
    }
}
</script>

<style>
    @import url('../assets/scss/auth.scss');

</style>
