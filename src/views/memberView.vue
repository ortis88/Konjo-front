<script>
import axios from 'axios';
import { mapActions } from 'pinia';


export default{
  data(){
    return{
      memberName: "mor_2314",
      memberMima: "83r5^_",
      //fakestoreAPI
      isUserLogin:false,
    }
  },
  mounted(){

  },
  methods: {
  login() {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.memberName,
        password: this.memberMima
      })
    })
    .then(response => response.json())
    .then(json =>{
      console.log(json);
      localStorage.setItem('token',json.token);
      this.isUserLogin = true;
    })
    .catch(error => {
      console.error(error);
    });
  },
  logout(){
    localStorage.removeItem('token')
    this.isUserLogin = false;
    window.alert('您已登出');
  }
}
}

</script>

<template>
  <section class="member-info" v-if="isUserLogin">
    <h2>您已登入</h2>
    <button @click="logout">登出</button>
  </section>
  <section class="member">
    <div class="login-block">
      <h2>登入會員</h2>
      <label>
        帳號<input type="text" v-model="memberName">
      </label>
      <label>
        密碼<input type="text" v-model="memberMima">
      </label>
      <button @click="login">登入</button>
    </div>
    <div class="register-block">
      <h2>立即註冊會員</h2>
      <label>
        請設定帳號<input type="text">
      </label>
      <label>
        請設定密碼<input type="text">
      </label>
      <label>
        再次輸入密碼<input type="text">
      </label>
      <button>註冊</button>
    </div>
    <section class="plans">
      <h1>會員方案及課程</h1>
    </section>
  </section>
</template>

<style lang="scss" scoped>
</style>
