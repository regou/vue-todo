<template>
    <div class="middle-content">
        <div id="app" class="container" v-if="true">
            <div class="todo-wrapper">
                <todo-header></todo-header>
                <div class="todo-content">
                    <todo-report></todo-report>
                    <todo-list :collection="listState.items"></todo-list>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import Hello from '../Hello'
    import Header from '../Header/Header'
    import Report from '../Report'
    import TodoList from '../TodoList'


    import store from '../../store/index'

    export default {
        vuex: {
            getters: {
                listState: function(state){
                    return state
                }
            }
        },
        store:store,

        ready: function () {

            new Vidage('#VidageVideo');

        },
        created: function () {
            window.addEventListener('click', this.hideAction);
            console.log(this.listState,2222)
        },
        beforeDestory: function () {
            window.removeEventListener('click', this.hideAction);
        },
        methods: {
            /* Hide task action */
            hideAction: function () {
                $('.action-popup').removeClass('show');
            }
        },
        components: {
            'todo-header': Header,
            'todo-report': Report,
            'todo-list': TodoList
        }
    }
</script>
