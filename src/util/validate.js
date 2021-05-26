export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePass(pass) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
    return re.test(pass)

}

export function checkValidateEmail(data) {
    if (data == "") {
        return "Không được để trống"
    }
    
    if (!validateEmail(data)) {
        return "Vui lòng điền đúng định email"
    }
    if (validateEmail(data)) {
        return ""
    }
    
}

export function checkValidatePassword (data){
    if(data == ""){
        return "Không được để trống"
      }
    
    if(!validatePass(data)){
      return "Password phải có ít nhất 6 kí tự gồm chữ cái không dấu và số"
    }
    if(validatePass(data)){
        return ""
      }
    
   }
export function checkValidatecPassword(pass,data){ 
    if(!data){
            return "Không được để trống"
        }
        if(pass !== data){
           
            return "Không trùng nhau"
        }
        if(!validatePass(data)){

            return "Password phải có ít nhất 6 kí tự gồm chữ cái không dấu và số"
          }
        if(validatePass(data)){
            return ""
        }
  }

  export function checkFirtname(data){
      if(data == ""){
       return "Không được để trống"
     }else{
       return ""
     }
    }