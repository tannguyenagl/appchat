<template>
  <div class="c-frienditem" v-bind:id="id" v-bind:class="{ frienditem__isActive: noti.isActive }">
    <img
      class="c-frienditem__section1"
      v-bind:src="avatar"
    />
    <div class="c-frienditem__section2">
      <div class="c-frienditem__section2-name">
        {{ name }}
        <img class="c-frienditem__section2-ring" src="../../assets/image/ringNoti.png" />
      </div>
      <div class="c-frienditem__section2-minimessage">
        <div class="c-frienditem__section2-sortmessage">{{ noti.message }}</div>
        <div class="c-frienditem__section2-times">{{ times }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/scss/friend.scss"
export default {
  name: "friend",
  props: {
    
    avatar: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    noti: {
      type: Object,
    },
    times: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
</style>



