<script>

export default{
  data(){
    return{
      data:[
        {
          accountImage:"Icon.png",
          accountName:"konjou_gymclub",
          postImage:"fake-post/post-img1.jpg",
          postText:"親愛的健身愛好者，根性KONJOU健身俱樂部很高興地宣布，我們將於5月20日至7月30日期間開展一項特別優惠活動，專為所有新加入會員而設！無論您是想挑戰自己、鍛煉身體、還是追求健康生活方式，我們都歡迎您加入我們的大家庭。現在是加入根性KONJOU健身俱樂部的最佳時機！在這段期間內，所有新會員將享受到一項獨特的夏日優惠：九折優惠！即使是最新的成員，您也可以以更優惠的價格獲得我們優質的健身設施和專業的健身指導。"
        }
      ],
      
    }
  },
  mounted(){

  },
  methods:{
    getPostImageUrl(paths){
      return new URL(`../../assets/image/${paths}`, import.meta.url).href
    },
  }
};

</script>

<template>
  <i class="fas fa-home"></i>
  <article class="fake-post">
    <div class="post-header">
      <div class="account-info">
        <img class="pro-img" :src=getPostImageUrl(data[0].accountImage) alt="大頭貼">
        <span>{{ data[0].accountName }}</span>
      </div>
      <div class="connect-account">
        <button id="follow" class="btn btn-primary">追蹤</button>
        <label>
          <i class="fa-solid fa-ellipsis"></i>
        </label>
      </div>
    </div>
    <div class="post-img-wrap">
      <img class="post-img" :src=getPostImageUrl(data[0].postImage) alt="貼文圖片1">
    </div>
    <div class="posting-interaction"></div>
    <p class="post-text">
      {{ data[0].postText }}
    </p>
    <div class="post-time"></div>
  </article>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/component/fakePost.scss';
</style>