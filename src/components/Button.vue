<template>
  <button v-on:click="submit" class="c-btnsubmit">
    <slot></slot>
  </button>
</template>

<script>
import "../assets/scss/btnsubmit.scss";

export default {
  name: "btnsubmit",
  props: {
    pressSubmit: {
      type: Function,
    },
  },
  methods: {
    submit() {
      if (this.pressSubmit) {
        this.pressSubmit();
      }
    },
  },
};
</script>
<style lang="scss" scope>
</style>


