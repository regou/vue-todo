<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import store from './store/index';
    export default {
        data: function () {
            return {
            }
        },
        store,
        ready: function () {
            var $wraper = $('#Vidage');

            var videoHtml = `
                <div class="Vidage__image"></div>

                  <video id="VidageVideo" class="Vidage__video" preload="metadata" loop autoplay muted>
                      <source src="/static/video/mountain_lake.mp4" type="video/mp4">
                  </video>

                <div class="Vidage__backdrop"></div>

            `;

            $wraper.html(videoHtml);
            var vv = new Vidage('#VidageVideo');
            window.vv = vv;

        },
        created: function () {

        }
    }
</script>

