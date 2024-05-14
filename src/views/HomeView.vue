<script>
import { RouterLink, RouterView } from 'vue-router';
//組件引入
import fakePost from '@/components/home/fakePost.vue';

export default{
  components:{
    fakePost,
  },
  data(){
    return{
      bannerImages:[
        {src:"Banner1.jpg", alt:"Banner1"},
        {src:"Banner2.jpg", alt:"banner2"},
        {src:"Banner3.jpg", alt:"banner3"}
      ],
      bannerLength:"",
      curIndex:0,
      slideWidth:100,
    }
  },
  mounted() {
    this.showData();
  },
  methods: {
    showData(){
      this.bannerLength=this.bannerImages.length;
      console.log(this.bannerLength);
    },
    //Banner
    getBannerImgUrl(paths) {
      return new URL(`../assets/image/home-banner/${paths}`, import.meta.url).href
    },
    preImage(){
        this.curIndex--;
    },
    nextImage(){
      this.curIndex++;
    },
  },
  computed:{
    wrapPosition(){
      return `${this.curIndex*this.slideWidth}%`;
    },
  },
}

</script>

<template>
    <section class="homepage-banner">
      <div class="banner-text">
        <h1></h1><br/>
        <span></span>
      </div>
      <div class="banner-view">
        <button id="left-btn" 
        @click="preImage"
        v-if="this.curIndex>0"
        ><span><</span>
        </button>
        <div class="banner-wrap" :style="{right:wrapPosition}">
            <img v-for="(image,index) in bannerImages" :key="index" :src=getBannerImgUrl(image.src) :alt="image.alt" class="banner-img">
        </div>
        <button id="right-btn" 
        @click="nextImage"
        v-if="curIndex !== bannerLength-1"
        ><span>></span>
      </button>
      </div>
    </section>
    <section class="page-wrap">
      <div class="section-title">
        <h1>最新消息</h1>
        <div class="news-wrap">
          <fakePost/>
          <fakePost/>
          <fakePost/>
        </div>
      </div>
    </section>
    <section class="page-wrap">
      <div class="section-title">
        <h1>關於根性</h1>

      </div>
    </section>
    <section class="page-wrap">
      <div class="section-title">
        <h1>教練團隊</h1>

      </div>
    </section>
    <section class="page-wrap">
      <div class="section-title">
        <h1>會員方案</h1>

      </div>
    </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/sass/page/homeView.scss';
</style>