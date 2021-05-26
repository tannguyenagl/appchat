<template>
  <div>
    <CardAuth v-bind:title="`Register`">
      <form id="app" @submit="checkForm">
          <Input
          
          v-bind:type="`text`"
          v-bind:placeHolder="`Firt name`"
          v-model="firtname"
          v-bind:required="true"
          v-bind:half="true"
          :checkValidate = "checkFirtname"
          v-bind:err="errFirtname"
          v-bind:id="`firtname`"
          

        />
        <Input
          
          v-bind:type="`text`"
          v-bind:placeHolder="`Last name`"
          v-model="lastname"
          v-bind:required="false"
          v-bind:half="true"
          v-bind:id="`lastname`"

        />
          <Input
          
          v-bind:type="`email`"
          v-bind:placeHolder="`Email`"
          v-model="email"
          v-bind:required="true"
          :checkValidate = "checkValidateEmail"
          v-bind:err="errEmail"
          v-bind:id="`email`"

        />
        <Input
          
          v-bind:type="`password`"
          v-bind:placeHolder="`Password`"
          v-model="password"
          v-bind:required="true"
          :checkValidate="checkValidatePassword"
          v-bind:err="errPassword"
          v-bind:id="`password`"

        />
        <Input
          
          v-bind:type="`password`"
          v-bind:placeHolder="`Confirm Password`"
          v-model="cpassword"
          v-bind:required="true"
          :checkValidate="checkValidatecPassword"
          v-bind:err="errcPassword"
          v-bind:id="`cpassword`"
          

        />
        <Button type="submit">Continue to Chat</Button>
      </form>
      <div class="c-signup__subtitle">
        Already signed up?
        <router-link class="c-signup__redirect" to="/login"
          >Login now</router-link
        >
      </div>
    </CardAuth>
  </div>
</template>

<script>
import CardAuth from "../components/Auth";
import Input from "../components/Input";
import Button from "./Button.vue";
import { checkValidateEmail , checkValidatePassword,checkValidatecPassword,checkFirtname } from "../util/validate";
import signup from '../serviecs/firebase/signup'
export default {
  name: "signup",
  data() {
    return(
      {
      firtname:"",
      lastname:"",
      email:"",
      password:"",
      cpassword:"",
      errEmail:"",
      errPassword:"",
      errcPassword:"",
      errFirtname:"",
  }
    )
  },
  components: {
    CardAuth,
    Input,
    Button,
  },
  
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if(this.errEmail + this.errPassword + this.errcPassword +this.errFirtname !== "" ){
        this.$notification.open({
            title: "Error",
            type: "danger",
            message: 'Vui lòng điền đúng định dạng',
          });
        return
      }
      signup(this.email,this.password,this.firtname,this.lastname)
      
      
    },
    checkFirtname : function(data){

      this.errFirtname = checkFirtname(data)
    },
    checkValidateEmail:function(data){
     this.errEmail = checkValidateEmail(data)
    },
    checkValidatePassword :function(data){

      this.errPassword = checkValidatePassword(data)
      if(this.cpassword){
        this.errcPassword = checkValidatecPassword(this.password,data)
      }

    },
    checkValidatecPassword : function(data){
      this.errcPassword = checkValidatecPassword(this.password,data)
    }
  },
};
</script>
<style lang="scss" scope>
.c-auth .c-btnsubmit {
  margin-top: 20px;
}
.c-signup__subtitle {
  margin: auto;
  margin-top: 25px;
  font-size: 14;
  font-weight: 500;
  color: #545d67;
  text-align: center;
  font-family: Raleway, sans-serif;
}

.c-signup__redirect {
  color: #0084ff;
  font-family: Raleway, sans-serif;
}
</style>


