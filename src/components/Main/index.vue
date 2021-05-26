<template>
  <div class="l-homepage l-mainhome">
    <ListFriend
      v-bind:listNotifi="listNotifi"
      v-bind:listFriends="listFriends"
      :getuidforChat="getuidforChat"
    />
    <ChatCurrent
      v-bind:currentFriend="currentFriend"
      v-bind:listChatCurrents="listChatCurrents"
      v-bind:listNotifi="listNotifi"
    />
  </div>
</template>

<script>
import ListFriend from "../Main/ListFriend";
import ChatCurrent from "../Main/ChatCurrent";
import firebase from 'firebase'
export default {
  name: "mainhome",
  components: {
    ListFriend,
    ChatCurrent,
  },
  data() {
    return {
      listFriends: [],
      listChatCurrents: [],
      currentFriend: "",
      constuctor: true,
      listNotifi: {},
    };
  },
  methods: {
    fetchFirebaseData() {
      firebase
        .database()
        .ref("listUser")
        .on("value", (snapshot) => {
          // this.fireData=snapshot.val();
          const data = Object.values(snapshot.val());
          const uid = firebase.auth().currentUser.uid;
          const found = data.find((element) => element.id == uid);
          localStorage.setItem("userInfo", JSON.stringify(found));
          this.listFriends = data;

          this.currentFriend = data[0].id;
          const data1 = data[0].id;
          let conversation;
          if (uid > data1) {
            conversation = uid + "-" + data1;
          } else {
            conversation = data1 + "-" + uid;
          }
          // alert(conversation)

          firebase
            .database()
            .ref(conversation)
            .on("value", (snapshot) => {
              let data;
              if (snapshot.val()) {
                data = Object.values(snapshot.val());
                this.listChatCurrents = data;
              }
            });
        });

      firebase
        .database()
        .ref(firebase.auth().currentUser.uid + "notifi")
        .on("value", (snapshot) => {
          const listNotifi = snapshot.val();
          if (listNotifi) {
            this.listNotifi = listNotifi;
          }
        });
    },
    getuidforChat(data) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const uid = userInfo.id;
      let conversation;
      this.currentFriend = data;
      if (uid > data) {
        conversation = uid + "-" + data;
      } else {
        conversation = data + "-" + uid;
      }

      firebase
        .database()
        .ref(conversation)
        .on("value", (snapshot) => {
          let data1;
          try {
            data1 = Object.values(snapshot.val());
          } catch{console.log('eroor')}

          if (data1) {
            this.listChatCurrents = data1;
          } else this.listChatCurrents = [];
        });
    },
  },
  created() {
    this.fetchFirebaseData();
  },
};
</script>
<style lang="scss">
</style>



