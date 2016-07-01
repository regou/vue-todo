<template>
    <div>
    <div :class="['add-tip', 'center-containner',{'add-tip-small':showTip}]" transition="icons">
        <span @click="showAll" v-show="!showTip"><i>+</i></span>
        <span @click="showAllSmall" v-show="showTip" class="small-icons"><i>-</i></span>
    </div>
    <div class="left-list" v-show="showTip" transition="fade">
        <div id="left-view" class="g-left">

            <!-- action bar -->
            <div class="tool-bar clearfix">


                <div class="t-user user" >
                    <a class="boult">
                        <img class="avatar" src="/static/images/avatar-new.png">
                    </a>
                    <span class="username t-name">qjliang_1213</span>
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
                                    <a href="javascript://" projectid="tasks" id="project_tasks" class="project-box project-link" >
                                        <span class="l-title ">所有</span>
                                        <span class="count">({{countAll}})</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="collection list-group">
                            <ul id="list-collection-t">
                                <li tabindex="1" class="project smart-project tkcalendar">
                                    <a projectid="calendar" id="project_calendar" class="project-box project-link">
                                        <span class="count"></span>
                                    </a>
                                </li>

                                <li tabindex="1" class="project smart-project ui-droppable" @click='getImportantThings'>
                                <a href="javascript://" projectid="today" id="project_today" class="project-box project-link" >


                                    <span class="l-title">重要</span>

                                    <span class="count">({{countImportant}})</span>
                                </a>

                            </li><li tabindex="1" class="project smart-project ui-droppable" @click='getNormalThings'>
                                <a href="javascript://" projectid="week" id="project_week" class="project-box project-link">


                                    <span class="l-title">一般</span>

                                    <span class="count">({{countNormal}})</span>
                                </a>

                            </li>

                            <li tabindex="1" class="project smart-project assigned-me" @click='getWhateverThings'>
                                <a projectid="assignedme" id="project_assignedme" class="project-box project-link" >


                                    <span class="l-title ">随便</span>

                                    <span class="count">({{countWhatever}})</span>
                                </a>

                            </li>
                            <li tabindex="1" class="project smart-project tkcalendar">
                                <a projectid="calendar" id="project_calendar" class="project-box project-link">
                                    <span class="count"></span>
                                </a>
                            </li>
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
                    <div class="antiscroll-scrollbar antiscroll-scrollbar-vertical" style="height: 442px; top: 0px;"></div></div>
            <!--list view end-->

        </div>
    </div>
    </div>
</template>

<script>
    import { addNew,updateItem,delItem ,filteDatas} from '../../store/actions'
    import store from '../../store/index'


    function byAll(item) {
        return true;
    }
    function byUrgent(item) {
        return item.label == "urgent";
    }
    function byNormal(item) {
        return item.label == "normal";
    }
    function byWhatever(item) {
        return item.label == "other";
    }

    function byOneHour(item) {
        let now = Date.now();
//        console.log(now,now - 60*60*1000)
        return item.createTime < now - 60*60*1000;
    }
    function byOneDay(item) {
        let now = Date.now();
//        console.log(now,now - 60*60*1000*24)
        return item.createTime < now - 60*60*1000*24;
    }


    export default{
        vuex:{
            actions:{
                filteDatas
            },
            getters: {
                countAll: function (state) {
                    return state.items.filter(byAll).length;
                },
                countImportant: function (state) {
                    return state.items.filter(byUrgent).length;
                },
                countNormal: function (state) {
                    return state.items.filter(byNormal).length;
                },
                countWhatever: function (state) {
                    return state.items.filter(byWhatever).length;
                },
                countOneHour: function (state) {
                    return state.items.filter(byOneHour).length;
                },
                countOneDay: function (state) {
                    return state.items.filter(byOneDay).length;
                }
            }
        },
        store,
        data(){
            return {
                showTip: false
            }
        },
        props: [],
        created(){

        },
        ready(){

        },
        methods:{
            showAll(){
                this.showTip = true
            },
            showAllSmall(){
                this.showTip = false
            },
            getAllThings(){
                this.filteDatas(byAll)
            },
            getImportantThings(){
                this.filteDatas(byUrgent)
            },
            getNormalThings(){
                this.filteDatas(byNormal)
            },
            getWhateverThings(){
                this.filteDatas(byWhatever)
            },
            getOneHourThings(){
                this.filteDatas(byOneHour)
            },
            getOneDayThings(){
                this.filteDatas(byOneDay)
            }
        },
        transitions: {
            'fade': {
                css: false,
                enter: function (el, done) {
                    // 元素已被插入 DOM
                    // 在动画结束后调用 done
                    $(el)
                        .css('opacity', 1)
                        .animate({width: 250}, 500, done)
                },
                enterCancelled: function (el) {
                    $(el).stop()
                },
                leave: function (el, done) {
                    // 与 enter 相同
                    $(el).animate({width: 0}, 500, done)
                },
                leaveCancelled: function (el) {
                    $(el).stop()
                }
            },
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
    .t-user{padding: 1em;}
    .t-user > *{display: inline-block;vertical-align: middle;}
    .t-name{line-height: 3em;}
    .avatar{
        max-width: 3em;
    }
    .add-tip{
        position: absolute;
        top: 0;
        left: 0;
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
        color: white;
    }
    .count{
        display: inline-block;
        padding-left: 0px;
        opacity: .4;
    }

</style>
