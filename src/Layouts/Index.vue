<template>
    <div>
        <Header />

        <slot />
    </div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Layout',
    components: {
        Header
    }
}
</script>

<style>

</style>
