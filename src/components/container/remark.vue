<template>
    <div class="comment-main" id="comment-main">
        <div class="dialog-remark" v-el:dialog-remark id="text-edit">

        </div>
        <div class="comment-all-info">
            <div class="comment-item" v-for="item in comment" data-floor="{{item.floor}}" data-name="{{item.name}}" data-id="{{item['id']}}">
                <div class="comment-title">
                    <div :class="{'comment-floor':true}">{{item.floor}} #</div>
                    <div :class="{'comment-floor-name':true}">{{item.name}}</div>
                    <div :class="{'comment-floor-create-date':true}">{{item.created}}</div>
                </div>
                <div class="comment-parent-main" v-if="item.parent.floor">
                    <div class="comment-title">
                        <div :class="{'comment-floor':true}">{{item.parent.floor}} #</div>
                        <div :class="{'comment-floor-name':true}">{{item.parent.name}}</div>
                        <div :class="{'comment-floor-create-date':true}">{{item.parent.created}}</div>
                    </div>
                    <div :class="{'comment-parent-text':true}">{{{item.parent.text}}}</div>
                </div>
                <div class="comment-child-main">
                    <div :class="{'comment-main-text':true}">{{{item.text}}}</div>
                </div>
                <div :class="{'comment-footer':true}">
                    <div :class="{'detele':true}" @click="commentDelete"> 删除</div>
                    <!--<a :class="{'replay':true}" @click="commentReplay" href="#text-edit">{{$t('comment.replay')}}</a>-->
                </div>
                <!--<div class="comment-child-main">-->
                    <!--<div :class="{'comment-main-text':true}">{{{item.text}}}</div>-->
                <!--</div>-->
                <!--<div :class="{'comment-footer':true}">-->
                    <!--<div :class="{'detele':true}" @click="commentDelete" v-if="item.delete"> | {{$t('comment.delete')}}</div>-->
                    <!--<a :class="{'replay':true}" @click="commentReplay" href="#text-edit">{{$t('comment.replay')}}</a>-->
                <!--</div>-->
            </div>
        </div>
    </div>

</template>

<script>
//    import right from './right_info.vue'
import comment from './datas.json'
import './ueEdit/ueditor.config.js';
import './ueEdit/ueditor.all.js';
    export default{
        data(){
            return {
                comment
            }
        },
        props: [],
        ready(){
            //实例化编辑器
            var ue = UE.getEditor('text-edit', {
                toolbars: [
                    ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript','|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist','|','justifyleft','justifyright', 'justifycenter','simpleupload','fontfamily','fontsize']
                ]
                ,textarea:'text'
                ,enableContextMenu: false
                ,elementPathEnabled: false
                ,wordCount:false
                ,serverUrl:  ""
            });
        },
        components: {

        }
    }
</script>

<style>
    /**
    **修改Uedit参数
    */
    #edui1{
        width: 440px!important;
        text-align: center;
        margin-left: 30px;
        margin-top: 20px;
    }
    #text-edit #ueditor_0 .view{
        /*height: 100px!important;*/
    }
    #edui1_iframeholder{
        height: 100px!important;
    }
    .text-uedit-background{
        height: 289px;
        border-bottom: 1px solid #c0c0c0;
        overflow: auto;
    }

    .comment-main{
        display: block;
        position: absolute;
        right: 0;
        top:0;
        width: 500px;
        height: 100%;
        background: #fff;
        border-left: 1px solid #ddd;
    }


    .comment-item{
        padding-bottom: 20px;
        padding-top: 5px;
        padding-left: 20px;
        border-bottom: 1px solid #c0c0c0;
    }
    .comment-title{

    }
    .text-uedit-background{
        background-color: #f2f2f2;
        margin-right: -2%;
    }
    .comment-title:after{
        content: "";
        display: table;
        clear: both;
    }
    .comment-title .comment-floor{
        width: 30px;
        float: left;
    }
    .comment-title .comment-floor-name{
        float: left;
        width: 210px;
        font-weight: bold;
    }
    .comment-title .comment-floor-create-date{
        float: right;
    }

    .comment-file-name{
        font-weight: 700;
        font-size: 14px;
        margin-top: 8px;
        max-width: 100%;
        text-align: center;
    }
    .comment-main-text{
        max-height: 200px;
        min-height: 50px;
        overflow: auto;
        margin-top: 5px;
        margin-left: 10px;
        /*padding: 20px 0 0 20px;*/
    }
    .comment-parent-main{
        background-color: #f2f2f2;
        padding: 10px;
        margin: 20px 10px 0px 10px;
    }
    .comment-parent-text{
        max-height: 200px;
        overflow: auto;
    }
    .comment-footer:after{
        content: "";
        display: table;
        clear: both;
    }
    .comment-footer .replay{
        float: right;
        width: 30px;
        cursor: pointer;
        color: #06C;
    }
    .comment-footer{
        margin-top: 5px;
    }
    .comment-footer .detele{
        float: right;
        width: 40px;
        cursor: pointer;
        color: #06C;
    }
    .comment-submit-wrap{
        text-align: center;
        width: 100%;
        /*border-bottom: 1px solid #c0c0c0;*/
        /*padding-bottom: 20px;*/
        /*margin-top: -70px;*/
    }
    .comment-submit{
        display: inline-block;
        width: 40px;
        text-align: center;
        /*height: 16px;*/
        line-height: 16px;
    }
    .disabled{
        background-color: #F5f5f5;
        color: #999;
        cursor: no-drop;
        border: 1px solid #F5f5f5;
    }
    #table_page_comment{
        margin-top: 10px;
    }
    .comment-all-info{
        height: 512px;
        overflow: auto;
    }
    .comment-submit-wrap-text{
        height: 197px;
        overflow: auto;
        margin-bottom: 10px;
    }
</style>
