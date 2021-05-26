<template>
  <div id="app">
    <!-- <div v-bind:style="isLoading?{ display:'block'}:{ display:'none' }" class="loader"></div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/scss/reset.scss";
export default {
  name: "App", 
};
</script>

<style lang="scss">
</style>
