<template>
    <aside :class="['v-aside',{'show-aside':showTip}]">
    <div :class="['add-tip', 'center-containner',{'add-tip-small':showTip}]">
        <span @click="showAll" v-show="!showTip"><i>+</i></span>
        <span @click="showAllSmall" v-show="showTip" class="small-icons"><i>-</i></span>
    </div>
    <div class="left-list">
        <div id="left-view" class="g-left">

            <!-- action bar -->
            <div class="tool-bar clearfix">


                <div class="t-user user" >
                    <a class="boult">
                        <img class="avatar" src="/static/images/avatar-new.png">
                    </a>
                    <span class="username t-name">{{account}}</span>
                    <span class="logout-user" @click="logoutUser">注销</span>
                </div>

            </div>
            <!-- /action bar -->

            <!--list view start-->
            <div id="project-list-view" class="lists">
                <div class="project-list-inner antiscroll-wrap">
                    <div class="antiscroll-inner first-hide" style="height: 100%;">

                        <div class="collection list-group">
                            <ul id="list-collection-a">
                                 <li tabindex="1" class="project smart-project ui-droppable active" @click='getAllThings'>
                                    <a href="javascript://" class="project-box project-link" >
                                        <span class="l-title ">所有</span>
                                        <span class="count">({{countAll}})</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="collection list-group">
                            <ul id="list-collection-t">


                                <li tabindex="1" class="project smart-project ui-droppable" @click='getImportantThings'>
                                <a class="project-box project-link" >


                                    <span class="l-title">重要</span>

                                    <span class="count">({{countImportant}})</span>
                                </a>

                            </li><li tabindex="1" class="project smart-project ui-droppable" @click='getNormalThings'>
                                <a href="javascript://" class="project-box project-link">


                                    <span class="l-title">一般</span>

                                    <span class="count">({{countNormal}})</span>
                                </a>

                            </li>

                            <li tabindex="1" class="project smart-project assigned-me" @click='getWhateverThings'>
                                <a class="project-box project-link" >


                                    <span class="l-title ">随便</span>

                                    <span class="count">({{countWhatever}})</span>
                                </a>

                            </li>

                            </ul>
                        </div>

                        <div class="collection list-group">
                            <ul>
                                <li @click='getOneHourThings'>
                                    <a href="javascript://" >

                                        <span class="l-title ">最近一小时</span>

                                        <span class="count">({{countOneHour}})</span>
                                    </a>
                                </li>
                                <li @click='getOneDayThings'>
                                    <a href="javascript://" >

                                        <span class="l-title ">最近一天</span>

                                        <span class="count">({{countOneDay}})</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    </aside>
</template>

<script>
    import { addNew,updateItem,delItem ,filteDatas} from '../../store/actions'
    import store from '../../store/index'
    import {filterFuncs} from '../../constans';

    export default{
        vuex:{
            actions:{
                filteDatas
            },
            getters: {
                account:function(state){return state.user_id},
                countAll: function (state) {
                    return state.items.filter(filterFuncs.byAll).length;
                },
                countImportant: function (state) {
                    return state.items.filter(filterFuncs.byUrgent).length;
                },
                countNormal: function (state) {
                    return state.items.filter(filterFuncs.byNormal).length;
                },
                countWhatever: function (state) {
                    return state.items.filter(filterFuncs.byWhatever).length;
                },
                countOneHour: function (state) {
                    return state.items.filter(filterFuncs.byOneHour).length;
                },
                countOneDay: function (state) {
                    return state.items.filter(filterFuncs.byOneDay).length;
                }
            }
        },
        data(){
            return {
                showTip: false
            }
        },
        props: [],
        created(){

        },
        created(){
            let byAll =  this.$route.query.filterby
            this.filteDatas(filterFuncs[byAll])
        },
        methods:{
            showAll(){
                this.showTip = true
            },
            showAllSmall(){
                this.showTip = false
            },
            getAllThings(){
                this.$router.go({ name: 'contain', query: { 'filterby': 'byAll' }})
                this.filteDatas(filterFuncs.byAll)
            },
            getImportantThings(){
                this.$router.go({ name: 'contain', query: { 'filterby': 'byUrgent' }})
                this.filteDatas(filterFuncs.byUrgent)
            },
            getNormalThings(){
                this.$router.go({ name: 'contain', query: { 'filterby': 'byNormal' }})
                this.filteDatas(filterFuncs.byNormal)
            },
            getWhateverThings(){
                this.$router.go({ name: 'contain', query: { 'filterby': 'byWhatever' }})
                this.filteDatas(filterFuncs.byWhatever)
            },
            getOneHourThings(){
                this.$router.go({ name: 'contain', query: { 'filterby': 'byOneHour' }})
                this.filteDatas(filterFuncs.byOneHour)
            },
            getOneDayThings(){
                this.$router.go({ name: 'contain', query: { 'filterby': 'byOneDay' }})
                this.filteDatas(filterFuncs.byOneDay)
            },
            logoutUser(){

                window.localStorage.setItem('user_id','');
                this.$router.go({name:'login'})
            }
        },
        transitions: {
            icons: {
                css: false,
                enter: function (el, done) {
                    // 元素已被插入 DOM
                    // 在动画结束后调用 done
                    $(el)
                        .css('opacity', 1)
                        .animate({left: 200}, 500, done)
                },
                enterCancelled: function (el) {
                    $(el).stop()
                },
                leave: function (el, done) {
                    // 与 enter 相同
                    $(el).animate({left: 0}, 500, done)
                },
                leaveCancelled: function (el) {
                    $(el).stop()
                }
            }
        }
    }
</script>
<style>
    .v-aside{
        height: 100vh;width: 300px;
        transform: translateX(-250px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        will-change: transform;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }
    .v-aside.show-aside{
        transform: translateX(0%);
    }


    .t-user{padding: 1em;}
    .t-user > *{display: inline-block;vertical-align: middle;}
    .t-name{line-height: 3em;}
    .avatar{
        max-width: 3em;
    }
    .add-tip{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        color: #fff;
        width: 50px;
        text-align: center;
        z-index: 2;
    }
    .left-list{
        background-color: rgba(0,0,0,.2);
    }
    .add-tip-small{
        background-color: transparent;
        left: 250px;
    }
    .add-tip span{
        font-size: 20px;
        display: inline-block;
        vertical-align: top;
        border: 1px solid #fff;
        border-radius: 20px;
        width: 20px;
        cursor: pointer;
    }
    .add-tip span.small-icons{

    }
    #project-list-view ul li{
        padding: 8px 1em;
    }
    #project-list-view ul li:hover{
        cursor: pointer;
        background: rgba(255,255,255,.3);
    }
    #project-list-view ul li.active-li{
        cursor: pointer;
        background: rgba(255,255,255,.3);
    }
    #project-list-view ul li.tkcalendar{
        padding: 0;
    }

    .left-list{
        color: white;
        display: inline-block;
        width: 250px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .left-list a{
        text-decoration: none !important;
        color: white;
    }
    .count{
        display: inline-block;
        padding-left: 0px;
        opacity: .4;
    }
    .list-group{
        margin-bottom: 1em;
    }
    .logout-user{
        display: inline-block;
        cursor: pointer;
        margin-left: 60px;
    }

</style>
