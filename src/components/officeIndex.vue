
/**
* Created by steven on 16/5/9.
*/
<template>
    <div class="intro-container container">
        <div class="logo">
                <span class="icon logo">
                  <!--<i class="icon-logo icon_sign"></i>-->
                  <i class="icon-logo-inno"></i>
                </span>
        </div>
        <!--<component :is="login"></component>-->
        <router-view></router-view>

        <!--<office-login v-if="login =='login'"></office-login>-->

        <!--<office-regist v-else></office-regist>-->
        <div class="intro-text">
            <h2 class="intro-title">让知识产权管理更简单</h2>
            <p class="desc">
                Innosnap知识产权管理系统，是PatSnap智慧芽公司着力打造的知识产权管理解决方案。                        </p>
            <p class="desc">
                全球百万用户的共同选择。                        </p>
            <div class="visible-desktop">
                <a class="signup btn-normal btn" href="/signup">企业内部专利快速查询</a>
                <!--<a class="dload btn btn-secondary pop-btn">下载滴答清单</a>-->
            </div>

            <!--<div class="visible-phone btns">-->
                <!--<a class="signup btn" href="/signup">创建免费账户</a>-->
                <!--<a class="dload btn mb-btn" href="/static/getApp/download?type=apk">下载滴答清单</a>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import login from './officeLogin.vue';
    import logout from './officeRegist.vue';
    export default{
        props: [],
        data(){
            return {
                login: 'login',
                hashValue: this.$route.name
            }
        },
        watch:{
            hashValue(newdata){
                console.log(newdata,2222)
                this.login = newdata
            }
        },
        created(){
            this.login = this.$route.name
            console.log(this.$route.name,3333)
        },
        components: {
            login,
            logout
        }
    }
</script>
<style>
    .btn, .button, .col, .features-more .f-item, .intro, .platforms, .pop-download .msg-pop a, .section, .themes, button {
        box-sizing: border-box;
    }
    .container {
        max-width: 100%;
        width: 71.5rem;
        margin: 0 auto;
        display: block;
    }
    .header, .intro-container {
        transition: all 0.1s ease-in-out 0s;
    }

    p {
        font-size: 1rem;
        line-height: 2rem;
    }
    .intro {
        height: 100vh;
        min-height: 37.5rem;
        overflow: hidden;
        padding-top: 4.75rem;
        position: relative;
        top: 0;
        width: 100%;
        z-index: 1;
    }
    .intro .intro-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        float: right;
    }
    .arrow-down, .themes .unslider-nav {
    }
    .intro h2 {
        color: #fff;
        margin-bottom: 1.875rem;
        font-size: 3.75rem;
        line-height: 3.625rem;
    }
    .intro p {
        color: rgba(255, 255, 255, 0.54);
    }
    .intro .btn {
        box-shadow: 0 24px 85px 0 rgba(0, 0, 0, 0.2);
        height: 3.125rem;
        line-height: 3.125rem;
        margin: 2.25rem 1.875rem 0 0;
        min-width: 9rem;
    }
    .intro-line {
        letter-spacing: 60px;
    }
    .container-main {
        background-color: #fff;
        position: relative;
        z-index: 2;
    }
    .arrow-down {
        bottom: 2.75rem;
        height: 1.625rem;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 80%;
    }
    .features h3 {
        margin-bottom: 2.5rem;
    }
    .features h3 span {
        vertical-align: sub;
    }
    .features .section {
        height: 47.5rem;
        position: relative;
    }
    .col, .imgs .pa {
        position: absolute;
    }
    .features .s-feature .col.col-right {
        left: 5rem;
    }
    .section {
        margin: 0 auto;
        text-align: left;
    }
    .footer, .pop-download, .pop-download .msg-qr {
        text-align: center;
    }
    .col {
        padding-top: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        vertical-align: middle;
        width: 50%;
    }
    .btn {
        -moz-appearance: none;
        background-color: transparent;
        border-color: #fff;
        border-radius: 1.875rem;
        border-style: solid;
        border-width: 1px;
        box-shadow: none;
        color: #fff;
        display: inline-block;
        font-weight: 400;
        height: 2.5rem;
        line-height: 2.5rem;
        min-width: 8rem;
        outline: 0 none;
        padding: 0 1.25rem;
        position: relative;
        text-align: center;
        transition: background-color 0.2s ease 0s;
    }
    .btn.btn-primary, .button.btn-primary, button.btn-primary {
        background-color: transparent;
        color: #fff;
    }
    .btn.btn-primary:active, .btn.btn-primary:focus, .btn.btn-primary:hover, .button.btn-primary:active, .button.btn-primary:focus, .button.btn-primary:hover, button.btn-primary:active, button.btn-primary:focus, button.btn-primary:hover {
        background-color: #fff;
        border-color: #fff;
        color: #617fde;
    }
    .btn.btn-secondary, .button.btn-secondary, button.btn-secondary {
        background-color: #fff;
        color: #617fde;
    }
    .btn.btn-secondary:focus, .btn.btn-secondary:hover, .button.btn-secondary:focus, .button.btn-secondary:hover, button.btn-secondary:focus, button.btn-secondary:hover {
        background-color: #617fde;
        border-color: #617fde;
        color: #fff;
    }
    .btn.btn-secondary:active, .button.btn-secondary:active, button.btn-secondary:active {
        background-color: #2c54d3;
        border-color: #2c54d3;
        color: #fff;
    }
    .btn.btn-normal, .button.btn-normal, button.btn-normal {
        background-color: #617fde;
        border-color: #5474db;
        color: #fff;
    }
    .btn.btn-normal:focus, .btn.btn-normal:hover, .button.btn-normal:focus, .button.btn-normal:hover, button.btn-normal:focus, button.btn-normal:hover {
        background-color: #5474db;
        border-color: #5474db;
        color: #fff;
    }
    .btn.btn-normal:active, .button.btn-normal:active, button.btn-normal:active {
        background-color: #2c54d3;
        border-color: #2c54d3;
        color: #fff;
    }
    button::-moz-focus-inner {
        border: 0 none;
        padding: 0;
    }
</style>
