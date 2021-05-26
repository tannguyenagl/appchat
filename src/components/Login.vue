<template>
  <div>
    <CardAuth v-bind:title="`Login`">
      <form id="app" @submit="checkForm">
        <Input
          
          v-bind:type="`email`"
          v-bind:placeHolder="`Email`"
          v-model="email"
          v-bind:required="true"
          :checkValidate = "checkValidateEmail"
          v-bind:err="errEmail"
        />
        <Input
          
          v-bind:type="`password`"
          v-bind:placeHolder="`Password`"
          v-model="password"
          v-bind:required="true"
          :checkValidate = "checkValidatePassword"
          v-bind:err="errPassword"

        />

        <Button type="submit">Continue to Chat</Button>
      </form>
      <div class="c-login__subtitle">
        No yet signup?
        <router-link class="c-login__redirect" to="/signup"
          >Signup now</router-link
        >
      </div>
    </CardAuth>
  </div>
</template>

<script>
import CardAuth from "../components/Auth";
import Input from "../components/Input";
import Button from "../components/Button";
import { checkValidateEmail, checkValidatePassword } from "../util/validate";
import login from '../serviecs/firebase/login'
export default {
  name: "login",
  data() {
    return {
      email:'',
      password:'',
      title: "Login",
      errEmail:'',
      errPassword:''
    };
  },
  components: {
    CardAuth,
    Input,
    Button,
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if(this.errEmail + this.errPassword !== ""){
        this.$notification.open({
            title: "Error",
            type: "danger",
            message: 'Vui lòng điền đúng định dạng',
          });
        return
      }
      login(this.email,this.password)
    },
    openNotification(options) {
      this.$notification.open(options);
    },
    checkValidateEmail:function(data){
     this.errEmail = checkValidateEmail(data)
    },
    checkValidatePassword:function(data){
      this.errPassword = checkValidatePassword(data)
    }
  },
};
</script>
<style lang="scss" scope>
.c-auth .c-btnsubmit {
  margin-top: 20px;
}
.c-login__subtitle {
  margin: auto;
  margin-top: 25px;
  font-size: 14;
  font-weight: 500;
  color: #545d67;
  text-align: center;
  font-family: Raleway, sans-serif;
}

.c-login__redirect {
  color: #0084ff;
  font-family: Raleway, sans-serif;
}
</style>


