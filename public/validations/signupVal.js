const validatedForm = () =>{
    const username = document.getElementById('username0')
    const usernameError = document.getElementById('username0Error')
    const email = document.getElementById('email0')
    const emailError = document.getElementById('email0Error')
    const password = document.getElementById('password1')
    const passwordError = document.getElementById('password1Error')
    const password2 = document.getElementById('password2')
    const password2Error = document.getElementById('password2Error')
    
    if(username.value == ""){
        username.style.border = "1px solid red"
        usernameError.textContent = "Please provide a username"
        usernameError.style = "color: red"
        return false
    }else{
        username.style.border = "1px solid blue"
        usernameError.textContent = ""
    }

    if(email.value == ""){
        email.style.border = "1px solid red"
        emailError.textContent = "Please provide an email"
        emailError.style = "color: red"
        return false
    }else{
        email.style.border = "1px solid blue"
        emailError.textContent = ""
    }

    if(password.value == ""){
        password.style.border = "1px solid red"
        passwordError.textContent = "Please enter password"
        passwordError.style = "color: red"
        return false
    }else{
        password.style.border = "1px solid blue"
        passwordError.textContent = ""
    }

    if(password2.value == ""){
        password2.style.border = "1px solid red"
        password2Error.textContent = "Please enter password"
        password2Error.style = "color: red"
        return false
    }else if(password2.value != password1.value){
        password2.style.border = "1px solid red"
        password2Error.textContent = "Password should be the same as the one entered above"
        password2Error.style = "color: red"
        return false
    }else{
        password2.style.border = "1px solid blue"
        password2Error.textContent  = ""
    }

    
}

module.exports = validatedForm