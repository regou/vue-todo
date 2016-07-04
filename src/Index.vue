<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import store from './store/index';

    import Bro from 'brototype';
    import axios from 'axios';
    import {getWeatherIconClass,testForecast} from './constans';


    import { changeForecast } from './store/actions'

    require('./components/Header/css/weather-icons.min.css');

    function getForecast() {
        return axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22suzhou%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then(function (resp) {
                if(_.includes(Bro(resp).iCanHaz('data.query.created'),'2016-07-04')){
                    return [testForecast[0]]
                }
                return Bro(resp).iCanHaz('data.query.results.channel.item.forecast')
            })
            .catch(function () {
                return testForecast;
            })
    }

    const getVideoName = function(type){

        function isInclude(arr){
            var ret = false;
            for(let i=0;i<=arr.length;i++){
                if(_.includes(type,arr[i])){
                    ret = true;
                    break;
                }
            }
            return ret;
        }

        if(isInclude(['lightning','thunder'])){
            return _.sample(['lighting','foggy_stream','drops'])
        }
        if(isInclude(['rain','fog','haze'])){
            return _.sample(['foggy_stream','drops','mountain_lake'])
        }
        if(isInclude(['cloud','wind'])){
            return _.sample(['thesimpleblackness'])
        }
        if(isInclude(['sun','clear','hot'])){
            return _.sample(['summer_field','sandy_beach','andnowisee','thesimpleblackness'])
        }

        return ['mountain_lake']

    }

    export default {
        data: function () {
            return {
                videoObj:null
            }
        },
        vuex:{
            actions:{
                changeForecast
            },
            getters: {
                forecast:function(state){
                    return state.forecast
                }
            }
        },
        store,
        ready: function () {

        },
        created: function () {
            var comp = this;
            function change(info){
                if(!comp.videoObj || _.get(comp,'forecast.code') != info.code){
                    comp.changeVideo(info.code);
                }
                comp.changeForecast(info);
            }
            if(comp.forecast){
                 change(comp.forecast);
            }

            getForecast()
                .then(function(forecastArr){return forecastArr[0]})
                .then(function(info){
                    return Object.assign(info,{
                        iconClass:getWeatherIconClass(info.code)
                    })
                })
                .then(change);

        },
        methods: {
            changeVideo: function (code = '32') {

                var $wraper = $('#Vidage');

                var filename = getVideoName(getWeatherIconClass(code) || 'thunder');


                var videoHtml = `
                <div class="Vidage__image"></div>

                  <video id="VidageVideo" class="Vidage__video" preload="metadata" loop autoplay muted>
                      <source src="/static/video/${filename}.mp4" type="video/mp4">
                  </video>

                <div style="background-image: url(/static/video/${filename}.jpg)" class="Vidage__backdrop"></div>

            `;

                $wraper.html(videoHtml);
                this.videoObj = new Vidage('#VidageVideo');

            }
        },

    }
</script>

