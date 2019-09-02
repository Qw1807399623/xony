<template>
    <div class="relative" @mouseenter="stop" @mouseleave="start">
        <ul class="slide" :class="ulClass" :style="ulStyle">
            <li><img src="../../public/img/show/kv_a7rm4_yskqx_sony.jpg" alt="" :style="{width:innerWidth+'px'}"></li>
            <li><img src="../../public/img/show/kv_walkman40th_sony.jpg" alt="" :style="{width:innerWidth+'px'}"></li>
            <li><img src="../../public/img/show/PV-1210.jpg" alt="" :style="{width:innerWidth+'px'}"></li>
            <li><img src="../../public/img/show/kv_a7rm4_yskqx_sony.jpg" alt="" :style="{width:innerWidth+'px'}"></li>
        </ul>
            <a href="javascript:;" @click="move(-1)" class="carousel-control-next">
                <img src="../../public/img/show/left.png" alt="">
            </a>
            <a href="javascript:;" @click="move(1)" class="carousel-control-prev">
                <img src="../../public/img/show/right.png" alt="">
            </a>
    </div>
</template>
<script>
export default {
    data () {
        return {
            innerWidth:window.innerWidth,
            timer:null,
            canClick:true,
            ulClass:{ hasTrans:true },
            imgs:4,
            i:0
        }
    },
    created(){
        window.addEventListener("resize",()=>{
        this.innerWidth=window.innerWidth;
        })
        this.start();
    },
    methods: {
        stop(){
            clearInterval(this.timer);
        },
        start(){
            this.timer=setInterval(()=>{
                this.move(1);
            },3000)
        },
        move(i){
            if(this.canClick){
                this.canClick=false;
                if(i==-1&&this.i==0){
                    this.ulClass.hasTrans=false;
                    setTimeout(()=>{
                        this.i=this.imgs-1;
                        setTimeout(()=>{
                            this.ulClass.hasTrans=true;
                            this.i+=i;
                            setTimeout(()=>{
                                this.canClick=true;
                            },200)
                        },50)
                    },50)
                }else if(i==1&&this.i==this.imgs-1){
                    this.ulClass.hasTrans=false;
                    setTimeout(()=>{
                        this.i=0;
                            setTimeout(()=>{
                                this.ulClass.hasTrans=true;
                                this.i+=i;
                                setTimeout(()=>{
                                    this.canClick=true;
                                },50)
                            },50)
                    },50)
                }else{
                    this.i+=i;
                    setTimeout(()=>{
                        this.canClick=true;
                    },500)
                }
            }
        },
    },
    computed:{
        ulStyle(){//修饰所有图片的父元素
            var width=this.innerWidth*this.imgs+"px";
            var marginLeft=-this.i*this.innerWidth+"px";
            return { width, marginLeft }
        }
    }
}
</script>
<style scoped>
    .relative{
        position: relative;
    }
    .slide{
        display:flex;
        position: relative;
    }
    .slide.hasTrans{
        transition:all .5s linear;
    }
    .carousel-control-prev,
    .carousel-control-next{
        width:40px;height:100px;
        background-color:rgba(95, 95, 92, 0.3);
        border-radius:0.25rem;
        display: block;
  }
  .carousel-control-prev>img,
    .carousel-control-next>img{
      margin-top:70%;
  }
    .carousel-control-next{
      position: absolute;
       top:20px;
      left:2px;
      z-index: 999;
  }
    .carousel-control-prev{
             position: absolute;
        top:20px;
      right:3px;
      z-index: 999;
  }
</style>
