<template>
    <div>
        <div class="logo">
            <img src="../../public/img/reg/logo.jpg" class="w-100">
            <div  class="wave_flex">
                <div>
                    <ul class="Wave" :style="{'left':ismove_one?-left_one+'px':waveWidth+'px'}" :class="{'hidden':!ismove_one}">
                        <li><img src="../../public/img/reg/wave_01.png"></li>
                    </ul>
                </div>
                <div>
                    <ul class="Wave" :style="{'left':!ismove_one?-left_one+'px':waveWidth+'px'}" :class="{'hidden':ismove_one}">
                        <li><img src="../../public/img/reg/wave_01.png"></li>
                    </ul>
                </div>
            </div>
            <div class="wave_flex">
                <div  class="wave_flex">
                    <ul class="Wave" :style="{'left':ismove_two?-left_two+'px':waveWidth+'px'}" :class="{'hidden':!ismove_two}">
                        <li><img src="../../public/img/reg/wave_01.png"></li>
                    </ul>
                </div>
                <div>
                    <ul class="Wave" :style="{'left':!ismove_two?-left_two+'px':waveWidth+'px'}" :class="{'hidden':ismove_two}">
                        <li><img src="../../public/img/reg/wave_01.png"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            waveWidth:window.innerWidth,
            left_one:0,
            left_two:0,
            ismove_one:true,
            ismove_two:true,
        }
    },
    created () {
        this.start_one(1)
        this.start_two(1)
    },
    methods: {
        start_one(i){
            setInterval(()=>{
                this.left_one+=i;
                if(this.ismove_one&&this.left_one>1920-this.waveWidth){
                    this.left_one=0;
                    this.ismove_one=false;
                }else if(!this.ismove_one&&this.left_one>1920-this.waveWidth){
                    this.left_one=0;
                    this.ismove_one=true;
                }
            },10)
        },
        start_two(i){
           setInterval(()=>{
                this.left_two+=i;
                if(this.ismove_two&&this.left_two>1920-this.waveWidth){
                    this.left_two=0;
                    this.ismove_two=false;
                }else if(!this.ismove_two&&this.left_two>1920-this.waveWidth){
                    this.left_two=0;
                    this.ismove_two=true;
                }
            },5)
        }
    },
    computed:{
        ulStyle_one(){
            var left=-this.left_one+"px";
            return { left }
        },
        ulStyle_two(){
            var left=-this.left_two+"px";
            return { left }
        }
    }
}
</script>
<style scoped>
    .hidden{
        left:1920xp !important;
    }
    .wave_flex{
        display: flex
    }
    .w-100{
        width:100%
    }
    .logo{
        width:100%;
        position:relative;
        overflow:hidden;
    }
    .Wave{
        position:absolute;
        bottom:0;left:0;
        height:40px;
    }
    .logo>div{
        transition:all .5s linear;
    }
</style>
