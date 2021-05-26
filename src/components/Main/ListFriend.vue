<template>
  <div  class="l-listfriends">
    <div v-for="(item, index) in listFriends" :key="index + renderId()" v-on:click="handleOnclickFriend(item.id)">
         <Friend
     
      
      v-bind:name="item.firtname"
      v-bind:avatar="item.avatar"
      v-bind:noti="listNotifi[item.id] || {} "
      v-bind:times="item.times"
      v-bind:isActive="item.isActive"
      v-bind:id="item.id"
    />
    </div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import "../../assets/scss/listfriend.scss";
import Friend from "./Friend";
import firebase from 'firebase'

export default {
  name: "listfriend",
  props:{
    listFriends:{
      type:Array,
    },
    getuidforChat:{
      type:Function
    },
    listNotifi:{
      type:Object,
    }
  },
  methods:{
     renderId(){
      return nanoid(10)
    },
    handleOnclickFriend(id){
      try {
        if(this.listNotifi[id]){
        firebase.database().ref( firebase.auth().currentUser.uid+'notifi/'+id).set({
            isActive:false,
            message:""
  });
      }
      } catch (error) {
        console.log(error)
      }
      this.getuidforChat(id)
    }
  },
  components: {
    Friend,
  },
};
</script>
<style lang="scss">
</style>



