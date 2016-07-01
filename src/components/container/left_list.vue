<template>
    <div :class="['add-tip', 'center-containner',{'add-tip-small':showTip}]">
        <span @click="showAll" v-show="!showTip">+</span>
        <span @click="showAllSmall" v-show="showTip" class="small-icons">-</span>
    </div>
    <div class="left-list" v-show="showTip">
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
            <div id="project-list-view">
                <ul>
                    <li><a href="#">所有</a></li>
                    <li><a href="#">最近一小时</a></li>
                    <li><a href="#">最近一天</a></li>
                </ul>
            </div>
            <!--list view end-->

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

            },
            showAllSmall(){
                this.showTip = false
//                $(this.$els.addTip).removeClass('add-tip-small')
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
        left: 200px;
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
    #project-list-view ul li{
        padding: 8px 1em;
    }

    .left-list{
        color: white;
        display: inline-block;
        width: 200px;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .left-list a{
        color: white;
    }

</style>
