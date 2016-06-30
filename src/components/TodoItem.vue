<template>
    <li class="todo-item" :class="{'editing': model.isEditing, 'task-done': isDone}">
            <span @click="showLabel" class="label {{ model.label }}">
                <ul class="action-pick-label action-popup">
                    <li @click="saveLabel('urgent')" class="important">Important</li>
                    <li @click="saveLabel('normal')" class="normal">Normal</li>
                    <li @click="saveLabel('other')" class="other">Whatever</li>
                </ul>
            </span>

        <p class="text" v-if="model.isEditing">
            <input type="text" v-model="tempText" placeholder="Type a new task and hit enter" @keyup.enter="save">
        </p>

        <p class="text" v-if="model.isEditing == false">{{ model.text }}</p>

        <!-- Task action -->
        <div class="todo-action" @click="showAction" v-if="model.isEditing == false || model.isEditing == null">
                 <span class="more">
                   <span></span><span></span><span></span>
                 </span>

            <ul class="action-list action-popup">
                <li @click="markDone" v-if="!isDone">Mark done</li>
                <li @click="edit" v-if="!isDone">Edit</li>
                <li @click="delete">Delete</li>
            </ul>
        </div>
    </li>
</template>
<style>
    .g-left::after{
        content: ' ';
        background: rgba(255,255,255,0.3);
        filter:blur(10px);
    }
</style>
<script>

    import { addNew,updateItem,delItem } from '../store/actions'
    export default{
        vuex:{
            actions:{
                updateItem,
                delItem
            }
        },
        props: ['model'],
        data: function() {
            return {
                tempText: '',
            }
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
