<template>
  <div class="l-auth">
    <div class="c-auth">
      <div class="c-auth__title">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import "../assets/scss/auth.scss";

export default {
  name: "auth",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scope>
</style>


