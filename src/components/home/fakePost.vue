<script>

export default{
  data(){
    return{
      data:[
        {
          postImage:"",
          postTitle:"",
          postContent:"",
          postTime:"",
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
  <article class="fake-post">
    <div class="post-img-container">
      <img class="post-img" :src=getPostImageUrl(data[i].postImage) alt="貼文圖片1">
    </div>
    <div class="postText">
      <h3>{{ data[i].postTitle }}</h3>
      <div class="posting-interaction"></div>
      <p class="post-text">
        {{ data[i].postContent }}
      </p>
      <div class="post-time">
        {{ data[i].postTime }}
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/component/fakePost.scss';
</style>