<script setup>
import { RouterLink, RouterView } from 'vue-router';
import headerCom from '@/components/header.vue';

</script>

<template>
  <section>
    <headerCom/>
    <div id="app-wrap">
      <RouterView/>
    </div>
  </section>
</template>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
  
</style>
