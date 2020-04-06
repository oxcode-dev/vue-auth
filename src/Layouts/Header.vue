<template>
    <header>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container d-flex justify-content-between">
                <router-link to="#" class="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <strong>Album</strong>
                </router-link>
                <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-white" href="#">Features</a>
                    <a class="p-2 text-white" href="#">Enterprise</a>
                    <a class="p-2 text-white" href="#">Support</a>
                    <router-link class="p-2 text-white" to="/logout">Log Out</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
