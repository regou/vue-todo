<template>
    <div class="todo-content-title">
        <h2>Your tasks</h2>
        <p class="task-report"><span class="task-remain">{{ taskDone }} done</span> / {{ taskTotal }} task(s)</p>
    </div>
</template>

<script>
    export default{
        vuex: {
            getters: {
                listState: function(state){
                    return state
                }
            }
        },
      computed: {
        taskDone: function() {
          var total = 0;
          if(this.listState.items.length > 0) {
            for(var i = 0; i < this.listState.items.length; i++) {
              if(this.listState.items[i].status == "done") {
                total++;
              }
            }
          }
          return total;
        },
        taskTotal: function() {
          return this.listState.items.length;
        }
      }
    }
</script>
