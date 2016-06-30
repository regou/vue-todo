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
                                <a href="#q/all/tasks" projectid="tasks" id="project_tasks" class="project-box project-link">


                                    <svg class="icon-all-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-all-list"></use></svg><span class="l-title ">所有</span>

                                    <span class="count">2</span>
                                </a>

                            </li></ul>
                        </div>

                        <div class="collection list-group">
                            <ul id="list-collection-t"><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="#q/all/today" projectid="today" id="project_today" class="project-box project-link">


                                    <svg class="icon-today-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-today-list"></use></svg><div class="outer-date"><span class="inner-date">28</span></div><span class="l-title ">今天</span>

                                    <span class="count"></span>
                                </a>

                            </li><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="#q/all/week" projectid="week" id="project_week" class="project-box project-link">


                                    <svg class="icon-today-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-today-list"></use></svg><div class="outer-date"><span class="inner-date">T</span></div><span class="l-title ">最近7天</span>

                                    <span class="count"></span>
                                </a>

                            </li><li tabindex="1" class="project smart-project tkcalendar hide"><a href="#c/all/calendar" projectid="calendar" id="project_calendar" class="project-box project-link">
                                <svg class="icon-calendar-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-calendar-list"></use></svg><span class="l-title ">日历</span><span class="count"></span>
                            </a>
                            </li><li tabindex="1" class="project smart-project assigned-me hide">
                                <a href="#q/all/assignedme" projectid="assignedme" id="project_assignedme" class="project-box project-link">


                                    <svg class="icon-assigned-to-me-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-assigned-to-me-list"></use></svg><span class="l-title ">分配给我</span>

                                    <span class="count"></span>
                                </a>

                            </li></ul>
                        </div>

                        <div class="collection list-group">
                            <ul id="list-collection-i"><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="#p/inbox/tasks" projectid="inbox1011112228" id="project_inbox1011112228" class=" project-box project-link ">


                                    <svg class="icon-inbox-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-inbox-list"></use></svg><span class="l-title ">收集箱</span>

        <span class="dropdown p-caret">
          <span class="dropdown-toggle" data-toggle="dropdown" data-dropdown="#list-dropdown-id_inbox1011112228">
          <svg class="icon-more i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-more"></use></svg>
          </span>
        </span>

                                    <span class="count">2</span>
                                </a>

                            </li></ul>
                        </div>

                        <div class="l-tabs l-l-t l-c disabled-tag">
                            <a class="l-tab t-active">
                                <span class="text-sml">清单</span>
                            </a>
                            <a class="l-tab">
                                <span class="text-sml">标签</span>
                            </a>
                        </div>

                        <!--list start-->
                        <div class="project-list list-group l-tab-pane-0 t-active">
                            <ul id="project-ul" class="project-ul ui-sortable"></ul>
                        </div>
                        <!--list end-->

                        <!-- close-project start -->
                        <div class="list-group list-closed l-c l-tab-pane-0 t-active hide"><a id="l-closed-toggle">

                            <svg class="icon-closed-list i-1 normal-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-closed-list"></use></svg><span class="text-sml l-close-title" id="show-closed">已关闭的清单</span>
                            <span class="count badge">0</span>
                        </a>
                            <ul id="close-project-ul" class="l-closed-ul inner-ul" style="display: none;">
                            </ul>
                        </div>
                        <!-- close-project end -->

                        <!-- new list -->
                        <div class="l-new l-tab-pane-0 t-active">
                            <a id="project-new-button" class="pointer">

                                <svg class="icon-add-new-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-add-new-list"></use></svg><span class="l-title">添加清单</span>
                            </a></div>

                        <!--tagList start -->
                        <div class="tag-list list-group l-tab-pane-1 hide">
                            <div class="empty-tag">
                                <svg class="icon-empty-tag i-xl"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-empty-tag"></use></svg>
                                <span>还没有标签<br>在任务中输入#号键可添加标签</span>
                            </div>
                        </div>
                        <!--tagList end -->

                        <div class="l-divider"></div>

                        <!--calendarList start -->
                        <div class="calendar-list list-group">
                            <ul id="calendar-ul">
                            </ul>
                            <div class="l-divider hide"></div>
                        </div>

                        <!--calendarList end -->

                        <!--another collection start-->
                        <div class="collection list-group">
                            <ul id="list-collection-c" class="list"><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="#q/all/completed" projectid="completed" id="project_completed" class="project-box project-link">


                                    <svg class="icon-completed-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-completed-list"></use></svg><span class="l-title ">已完成</span>

                                    <span class="count"></span>
                                </a>

                            </li><li tabindex="1" class="project smart-project ui-droppable">
                                <a href="#q/all/trash" projectid="trash" id="project_trash" class="project-box project-link">


                                    <svg class="icon-delete-list i-1"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete-list"></use></svg><span class="l-title ">垃圾桶</span>

                                    <span class="count"></span>
                                </a>

                            </li></ul>
                        </div>
                        <!--another collection end-->

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

    export default{
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
