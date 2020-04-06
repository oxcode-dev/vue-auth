<template>
    <div id="auth">
        <form class="form-signin" @submit.prevent="submit">
            <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

            <div class="alert alert-danger" v-if="error">
                Invalid Credential.
            </div>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" v-model="form.email" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" v-model="form.password" placeholder="Password" required>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
            <p class="my-3 text-muted">Not a member? <router-link to="/register">Join now</router-link></p>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
    </div>
</template>

<script>
import { o_O } from '@/Helpers/index'
import { Authlogin } from '../Services/AuthService'
export default {
    name: 'Login',
    data(){
        return{
            form:{
                email: null,
                password: null,
            },
            error: null
        }
    },

    methods:{
        async submit(){
            let [err, data] = await o_O(
                Authlogin(this.form)
            );

            if(data && data.status === 200){
                await this.$store.dispatch('updateUser', data.data);
                this.$router.push({ name: 'Home'})
            }
            else{
                this.error = true;
            }
        }
    }
}
</script>

<style>
    @import url('../assets/scss/auth.scss');
</style>
