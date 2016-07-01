<template>
    <div>

        <ul class="todo-list">
            <todo-item v-for="item in collection" :model="item" :remark="remark"></todo-item>
        </ul>

        <!--<remark > </remark>-->
    </div>
</template>

<script>
    import TodoItem from './TodoItem';
    import remark from './container/remark.vue';
    export default{
        props: ['collection'],
        components: {
            'todo-item': TodoItem,
            remark
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
