<template>
    <div class="top">
            <input id="lang-cn" v-model="language_" type="radio" v-bind:value="'CN'">
            <label for="lang-cn">CN</label>
            <input id="lang-en" v-model="language_" type="radio" v-bind:value="'EN'">
            <label for="lang-en" >EN</label>
    </div>
</template>

<style>
.top {
    position: absolute;
    top:10px;
    right:20px;
}
.top label{color: #fff;}
</style>
