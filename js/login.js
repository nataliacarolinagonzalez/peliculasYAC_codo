let formLogin = document.querySelector("#form-login")
let formRegistro = document.querySelector("#form-registro")
let btnRegistro = document.querySelector("#link-registro")
let btnLogin = document.querySelector("#link-login")
let login = document.querySelector("#login")
let registro = document.querySelector("#registro")



//Alterna form login con form registro
btnLogin.addEventListener("click", function(){
    registro.style.display = "none"
    login.style.display = "block"
})

btnRegistro.addEventListener("click", function(){
    login.style.display = "none"
    registro.style.display = "block"

})

formRegistro.addEventListener("submit", validarRegistro)
formLogin.addEventListener("submit", validarLogin)

function validarLogin (e){
    let ok = 0
    if (formLogin.email.value == "") { 
        alert("Completa tu E-mail")
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formLogin.email.value)) == false){
        alert("Escribí un e-mail válido") 
    }else{
        ok++
    }
    if (formLogin.password.value == ""){ 
        alert("Ingresa una clave")
    } else if ((/\w{8,10}/.test(formLogin.password.value)) == false){
        alert("Contraseña incorrecta")
        console.log(formLogin.password.value) 
    }else{
        ok++
    }
    if (ok == 2){
        alert("Sus datos son correctos")
    }else{
        e.preventDefault()
    }
}


function validarRegistro (e){
    let ok = 0
    if(formRegistro.nombre.value == ""){
        alert("Completá tu nombre y apellido")
        formRegistro.nombre.value == ""
        //e.preventDefault()
    }else if ((/^[a-zA-Z]{3,20}$/.test(formRegistro.nombre.value)) == false){
        alert("Completá tu nombre y apellido, mínimo 3 caractéres")
        //e.preventDefault() 
    } else{
        ok++
    }
    if (formRegistro.tel.value == ""){
        alert("Completá tu teléfono") 
        //e.preventDefault()  
    } else if ((/^\d{10}$/.test(formRegistro.tel.value)) == false){
        alert("Completá un teléfono válido")
        //e.preventDefault() 
    }else{
        ok++
    }
    if (formRegistro.email.value == "") { 
        alert("Completa tu E-mail")
        //e.preventDefault()
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRegistro.email.value)) == false){
        alert("Escribí un e-mail válido")
        //e.preventDefault() 
    }else{
        ok++
    }
    if (formRegistro.password.value == ""){ 
        alert("Ingresa una clave")
    } else if ((/\w{8,10}/.test(formRegistro.password.value)) == false){
        alert("Contraseña incorrecta")
    }else{
        ok++
    }
    if (formRegistro.condiciones.checked == false){
        alert("Acepta las condiciones");
        //e.preventDefault() 
    }else{
        ok++
    }
    if (ok == 5){
        alert("Se ha registrado con éxito.")
    } else{
        e.preventDefault()
    }
}



