<template>
    <div>this is foo page</div>
    <p>{{store.state.test}}</p>
</template>
<script setup>
    import {
        useStore
    } from 'vuex'
    const store = useStore()
</script>
<style>
</style>