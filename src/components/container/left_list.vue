<template>
    <div class="add-tip" v-el:add-tip>
        <span @click="showAll" v-show="!showTip">+</span>
        <span @click="showAllSmall" v-show="showTip" class="small-icons">-</span>
    </div>
    <div class="left-list" id="left-list" v-show="showTip">
        <div id="left-view" class="g-left">

            <!-- action bar -->
            <div class="tool-bar">
                <div class="indicator slow-transition" style="display: block;"></div>

                <div class="t-user user dropdown" id="preferences-menu">
                    <a data-toggle="dropdown" class="dropdown-toggle boult">
                        <img class="avatar" src="/static/images/avatar-new.png">

                    </a>
                    <span data-toggle="dropdown" class="username t-name">qjliang_1213</span>

                    <ul class="dropdown-menu pull-left">
                        <li><a id="refresh">同步</a></li>
                        <li><a id="settings" href="">设置</a></li>
                        <li><a id="homepage" href="" target="">首页</a></li>
                        <li><a id="help" href="" target="">帮助</a></li>
                        <li><a id="logout">退出登录</a></li>
                    </ul>

                </div>

                <a id="search" class="t-search" href="#s/">
                    <svg class="icon-search i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use></svg>
                </a>

                <div id="notification-menu" class="dropdown notification t-notify">
                    <a class="dropdown-toggle power-tip boult" data-toggle="dropdown" title="消息">
                        <svg class="icon-notification i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-notification"></use></svg>
                        <span class="badge n-count"></span>
                    </a>
                    <div class="dropdown-menu pull-left">
                        <div id="notification_panel" class="notify-panel"></div>
                    </div>
                </div>

            </div>
            <!-- /action bar -->

            <!--list view start-->
            <div id="project-list-view" class="lists">
                <div class="project-list-inner antiscroll-wrap">
                    <div class="antiscroll-inner first-hide" style="height: 100%;">

                        <div class="collection list-group">
                            <ul id="list-collection-a"><li tabindex="1" class="project smart-project ui-droppable active">
                                <a href="javascript://" projectid="tasks" id="project_tasks" class="project-box project-link" @click='getAllThings'>


                                    <span class="l-title ">所有</span>

                                    <span class="count">2</span>
                                </a>

                            </li>
                            </ul>
                        </div>

                        <div class="collection list-group">
                            <ul id="list-collection-t"><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="javascript://" projectid="today" id="project_today" class="project-box project-link" @click='getImportantThings'>


                                    <span class="l-title">重要</span>

                                    <span class="count"></span>
                                </a>

                            </li><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="javascript://" projectid="week" id="project_week" class="project-box project-link">


                                    <span class="l-title">一般</span>

                                    <span class="count"></span>
                                </a>

                            </li>
                                <li tabindex="1" class="project smart-project tkcalendar">
                                    <a projectid="calendar" id="project_calendar" class="project-box project-link">
                                <span class="count"></span>
                            </a>
                            </li>
                                <li tabindex="1" class="project smart-project assigned-me">
                                <a projectid="assignedme" id="project_assignedme" class="project-box project-link">


                                    <span class="l-title ">随便</span>

                                    <span class="count"></span>
                                </a>

                            </li></ul>
                        </div>

                    </div>
                    <div class="antiscroll-scrollbar antiscroll-scrollbar-vertical" style="height: 442px; top: 0px;"></div></div>
            </div>
            <!--list view end-->

            <!--plugin calendar view start-->
            <div id="left-bottom-view">
                <div id="datepicker" class="min-cal"></div>


            </div>
            <!--plugin calendar view end-->
        </div>
    </div>
</template>

<script>
    import { addNew,updateItem,delItem ,filteDatas} from '../../store/actions'

    export default{
        vuex:{
            actions:{
                filteDatas
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
        ready(){

        },
        methods:{
            showAll(){
                this.showTip = true
                $(this.$els.addTip).addClass('add-tip-small')
            },
            showAllSmall(){
                this.showTip = false
                $(this.$els.addTip).removeClass('add-tip-small')
            },
            getAllThings(){

            },
            getImportantThings(){
                this.filteDatas('normal')

            }
        },
        components: {
        }
    }
</script>
<style>
    .add-tip{
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 30%;
        background-color: rgba(0,0,0,.2);
        height: 100%;
        color: #fff;
        width: 50px;
        text-align: center;
        z-index: 2;
    }
    .add-tip-small{
        background-color: transparent;
        padding-left: 200px;
        padding-top: 50%;
    }
    .add-tip span{
        font-size: 40px;
        display: inline-block;
        vertical-align: top;
        border: 1px solid #fff;
        border-radius: 40px;
        width: 40px;
        cursor: pointer;
    }
    .add-tip span.small-icons{

    }
    #left-list{

        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: block;*/
        /*-webkit-box-align: left;*/
        /*-ms-flex-align: left;*/
        /*align-items: left;*/
        /*-webkit-box-pack: left;*/
        /*-ms-flex-pack: left;*/
        /*justify-content: none;*/
        /*height: 100%;*/
    }
</style>
