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

      aboutTags:[
        {name:"器材設備",id:"equitment"},
        {name:"附設空間",id:"space"},
        {name:"使用規定",id:"rule"},
      ],
      handleAboutPage:"equipment",

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
        <h1>根性KONJO</h1><br/>
        <span>釋放您藏在表面下的潛力</span>
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
        </div>
      </div>
    </section>

    <section class="page-wrap">
      <div class="section-title">
        <h1>關於根性</h1>
        <div class="about-wrap">
          <div class="about-tag">
            <div>
              <input type="radio" id="about-select1" value="equipment" v-model="handleAboutPage">
              <label for="about-select1">器材設備</label>
            </div>
            <div>
              <input type="radio" id="about-select2" value="space" v-model="handleAboutPage">
              <label for="about-select2">附加空間</label>
            </div>
            <div>
              <input type="radio" id="about-select3" value="rule" v-model="handleAboutPage">
              <label for="about-select3">使用規則</label>
            </div>
          </div>
          <div class="about-view">
            <div id="equipment" v-if="handleAboutPage === 'equipment'">
              <p>器材裝備</p>
            </div>
            <div id="space" v-if="handleAboutPage === 'space'">
              <p>附加空間</p>
            </div>
            <div id="rule" v-if="handleAboutPage === 'rule'">
              <p>使用規則</p>
            </div>
          </div> 
        </div>
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