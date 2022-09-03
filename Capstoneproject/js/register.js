

let fnCheckRadioButton = (btn) => {
    if(btn === 'isMale' ) {
        document.getElementById('isFemale').checked = false;
        document.getElementById('isMale').checked = true;
    }
    else {
        document.getElementById('isFemale').checked = true;
        document.getElementById('isMale').checked = false;
    }
}


let fnValidate = (param,confirmPass) => {
    // if(param._email)
}

let fnSubmit = () => {
    let _email = document.getElementById('input_Email').value;
    let _pass = document.getElementById('input_Password').value;
    let _passConfirm = document.getElementById('input_Passwordconfirm').value;
    let _name = document.getElementById('input_Name').value;
    let _phone = document.getElementById('input_Phone').value;
    let _isGender = document.getElementById('isMale').checked

    let newUser = new myUser(_email, _pass, _name, _phone, _isGender,_passConfirm);
    let isValid = fnValidate(newUser);

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        data: {
            email: _email,
            password: _pass,
            name: _name,
            gender: _isGender,
            phone: _phone
        }
    });

     //thành công 
    promise.then(function(result){
        window.alert("Đăng ký thành công!")
    });

    promise.catch(function(err){
       
        window.alert(err.response.data.message)
    })
}

import {myUser} from "../models/user"