import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
  ]
});

router.beforeEach((to,from,next)=>{
  // if (to.path) {

  //   NProgress.start()
  // }
  let currentUser=firebase.auth().currentUser;
  let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);


  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('')
  
  else next()
});

// router.afterEach(() => {

//   NProgress.done()

// });
export default router
