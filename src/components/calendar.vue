<template>
		<div @click="selectTime" :class="['time-promopt',{'uneditable':!todo.isEditing,'no-time':!hasTime}]">
			<input type="text" class="selectedTime"  v-show="hasTime" transition="bounce"  v-if="todo.isEditing" v-model="todo.time">
			<p class="model-time" v-if="todo.isEditing == false && hasTime"
               :class="[todo.status =='done' ? 'time': '']">{{ todo.time | simpleDate}}</p>
			<span class="icon-time" v-if="todo.isEditing" v-show="!hasTime"></span>
		</div>

</template>
<style scope>
	.time-promopt{float: left;cursor: pointer;max-width: 130px;height: 30px;}
    .time-promopt.uneditable{
        cursor: default;
    }
	.todo-item input.selectedTime{width: 130px;height: 30px;font-size: 12px;color: #555;
        border:1px solid #64a131;
        border-radius: 5px;padding-left: 4px;box-sizing:border-box;}
	.model-time{
        height: 30px;font-size: 12px;color: #555;
        white-space: nowrap;
        border:1px solid rgba(0,0,0,0);
        border-radius: 5px;padding-left: 4px;box-sizing:border-box;}
	.model-time.time{border:1px solid rgba(0,0,0,0); background: #ccc;opacity: 0.5;}
	.icon-time{
       display: inline-block;height:30px;width:30px;background: url("../../static/images/clock.png") no-repeat center center;background-size: contain;}
   .bounce-transition {
	  display: inline-block; /* 否则 scale 动画不起作用 */
	}
	.bounce-enter {
	  animation: bounce-in .5s;
	}
	.bounce-leave {
	  /*animation: bounce-out s;*/
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(0);
	  }
	}
</style>

<script>
require('../../static/laydate/laydate.js');
import push from '../../static/lib/push.min.js';
import { addNew,updateItem,delItem } from '../store/actions'

export default {
	data(){
		return {
			show:false,
			isClick:true
		}
	},
	vuex:{
        actions:{
            updateItem
        }
    },
	props:{
		todo: Object
	},
	created:function(){
        if(this.todo.timeStamp){
            var notificationJobId = this.remind(this.todo.timeStamp);
            this.updateItem({
                notificationJobId:notificationJobId,
                id:this.todo.id
            })
        }

    },
    computed: {

        hasTime: function () {
            return !!this.todo.time;

        }
    },
    methods:{
        remind:function(aftertamp){
            var nowtamp=new Date().getTime();
            var difference=aftertamp-nowtamp;
            var notificationJobId;
            var vm=this;
            if(this.todo.notificationJobId){
                clearTimeout(this.todo.notificationJobId)
            }

            if(difference>=0){
                notificationJobId = setTimeout(function(){

                    push.create('todo事项提醒', {
                        body: '您该'+vm.todo.text+"了",
                        icon: {
                            x16: '/static/reminder.png',
                            x32: '/static/reminder.png'
                        },
                        timeout: 10000
                    });

                }, difference);
            }

            return notificationJobId;
        },
        selectTime(){
        	if(this.todo.isEditing){
        		var vm=this;



	            laydate({
	                elem: '.selectedTime',
	                istime: true,
	                format: 'YYYY-MM-DD hh:mm:ss',
	                choose: function(dates){ //选择好日期的回调
	                    vm.todo.isEditing = false;
	                    //var nowtamp=new Date().getTime();

	                    var aftertamp=Date.parse(new Date(dates));

	                    //var difference=aftertamp-nowtamp;
                        //var notificationJobId;

                        //if(vm.todo.notificationJobId){
                        //    clearTimeout(vm.todo.notificationJobId)
                        //}
                        var notificationJobId = vm.remind(aftertamp);

	            		//console.log(vm.timeMsg);
	            		vm.todo.time = dates;

	                    vm.updateItem({
                            notificationJobId:notificationJobId,
	                        id:vm.todo.id,
	                        time:vm.todo.time,
                            timeStamp:aftertamp
	                    })
	                }
	            });



                if(Notification in window){
                    if(Notification.permission != "granted"){
                        Notification.requestPermission(function (permission) {
                            if (permission === "granted") {
                            }
                        });
                    }
                }


            }

        }
    }
};
</script>
