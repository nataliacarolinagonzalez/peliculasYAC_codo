let formLogin = document.querySelector("#form-login")
let formRegistro = document.querySelector("#form-registro")
let btnRegistro = document.querySelector("#link-registro")
let btnLogin = document.querySelector("#link-login")

btnLogin.addEventListener("click", function(){
    formRegistro.style.display = "block"
    formLogin.style.display = "none"
})

btnRegistro.addEventListener("click", function(){
    formLogin.style.display = "block"
    formRegistro.style.display = "none"

})





function validarLogin (e){
    let ok = 0
    
    if (formLogin.email.value == "") { 
        alert("Completa tu E-mail")
        //e.preventDefault()
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formLogin.email.value)) == false){
        alert("Escribí un e-mail válido")
        //e.preventDefault() 
    }else{
        ok++
    }
    if (formLogin.password.value == ""){ 
        alert("Ingresa una clave")
        //e.preventDefault()
    } else if ((/^\w{8,10}$/.test(formLogin.password.value)) == false){
        alert("La clave debe entre 8 y 10 caracteres entre mayúsculas, minúsculas y números")
        //e.preventDefault() 
    }else{
        ok++
    }
    if (ok !== 2){
        e.preventDefault()
    } 
}

formLogin.addEventListener("submit", validarLogin)