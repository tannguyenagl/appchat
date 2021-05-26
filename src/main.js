
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import firebase from 'firebase'
import { default as notification } from "./components/notification/index";


Vue.config.devtools = true;

Vue.config.productionTip = false


var config = {
  apiKey: "AIzaSyCZ0rQxPKCvtZuBQbWOld0YjC805PvMh3Q",
  authDomain: "appagl-773bb.firebaseapp.com",
  projectId: "appagl-773bb",
  storageBucket: "appagl-773bb.appspot.com",
  messagingSenderId: "302570461381",
  appId: "1:302570461381:web:f21fadbb696e2cb8acb8ac"
};

firebase.initializeApp(config);

// window.firebase=firebase;
// firebase.auth().onAuthStateChanged(()=>{
//   if(!app){
//     app = new Vue({
//       el: '#app',
//       store,
//       router,
//       components: { App },
//       template: '<App/>'
//     })
//   }
// })

firebase.auth().onAuthStateChanged(() => new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app'))

Vue.prototype.$notification = notification;