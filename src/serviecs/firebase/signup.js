import firebase from 'firebase'
import router from '../../router/index';
import { default as notification } from "../../components/notification/index";
export default function(email,password,firtname,lastname){
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const id = firebase.auth().currentUser.uid;
          firebase
            .database()
            .ref("listUser")
            .push({
              id: id,
              firtname: firtname || "",
              lastname: lastname || "",
              avatar:
                "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg",
            });

          router.replace('/')
        })
        .catch((e) => {
          notification.open({
            title: "Error",
            type: "danger",
            message: e.message,
          });

          // alert("oops" + e.message);
        });
}