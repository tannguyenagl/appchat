<template>
  <div class="l-homepage">
    <div class="c-hearder">
      <div class="c-header__left">
        <input class="c-header__left-search" placeholder="Search..." />
        <img
          class="c-header__left-icon"
          src="../assets/image/searchHeader.png"
        />
      </div>
      <div class="c-header__title">Messages</div>
      <div class="c-header__right">
        <div class="c-header__notif">
          <img
            class="c-header__notif-img"
            src="../assets/image/notification.png"
          />
          <img class="u-header__ring" src="../assets/image/ringNoti.png" />
        </div>
        <div
          v-click-outside="hide"
          @click="handleInfoDetail"
          class="c-header__info"
        >
          <div class="c-header__name">{{ user.name }}</div>
          <img class="c-header__avatar" v-bind:src="user.avatar" />
          <div
            v-on:click="handleDataInfoDetail"
            v-show="showDetailInfo"
            class="c-header__infodetail"
          >
            <img
              class="c-header__infodetail-avatar"
              src="../assets/image/avatarDetail.png"
            />
            <div class="c-header__info-text c-header__info-name">
              <div>
                <p class="c-header__info-texttitle c-header__info-childname">
                  Frist name
                </p>
                <input
                  class="c-header__info-text c-header__info-inputname"
                  value="Kevin"
                />
              </div>
              <div>
                <p class="c-header__info-texttitle c-header__info-childname">
                  Last name
                </p>
                <input
                  class="c-header__info-text c-header__info-inputname"
                  value="Guerrero"
                />
              </div>
            </div>
            <div>
              <p class="c-header__info-texttitle">Email</p>
              <input
                class="c-header__info-text c-header__info-inputemail"
                value="kevin.guerrero@mail.com"
              />
            </div>
            <div class="c-header__sperate"></div>
            <Button>Update</Button>
            <router-link to="/login">
              <button @click="logout" class="c-header__info-logout">
                Logout
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import avatar from "../assets/image/avatar.png";
import "../assets/scss/home.scss";
import "../assets/scss/header.scss";
import Button from "./Button";
import firebase from 'firebase'

export default {
  name: "c-headerHome",
  data() {
    return {
      showDetailInfo: false,
      user: {
        name: "Kevin Guerero",
        avatar: avatar,
      },
    };
  },
  methods: {
    handleInfoDetail: function () {
      this.showDetailInfo = !this.showDetailInfo;
    },
    hide() {
      this.showDetailInfo = false;
    },
    handleDataInfoDetail: function (e) {
      e.stopPropagation();
    },

    logout() {
      firebase.auth().signOut();
    },
  },

  components: {
    Button,
  },
  mounted() {
    this.popupItem = this.$el;
  },

  directives: {
    ClickOutside,
  },
};
</script>
<style lang="scss" scope>
</style>



