<template>
  <div class="todo-header">
    <div class="overlay"></div>
    <time class="clearfix">
      <span class="day">{{ date }}</span>
      <span class="dayofweek">{{ weekDay }}</span>
      <span class="month">{{ month }}, {{ year }}</span>
    </time>
    <div class="add-circle" @click="add">
      <i class="fa fa-plus"></i>
    </div>
  </div>
</template>

<style>

</style>
<script>

  import moment from 'moment';
  import ListStore from '../ListStore'

    export default{
      data: function() {
        return {
          date: '',
          weekDay: '',
          month: '',
          year: ''
        }
      },
      ready: function() {
        var d = new Date();
        this.date = d.getDate();
        var mDate = moment(d);
        this.weekDay = mDate.weekday();
        this.month = mDate.month();
        this.year = mDate.year();
      },
      methods: {
        add: function(event) {
          ListStore.newItem('Type a new task and hit enter', 'undone', 'normal');
        }
      }
    }
</script>
