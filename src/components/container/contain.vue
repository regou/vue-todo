<template>
    <div class="main-all full">
        <left class="flex-stable" v-if="true"></left>
        <middle class="flex-float" v-if="true"></middle>
        <right class="flex-stable" v-if=""></right>
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
   .main-all{
       z-index: 1;
   }
</style>
