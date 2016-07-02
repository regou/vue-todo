<template>
    <div class="main-all">
        <top-translate></top-translate>
        <left v-if=""></left>
        <middle></middle>
        <right v-if=""></right>
    </div>
</template>

<script>
    import left from './left_list.vue';
    import middle from './middle_content.vue';
    import right from './right_info.vue';
    import topTranslate from './topTranslate';
    export default{
        props: [],
        components: {
            left,
            middle,
            right,
            topTranslate
        }
    }
</script>

<style>

</style>
