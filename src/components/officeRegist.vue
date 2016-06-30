<template>
    <div class="sign signup-page">
        <div class="card sign-in" id="signup-box">

            <div class="card-section">
                <form onsubmit="return false;" v-el:login-form-regist>
                    <div class="form form-horizontal" id="signup-form">
                        <div class="row name">
                        <span class="icon name">
                          <i icon="name" class="icon_sign icon-name-gray"></i>
                        </span>
                            <input type="text" autofocus="" autocomplete="on" placeholder="昵称（可选）" value="" name="name" class="required" id="nickname" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                            <span class="input-bar"></span>
                        </div>

                        <div class="row email">
                            <span class="icon email">
                              <i icon="email" class="icon-email-gray icon_sign"></i>
                            </span>
                            <input type="email" required="" autocomplete="off" placeholder="邮箱" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$" value="" name="email" class="required" id="set-username" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                            <span class="input-bar"></span>
                            <div class="error email-warn">
                                <p id="taken_warn" class="warn may-long">
                                    <span class="warn-icon"><i class="icon-warn icon_sign"></i></span>
                                    <span>该邮箱已经被注册，请<a href="/signin" class="switch-login">登录</a> 或 <a href="/sign/requestRestPassword">重置密码</a>。</span>
                                </p>
                                <p id="invalid_warn" class="warn">
                                    <span class="warn-icon"><i class="icon-warn icon_sign"></i></span>
                                    <span>邮箱格式不正确</span>
                                </p>
                                <p id="server_error" class="warn">
                                    <span class="warn-icon"><i class="icon-warn icon_sign"></i></span>
                                    <span>服务器错误</span>
                                </p>
                                <p class="warn" id="not_blank">
                                    <span class="warn-icon"><i class="icon-warn icon_sign"></i></span>
                                    <span>邮箱不能为空</span>
                                </p>
                            </div>
                        </div>

                        <div class="row password">
                        <span class="icon lock">
                          <i icon="lock" class="icon-lock-gray icon_sign"></i>
                        </span>
                            <input type="password" required="" placeholder="密码" name="password" class="required" id="set-password" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;" autocomplete="off">
                            <span class="input-bar"></span>
                            <div class="error">
                                <p id="length_warn1" class="warn">
                                    <span class="warn-icon"><i class="icon-warn icon_sign"></i></span>
                                    <span>密码长度需为6~20个字符。</span>
                                </p>
                                <p id="login_length_warn_empty" class="warn">
                                    <span class="warn-icon"><i class="icon-warn icon_sign"></i></span>
                                    <span>密码不能为空</span>
                                </p>
                            </div>
                        </div>

                        <div class="row submit signup-btn btns">
                            <button data-analy="signup" type="submit" class="btn-initial button btn-med analy" id="submit-btn">创建免费账户</button>
                            <!--<button class="btn-loading button btn-med disabled=">创建免费账户...</button>-->
                        </div>
                    </div>
                </form>

                <div class="signin-sns">
                    <div class="middle-line sns-title">
                        使用第三方账户登录  </div>
                    <ul class="sns">
                        <li class="weibo">
                            <a title="微博" hidefocus="true" href="">
                                <i class="icon_sign icon-weibo"></i>
                            </a>
                        </li>
                        <li class="wechat second">

                            <a title="微信" hidefocus="true" href="">
                                <i class="icon_sign icon-wechat"></i>
                            </a>
                        </li>
                        <li class="qq">
                            <a title="QQ" hidefocus="true" href="">
                                <i class="icon_sign icon-qq"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="link signin sign-link">
                <span class="link">
                  已有账户？              <a v-link="{'name':'login'}" class="signin-link">登录</a>
                </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        ready(){
            let self = this;
            let newAccountArray = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : [];
            $(this.$els.loginFormRegist).on('submit',function (e) {
                let formArray = $(e.target).serializeArray();
                let newAccount ={};
                _.forEach(formArray,(item)=>{
                    newAccount[item.name] = item.value
                })
                localStorage.setItem('account',JSON.stringify(newAccountArray));
                self.$router.go({name:'login'})
            })
        }
    }
</script>

<style>
    body {
        background: #fdfdfd none repeat scroll 0 0;
        font-family: -apple-system,".SFNSText-Regular","Helvetica Neue","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif,Meiryo;
        line-height: 1;
    }

    .sign {
        color: #333;
        margin: 48px auto;
        max-width: 400px;
        min-width: 300px;
        float: right;
    }
    .card {
        margin: 0 auto;
    }

    .card-section {
        background-color: #fff;
        border: 1px solid #ececec;
        border-radius: 2px;
        padding: 40px 50px;
    }
    .sign .row {
        border-bottom: 1px solid #ececec;
        border-radius: 1px;
        margin-bottom: 28px;
        transition: border-color 0.15s ease-in-out 0s;
    }
    .sign .row.active {
        transition: border-color 0.15s ease-in-out 0s;
    }
    .sign .row.email input, .sign .row.name input, .sign .row.password input {
        border: 0 none;
        font-size: 16px;
        padding: 10px 10px 8px 8px;
        width: calc(100% - 70px);
    }
    .sign .row.forgot-password, .sign .row.submit {
        border-bottom: medium none;
    }
    .sign .row.submit {
        margin: 0 auto 12px;
    }
    .sign .row.forgot-password {
        font-size: 13px;
        margin: 0;
        text-align: left;
    }
    .middle-line, .signin-sns ul {
        text-align: center;
    }
    .input-bar {
        display: block;
        height: 1px;
        width: 100%;
    }
    .input-bar::after, .input-bar::before {
        background-color: #617fde;
        border-radius: 1px;
        bottom: -1px;
        content: "";
        height: 1px;
        position: absolute;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        width: 0;
    }
    .input-bar::before {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        left: 50%;
    }
    .input-bar::after {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        right: 50%;
    }
    input:focus ~ .input-bar::before {
        left: 0;
        width: 51%;
    }
    input:focus ~ .input-bar::after {
        right: 0;
        width: 50%;
    }
    .switch-site {
        display: none;
    }
    .chrome-extension .forgot-password .switch-site {
        display: inline;
        float: left;
    }
    .sign .row .icon {
        position: relative;
        top: 6px;
    }
    .middle-line::after, .middle-line::before {
        background-color: #ececec;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
    }
    .middle-line::before {
        margin-left: -50%;
        right: 0.5em;
    }
    .middle-line::after {
        left: 0.5em;
        margin-right: -50%;
    }
    .sns-title {
        color: #c7c7c7;
        font-size: 13px;
        padding: 30px 0 36px;
    }
    .signin-sns ul li {
        display: inline-block;
    }
    .signin-sns ul li.second {
        margin: 0 42px;
    }
    .signin-sns ul li:hover {
        opacity: 0.9;
    }
    .link.sign-link, .link.signin, .link.signup {
        font-size: 14px;
        padding-top: 35px;
        text-align: center;
    }
    .link.message {
        line-height: 25px;
        padding: 40px 0 0;
    }
    .link.success {
        padding: 40px 0;
    }
    .button {
        cursor: pointer;
        font-size: 16px;
        width: 100%;
    }
    .error {
        position: absolute;
        right: 0;
        z-index: 2;
    }
    .error .warn {
        color: #ff3180;
        display: none;
        font-size: 13px;
        line-height: 1.1;
        margin-top: 6px;
    }
    .error.long {
        position: relative;
    }
    @media only screen and (max-width: 460px) {
        .sign {
            width: 95%;
        }
        .sign .signin-sns ul li:nth-child(2) {
            margin: 0 10px;
        }
    }
</style>
