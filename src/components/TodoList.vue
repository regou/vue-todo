<template>
    <div>

        <ul class="todo-list">
            <todo-item transition="vtslide" class="animated"
                v-for="item in collection" track-by="id" :model="item" :remark="remark"></todo-item>
        </ul>

        <!--<remark > </remark>-->
    </div>
</template>

<script>
    import TodoItem from './TodoItem';
//    import remark from './container/remark.vue';


    export default{
        props: ['collection'],
        components: {
            'todo-item': TodoItem
        },
        events: {
            'item-deleted': function(model) {
                this.collection.$remove(model);
            }
        },
        ready(){

        },
        methods:{
            remark(){
//                this.$els.dialogRemark
            }
        }
    }
</script>
<style>

</style>
