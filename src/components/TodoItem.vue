<template>
    <li class="todo-item" :class="{'editing': model.isEditing, 'task-done': isDone}" >
            <div class="group-kind">
                <span @click="showLabel" class="label {{ model.label }}">
                    <ul class="action-pick-label action-popup">
                        <li @click="saveLabel('urgent')" class="important">Important</li>
                        <li @click="saveLabel('normal')" class="normal">Normal</li>
                        <li @click="saveLabel('other')" class="other">Whatever</li>
                    </ul>
                </span>
            </div>

        <p class="text" v-if="model.isEditing">
            <input type="text" v-model="tempText" placeholder="Type a new task and hit enter" @keyup.enter="save(el)">
        </p>

        <p class="text" v-if="model.isEditing == false">{{ model.text }}</p>
            <my-calendar :my-model="model"></my-calendar>
        <!-- Task action -->
        <div class="todo-action" @click="showAction" v-if="model.isEditing == false || model.isEditing == null">
                 <span class="more">
                   <span></span><span></span><span></span>
                 </span>

            <ul class="action-list action-popup">
                <li @click="markDone" v-if="!isDone">Mark done</li>
                <li @click="edit" v-if="!isDone">Edit</li>
                <li @click="delete">Delete</li>
                <li @click="remark">查看/备注</li>
            </ul>
        </div>


    </li>
</template>
    <style scope>
     .todo-item {
        padding: 15px 15px;
        border-top: 1px solid #f1f1f1;
        position: relative;
        height: 72px;
        box-sizing:border-box;
    }
     .todo-item .group-kind{
        float: left;
        padding-top: 7px;
     }
     .todo-item.task-done .text {
        color: #ccc;
    }

     .todo-item .text {
        float:left;
        margin-top: -2px;
        padding-left: 8px;
        padding-right: 8px;
        width: calc(100% - 250px);
    }

    .todo-item .action-popup {
        position: absolute;
        right: 0;
        top: 23px;
        border: 1px solid #EFEFEF;
        list-style: none;
        padding: 5px 10px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 4px 7px rgba(0, 0, 0, .1);
        display: none;
        z-index: 99999;
    }

     .todo-item .action-popup.show {
        display: block;
    }

     .todo-item .action-popup li {
        padding: 3px 5px;
        margin: 5px 0;
        cursor: pointer;
        white-space: nowrap;
        font-size: .9em;
        border-radius: 3px;
    }

     .todo-item .action-popup li i {
        margin-right: 5px;
    }

     .todo-item .action-popup li:hover {
        background: #f5f5f5;
    }
     .todo-item .label {
        display: inline-block;
        background: #ff3c41;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
        position: relative;
        cursor: pointer;
    }

     .todo-item .label.normal {
        background: #37EAA0;
    }

     .todo-item .label.other {
        background: #3772FD;
    }

     .todo-item .label .action-pick-label {
        left: 0;
        width: 140px;
    }

     .todo-item .label .action-pick-label li {
        color: #fff;
        font-weight: 700;
        text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    }

    .todo-item .label .action-pick-label li:hover {
        opacity: .8;
    }

     .todo-item .label .action-pick-label .important {
        background: #ff3c41;
    }

    .todo-item .label .action-pick-label .normal {
        background: #37EAA0;
    }

    .todo-item .label .action-pick-label .other {
        background: #3772FD;
    }

    .todo-item .todo-action {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .todo-item .todo-action .more {
        cursor: pointer;
    }

    .todo-item .todo-action .more span {
        display: inline-block;
        margin: 0 1px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #DADADA;
    }

    .todo-item .todo-action .more:hover span {
        background: #DADADA;
    }

    .todo-item.editing input {
        border: none;
        font-family: inherit;
        outline: 0;
        font-size: 1em;
        width: 100%;
        background: 0 0;
    }

    </style>
<style>
    .g-left::after{
        content: ' ';
        background: rgba(255,255,255,0.3);
        filter:blur(10px);
    }
</style>
<script>

    import { addNew,updateItem,delItem } from '../store/actions'
    import ListStore from '../ListStore';
    import myCalendar from './calendar';
    export default{
        vuex:{
            actions:{
                updateItem,
                delItem
            }
        },
        props: ['model','remark'],
        data: function() {
            return {
                tempText: '',
            }
        },
        components: {
            'my-calendar':myCalendar
        },
        computed: {
            isDone: function() {
                return this.model.status == "done" ? true : false;
            }

        },
        methods: {
            save: function() {
                if(this.tempText != '') {
                    this.model.isEditing = false;

                    this.updateItem({
                        id:this.model.id,
                        text:this.tempText
                    })
                }
            },
            // saveTime:function(time){
            //     alert(time);
            //     this.updateItem({
            //         id:this.model.id,
            //         time:time
            //     });
            // },
            markDone: function() {
                this.updateItem({
                    id:this.model.id,
                    status:"done"
                })
            },
            edit: function() {
                this.model.isEditing = true;
                this.$nextTick(function() {
                    $(this.$el).find('input').focus();
                });
                this.tempText = this.model.text;
            },
            delete: function() {
                this.delItem(this.model);
            },
            showAction: function(event) {
                event.stopPropagation();
                var target = $(event.currentTarget);
                var actionList = target.find('.action-list');

                if(actionList.hasClass('show')) {
                    actionList.removeClass('show');
                } else {
                    $('.action-list').removeClass('show');
                    actionList.addClass('show');
                }
            },
            showLabel: function(event) {
                event.stopPropagation();
                var target = $(event.currentTarget);
                var actionList = target.find('.action-popup');

                if(actionList.hasClass('show')) {
                    actionList.removeClass('show');
                } else {
                    $('.action-popup').removeClass('show');
                    actionList.addClass('show');
                }
            },
            saveLabel: function(type) {

                this.updateItem({
                    id:this.model.id,
                    label:type
                });
            }
        }
    }
</script>
