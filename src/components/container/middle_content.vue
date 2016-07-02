<template>
    <div class="middle-content full center-containner">
        <div id="app" class="container" v-if="true">
            <div class="todo-wrapper">
                <todo-header></todo-header>
                <div class="todo-content">
                    <todo-report></todo-report>
                    <todo-list :collection="list"></todo-list>
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



    export default {
        vuex: {
            getters: {
                mainstate: function(state){
                    return state
                },
                list: function (state) {
                    return state.items.filter(state.filterBy);
                }
            }
        },

        ready: function () {


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
