<template>
  <div class="c-input" v-bind:class="{ 'c-input__item--Child': half }">
    <input
      class="c-input__item"
      v-bind="{ ...$props, ...$attrs }"
      v-model="value"
      @input="$emit('input', $event.target.value)"
      @change="handleChange"
    />
    <span class="c-input__validate">{{ err }}</span>
  </div>
</template>

<script>
import "../assets/scss/input.scss";

export default {
  name: "inputS",
  data(){
    return({
      value:'',
    })
  },
  props: {
    half: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    placeHolder: {
      type: String,
      default: "text",
    },
    checkValidate: {
      type: Function,
      default:null
    },
    err:{
      type:String,
      default:""
    },
    id:{
      type:String,
      default:""
    }

  },
  methods:{
    handleChange(){
       if(this.checkValidate){
      this.checkValidate(this.value)
    }
    }
  }
};
</script>
<style lang="scss" scope>
</style>


