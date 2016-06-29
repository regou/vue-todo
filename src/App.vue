<template>
    <div>
      <div id="app" class="container" v-if="">
        <div class="todo-wrapper">
          <todo-header></todo-header>
          <div class="todo-content">
            <todo-report></todo-report>
            <todo-list :collection="listState.items"></todo-list>
          </div>
        </div>
      </div>
        <div class="index-office intro">
            <office-index></office-index>
        </div>
    </div>
</template>

<script>
import Hello from './components/Hello'
import Header from './components/Header/Header'
import Report from './components/Report'
import TodoList from './components/TodoList'

import ListStore from './ListStore'

import officeIndex from './components/officeIndex';




export default {
    data: function () {
        return {
            listState: ListStore.state
        }
    },
    ready: function () {
        ListStore.load();

        new Vidage('#VidageVideo');
    },
    created: function () {
        window.addEventListener('click', this.hideAction);
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
        'todo-list': TodoList,
        'office-index': officeIndex
    }
}

</script>

<style>
html {
  height: 100%;
}

body{
    height:100%;
}
#master-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
