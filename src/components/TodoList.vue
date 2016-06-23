<template>
    <ul class="todo-list">
        <todo-item v-for="item in collection" :model="item"></todo-item>
    </ul>
</template>
<style>

</style>
<script>
    import TodoItem from './TodoItem';
    export default{
        props: ['collection'],
        components: {
            'todo-item': TodoItem
        },
        events: {
            'item-deleted': function(model) {
                this.collection.$remove(model);
            }
        }
    }
</script>
