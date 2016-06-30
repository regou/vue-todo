<template>
    <div class="main-all">
        <left v-if="true"></left>
        <middle v-if="true"></middle>
        <right v-if=""></right>
    </div>
</template>

<script>
    import left from './left_list.vue'
    import middle from './middle_content.vue'
    import right from './right_info.vue'
    export default{
        props: [],
        components: {
            left,
            middle,
            right
        }
    }
</script>

<style>

</style>
