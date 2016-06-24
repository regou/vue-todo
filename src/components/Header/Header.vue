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
</style>
<script>

    import moment from 'moment';
    import ListStore from '../../ListStore'
    import Bro from 'brototype';
    import axios from 'axios';
    import {getWeatherIconClass,testForecast} from '../../constans';

    require('./css/weather-icons.min.css')

    function getForecast() {

        return axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22suzhou%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then(function (resp) {
                return Bro(resp).iCanHaz('data.query.results.channel.item.forecast')
            })
            .catch(function () {
                return testForecast;
            })
    }

    export default{
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
        created: function () {
            getForecast()
                .then((forecastArr) => {
                    this.forecastIconClass = getWeatherIconClass(forecastArr[0].code);
                    this.forecastIconText = forecastArr[0].text;
                });
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
            add: function (event) {
                ListStore.newItem('Type a new task and hit enter', 'undone', 'normal');
            }
        }
    }
</script>
