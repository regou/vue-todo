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

</style>
<script>
    import ListStore from '../ListStore'
    export default{
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
                    this.model.text = this.tempText;
                    this.model.isEditing = false;

                    // local storage
                    ListStore.push();
                }
            },
            markDone: function() {
                this.model.status = "done"

                // local storage
                ListStore.push();
            },
            edit: function() {
                this.model.isEditing = true;
                this.$nextTick(function() {
                    $(this.$el).find('input').focus();
                });
                this.tempText = this.model.text;
            },
            delete: function() {
                this.$dispatch('item-deleted', this.model);
                this.$nextTick(function() {
                    ListStore.push();
                });
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
                this.model.label = type;

                // local storage
                ListStore.push();
            }
        }
    }
</script>
