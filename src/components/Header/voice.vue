<template>
    <div :class="['add-voice',{'voice-activate':isRecording}]" @click="recordHandler">
        <i :class="isRecording?'vt-mute' : 'vt-mic' "></i>
    </div>
</template>
<style>
    .add-voice::after{
        content: ' ';
        width: 6px;
        height: 6px;
        border-radius: 50% 50%;
        background: rgba(255,255,255,0.5);
        position: absolute;
        top: calc(50% - 3px);
        left: calc(50% - 3px);
    }
    .voice-activate.add-voice::after{
        animation: 'rip' 1.3s ease-in-out infinite;
    }
    @keyframes rip {
        0%{ transform: scale(1);opacity: 1;}
        100%{transform: scale(12);opacity: 0.2;}
    }
</style>
<script>

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    export default{
        props: {
            lang: {
                type: String,
                default: 'zh-CN'
            },
            onResult:{
                type: Function,
                default:function () {
                    return {text:'',confidence:-1};
                }
            }
        },
        created:function () {
            var comp = this;
            var recognition = this.recognition = new SpeechRecognition();
            recognition.lang = 'zh-CN';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.onresult = function(event) {
                var res = event.results[0][0];
                console.log('Confidence: ' , res.transcript, res.confidence);

                comp.onResult({text:res.transcript,confidence:res.confidence})
                comp.stop();
            }
            recognition.onnomatch = function(event) {
                console.log('nomatch: ' + event.results);
            }
            recognition.onerror = function(event) {
                console.error(event);
            }
            recognition.onspeechend = ()=>this.stop();
        },
        data(){
            return{
                isRecording:false,
                recognition:undefined
            }
        },
        methods:{
            stop:function () {
                this.recognition.stop();
                this.isRecording = false;
            },
            recordHandler:function () {
                if(!this.isRecording){
                    this.recognition.start();
                    this.isRecording = true;
                }else{
                    this.stop();
                }

            }
        }
    }
</script>
