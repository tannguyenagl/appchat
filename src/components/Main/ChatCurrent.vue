<template>
  <div class="l-listchatcurrent">
    <div class="l-listchatcurrent__wrap">
      <ChatItem @hook:mounted="scroll"
        v-for="(item, index) in listChatCurrentss"
        :key="index + 1 + renderId()"
        v-bind:titleDay="item.titleDay"
        v-bind:dataMessage="item.dataMessage"
        v-bind:indexAr="index"
        v-bind:id="`itemchat-` + index"
      />
    </div>

    <Inputda
      v-bind:listNotifi="listNotifi"
      v-bind:currentFriend="currentFriend"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

import anh1 from "../../assets/image/avatar.png";
import "../../assets/scss/listchatcurrent.scss";
import Inputda from "./Inputdata";
import ChatItem from "./ChatItem";
import { handletiteDay } from "../../util/handletiteDay";
import firebase from 'firebase'

export default {
  name: "chatcurrent",
  data() {
    return {
      fireData: null,
      user: {
        avatar: anh1,
        userName: "Kevin Guerrero",
      },
      frienduser: {
        avatar: "https://i.pravatar.cc/150?img=3",
        userFriendName: "Friend",
      },
    };
  },
  props: {
    listChatCurrents: {
      type: Array,
    },
    currentFriend: {
      type: String,
      default: "",
    },
    listNotifi: {
      typeo: Object,
    },
  },
  components: {
    Inputda,
    ChatItem,
  },
  computed: {
    listChatCurrentss() {
      const a = this.listChatCurrents;
      let ar = handletiteDay(a);

      return ar;
    },
  },

  methods: {
    handlell() {
      alert(firebase.auth().currentUser.name);
    },
    renderId() {
      return nanoid(10);
    },

    fetchFirebaseData() {
      firebase
        .database()
        .ref("movies")
        .on("value", (snapshot) => {
          this.fireData = snapshot.val();
        });
    },

    addMovie() {
      firebase.database().ref("movies").push({
        name: "xinchao",
      });
    },
    scroll(){
      const Id = this.listChatCurrents.length-1;
      const endId = "itemchat-"+Id 
      const el = document.getElementById(endId);
      el.scrollIntoView();

}
  },
};
</script>
<style lang="scss">
</style>



