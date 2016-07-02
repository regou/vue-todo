<template>
		<div @click="selectTime" class="time-promopt">
			<input type="text" id="selectedTime"  v-show="show" transition="bounce" :disabled="!isEditing" :class="[myModel.status =='done' ? 'time': '']">
			<span class="icon-time" v-show="isClick"></span>
		</div>
		
</template>
<style scope>
	.time-promopt{float: left;cursor: pointer;max-width: 130px;height: 30px;}
	#selectedTime{width: 130px;height: 30px;font-size: 12px;color: #555;border:1px solid #64a131;border-radius: 5px;padding-left: 4px;box-sizing:border-box;}
	#selectedTime.time{border:1px solid #ccc;background: #ccc;opacity: 0.5;}
	.icon-time{
       display: inline-block;height:30px;width:30px;background: url("../../static/images/clock.png") no-repeat center center;background-size: contain;}
   .bounce-transition {
	  display: inline-block; /* 否则 scale 动画不起作用 */
	}
	.bounce-enter {
	  animation: bounce-in .5s;
	}
	.bounce-leave {
	  animation: bounce-out .5s;
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

export default {
	data(){
		return {
			show:false,
			isClick:true
		}
	},
	props:{
		myModel: Object
	},
    methods:{
        selectTime(){
        	console.log(this.myModel.text);
        	this.isClick=false;
        	this.show=true;
        	var vm=this;
        	if(this.myModel.isEditing){
	            laydate({
	                elem: '#selectedTime',
	                istime: true, 
	                format: 'YYYY-MM-DD hh:mm:ss',
	                choose: function(dates){ //选择好日期的回调
	                    var nowtamp=new Date().getTime();
	                    var stringTime = $("#selectedTime").val();
	                    var aftertamp=Date.parse(new Date(stringTime));
	                    var difference=aftertamp-nowtamp;
	                    if(difference>=0){
	                        setTimeout(function(){
								push.create('您'+vm.myModel.text+"了");
	                        }, difference);
	                    }
	                    
	                }
	            });
            }
        }
    }
};
</script>
