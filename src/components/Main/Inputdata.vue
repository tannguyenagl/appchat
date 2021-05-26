<template>
  <div>
    <div class="c-inputFile">
      <div class="inputFile__fileLoading">
        <div
          v-for="(item, index) in listFile"
          :key="index"
          class="inputFile__itemFile"
        >
          <img class="inputFile__imageFile" src="../../assets/image/file.png" />
          <div>
            <div class="inputFile__filename">{{ item.name }}</div>
            <div class="inputFile__datafile">{{ item.size }}</div>
          </div>
        </div>
      </div>

      <div

        id="c-content"
        data-placeholder="Enter to send. Shift + Enter to add new line"
        contenteditable="true"
        ref="inputFile1"
        v-on:click="handleFocus"
      ></div>
    </div>

    <div class="under__content">
      <div class="toolbar">
        <ul class="tool__list">
          <li class="tool">
            <button type="button" data-command="justifyLeft" class="tool__btn">
              <i class="fas fa-align-left"></i>
            </button>
          </li>
          <li class="tool">
            <button
              type="button"
              data-command="justifyCenter"
              class="tool__btn"
            >
              <i class="fas fa-align-center"></i>
            </button>
          </li>
          <li class="tool">
            <button type="button" data-command="bold" class="tool__btn">
              <i class="fas fa-bold"></i>
            </button>
          </li>
          <li class="tool">
            <button type="button" data-command="italic" class="tool__btn">
              <i class="fas fa-italic"></i>
            </button>
          </li>
          <li class="tool">
            <button type="button" data-command="underline" class="tool__btn">
              <i class="fas fa-underline"></i>
            </button>
          </li>
          <li class="tool">
            <button
              type="button"
              data-command="insertOrderedList"
              class="tool__btn"
            >
              <i class="fas fa-list-ol"></i>
            </button>
          </li>
          <li class="tool">
            <button
              type="button"
              data-command="insertUnorderedList"
              class="tool__btn"
            >
              <i class="fas fa-list-ul"></i>
            </button>
          </li>
          <li class="tool">
            <button type="button" data-command="createlink" class="tool__btn">
              <i class="fas fa-link"></i>
            </button>
          </li>
        </ul>
      </div>
      <div class="toollist__item1">
        <img
          v-on:click="handleClickFile"
          class="toollist__inputFile"
          src="../../assets/image/attach.png"
        />
        <Btnsubmit v-bind:pressSubmit="handleSend" >Send</Btnsubmit>
      </div>
    </div>
    <input
      class="toollist__inputfileDefault"
      v-on:change="loadDataInput"
      type="file"
      ref="inputFile"
    />
  </div>
</template>

<script>
import handleEditTexta from "../../action/edittable";
import "../../assets/scss/edittable.scss";
import Btnsubmit from "../Button";
import firebase from 'firebase'

export default {
  name: "inputdata",
  data() {
    return {
      value:'',
      listFile:[]
    };
  },
  props:{
    currentFriend:{
      type:String,
    },
    listNotifi:{
      type:Object,
    }
  },
  methods: {
    handleClickFile: function () {
      this.$refs.inputFile.click();
    },
    loadDataInput: function (e) {
      if (this.listFile.length >= 3) {
        alert("Max is 3 File");
        return;
      }
      const file = e.target.files[0];
      const name = file.name;
      const size = Math.floor(file.size / 1000) + "kb";
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const result = fileReader.result;

        if (result) {
          const res = {
            name,
            size,
            data: result,
          };
          this.listFile.push(res);
        }
        return;
      };
    },
    handleSend(){
      const dataSend = this.$refs.inputFile1.textContent;
      if(dataSend){

        const d = new Date();
        const time = d.getHours()+'h ' + d.getMinutes();
        const day = d.getDate() + '/' + d.getMonth()+1 +'/' +d.getFullYear();
        const userInfo = JSON.parse(localStorage.getItem("userInfo")) ;
        let conversation;
          if(userInfo.id > this.currentFriend){
           conversation = userInfo.id+'-'+this.currentFriend
    }else{
      conversation = this.currentFriend+'-'+userInfo.id
    }
          firebase.database().ref(conversation).push({

          titleDay: day,
          dataMessage: 
            {
              timeCurrent: time,
              avatar: userInfo.avatar,
              message: dataSend,
              name: userInfo.firtname + userInfo.lastname,
            }
          ,
        
          });
          firebase.database().ref( this.currentFriend+'notifi/'+userInfo.id).set({
            isActive:true,
            message:dataSend
  });
          this.$refs.inputFile1.textContent = "";
      }
  },
  handleFocus(){
      if(this.listNotifi[this.currentFriend]){
        firebase.database().ref( firebase.auth().currentUser.uid+'notifi/'+this.currentFriend).set({
            isActive:false,
            message:""
  });
      }
    },
  },
    
  components: {
    Btnsubmit,
  },
  mounted() {
    handleEditTexta();
  },
};
</script>
<style lang="scss">
</style>



