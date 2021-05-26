import firebase from 'firebase'
import router from '../../router/index';
import { default as notification } from "../../components/notification/index";

function login(email,password){
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
        //   notification.open({'title':'Succes',  'message':'Đăng nhập thành công'});
          router.replace('/');

        })
        .catch((e) => {
          
            notification.open({
                      title: "Error",
                      type: "danger",
                      message: e.message,
                    });
          
        });
}

export default login