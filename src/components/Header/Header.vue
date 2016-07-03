<template>
    <div class="todo-header">
        <div class="overlay"></div>
        <time class="clearfix">
            <span class="day">{{ date }}</span>
            <span class="dayofweek">{{ weekDay }}</span>
            <span class="month">{{ month }}, {{ year }}</span>
        </time>
        <i :title="forecastIconText" v-bind:class="['wi-icon','wi',forecastIconClass]"></i>
        <div class="add-circle" @click="add">
            <i class="fa fa-plus"></i>
        </div>
        <voice :lang="'zh-CN'" :on-result="onVoiceResult"></voice>
    </div>
</template>

<style>
    .wi-icon {
        color: white;
        font-size: 2.5rem;
        display: inline-block;
        z-index: 2;
        position: absolute;
        top: 10px;
        right: 10px;
    }



    .todo-header {
        border-radius: 6px 6px 0 0;
        background: url('/static/video/wow.jpg') no-repeat;
        background-size: cover;
        padding: 55px 20px;
        position: relative
    }

    .todo-header .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .2);
        border-radius: 6px 6px 0 0
    }

    .todo-header time {
        color: #fff;
        display: block;
        position: relative
    }

    .todo-header time .day {
        font-size: 4em;
        float: left;
        margin-right: 10px
    }

    .todo-header time .dayofweek {
        display: block;
        margin-top: 13px;
        font-size: 1.4em;
        font-weight: 700
    }

    .add-circle,.voice-wrapper {
        position: absolute;
        color: #fff;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer
    }
    .add-circle{
        background: #ff3c41;
        box-shadow: 0 0 13px #ff3c41;
        right: 80px;
        bottom: -20px;
        border-radius: 50%;
    }
    .voice-wrapper{
        right: 20px;
        bottom: -20px;
    }


</style>
<script>

    import moment from 'moment';

    import Bro from 'brototype';
    import axios from 'axios';
    import {getWeatherIconClass,testForecast} from '../../constans';

    import voice from './voice.vue';

    import { addNew,pushNew } from '../../store/actions'


    export default{
        vuex:{
            actions:{
                addNew,
                pushNew
            },
            getters: {
                forecast:function(state){
                    return state.forecast
                }

            }
        },
        data: function () {
            return {
                date: '',
                weekDay: '',
                month: '',
                year: '',
                forecastIconClass: '',
                forecastIconText: '',
            }
        },
        computed: {

            forecastIconClass: function () {
                return this.forecast ? getWeatherIconClass(this.forecast.code) : '';

            },
            forecastIconText:function(){
                return this.forecast ? this.forecast.text : '';
            }
        },
        created: function () {

        },
        ready: function () {
            var d = new Date();
            this.date = d.getDate();
            var mDate = moment(d);
            this.weekDay = mDate.format('dddd');
            this.month = mDate.format('MMMM');
            this.year = mDate.year();
        },
        methods: {
            onVoiceResult:function (data) {
                console.info('onVoiceResult',data);
                if(data && data.confidence >0 ){
                    this.addNew(data.text || '', 'undone',false);
                }
            },
            add: function (event) {
                this.addNew('Type a new task and hit enter', 'undone',true);
            }
        },
        components: {
            voice:voice
        }
    }
</script>
