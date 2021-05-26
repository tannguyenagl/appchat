<template>
      <div class="c-chatitem" >
        <div v-if="titleDay !==`` "  class="c-chatitem__linetite">
          <div class="c-chatitem__line"></div>
          <div class="c-chatitem__title">{{titleDay}}</div>
          <div class="c-chatitem__line"></div>
        </div>
        <div >
          <div class="c-chatitem__item">
            <img
              class="c-chatitem__item-avatar"
              v-bind:src="dataMessage.avatar"
            />
            <div class="c-chatitem__item-detail">
              <div class="c-chatitem__item-name">
                {{dataMessage.name}}
                <span class="c-chatitem__item-clock">{{dataMessage.timeCurrent}}</span>
              </div>
              <div class="c-chatitem__item-messagedetail">
                {{dataMessage.message}}
              </div>
            </div>
          </div>
        </div>
      </div>
</template> 

<script>
import "../../assets/scss/chatitem.scss";
import {nanoid} from 'nanoid'

export default {
  name: "chatitem",
 props:{
     titleDay:{
         type:String,
     },
     dataMessage:{
         type:Object,
     },
     indexAr:{
         type:Number,
     },
  
 },
 methods:{
     renderId(){
      return nanoid(10)
    }
  },
};
</script>
<style lang="scss">
</style>



