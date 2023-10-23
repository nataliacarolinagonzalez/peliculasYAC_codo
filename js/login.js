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

//Validación forms
let ok = 0
function validarLogin (e){
    validarMailLogin(e)
    validarPassLogin(e)
    if (ok == 2){
        alert("Sus datos son correctos")
        e.preventDefault()
        formLogin.reset()
    }else{
        e.preventDefault()
        ok = 0
    }
}

function validarRegistro (e){
    validarNombre(e)
    validarApellido(e)
    validarTel(e)
    validarMailRegistro(e)
    validarPassRegistro(e)
    validarCheck(e)
    if (ok == 6){
        alert("Se ha registrado con éxito.")
        e.preventDefault()
        formRegistro.reset()
    } else{
        e.preventDefault()
        ok = 0
    }
}

//Funciones individuales de validacion. Como hacer p usar la misma funcion p validar mail y pass, si tengo q apuntar a 2 form distintos???

function validarMailLogin(e){
    if (formLogin.email.value == "") { 
        alert("Completa tu E-mail")
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formLogin.email.value)) == false){
        alert("Escribí un e-mail válido") 
    }else{
        ok++
        return ok
    }
}
function validarPassLogin(e){
    if (formLogin.password.value == ""){ 
        alert("Ingresa una clave")
    } else if ((/\w{8,10}/.test(formLogin.password.value)) == false){
        alert("Contraseña incorrecta")
        console.log(formLogin.password.value) 
    }else{
        ok++
        return ok
    }
}
function validarPassRegistro(e){
    if (formRegistro.password.value == ""){ 
        alert("Ingresa una clave")
    } else if ((/\w{8,10}/.test(formRegistro.password.value)) == false){
        alert("Contraseña incorrecta")
        console.log(formRegistro.password.value) 
    }else{
        ok++
        return ok
    }
}
function validarMailRegistro(e){
    if (formRegistro.email.value == "") { 
        alert("Completa tu E-mail")
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRegistro.email.value)) == false){
        alert("Escribí un e-mail válido") 
    }else{
        ok++
        return ok
    }
}
function validarNombre(e){
    if(formRegistro.nombre.value == ""){
        alert("Completá tu nombre")
    }else if ((/^[a-zA-Z ]{3,20}$/.test(formRegistro.nombre.value)) == false){
        alert("Completá tu nombre, mínimo 3 caractéres") 
    } else{
        ok++
        return ok
    }
}
function validarApellido(e){
    if(formRegistro.apellido.value == ""){
        alert("Completá tu apellido")
    }else if ((/^[a-zA-Z ]{3,20}$/.test(formRegistro.apellido.value)) == false){
        alert("Completá tu apellido mínimo 3 caractéres")
    } else{
        ok++
        return ok
    }
}
function validarTel (e){ 
    if (formRegistro.tel.value == ""){
        alert("Completá tu teléfono")  
    } else if ((/^\d{10}$/.test(formRegistro.tel.value)) == false){
        alert("Completá un teléfono válido") 
    }else{
        ok++
        return ok
    }
}
function validarCheck(e){
    if (formRegistro.condiciones.checked == false){
        alert("Acepta las condiciones"); 
    }else{
        ok++
        return ok
    }
}
