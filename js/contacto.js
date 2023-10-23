let form = document.querySelector("form")
form.addEventListener("submit", validar)
let ok = 0

function validar (e){
    
    validarNombre(e)
    validarTel(e)
    validarMail(e)
    validarAcerca(e)
    validarCheck(e)
    if (ok == 5){
        alert("Sus datos han sido enviados. Nos contactaremos a la brevedad")
    } else{
        e.preventDefault()
        ok = 0
    }
}

function validarNombre(e){
    if(form.nombre.value == ""){
        alert("Completá tu nombre y apellido")
    }else if ((/^[a-zA-Z ]{3,40}$/.test(form.nombre.value)) == false){
        alert("Completá tu nombre y apellido, mínimo 3 caractéres") 
    } else{
        ok++
        return ok
    }
}

function validarTel (e){ 
        if (form.tel.value == ""){
            alert("Completá tu teléfono") 
            ok = 0  
        } else if ((/^\d{10}$/.test(form.tel.value)) == false){
            alert("Completá un teléfono válido") 
        }else{
            ok++
            return ok
        }
    }

function validarMail(e){
    if (form.email.value == "") { 
        alert("Completa tu E-mail")
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)) == false){
        alert("Escribí un e-mail válido") 
    }else{
        ok++
        return ok
    }
}
function validarAcerca(e){
    if (form.acercaDe.value == ""){ 
        alert("Dejanos tus comentarios")
    } else if ((/^[a-zA-Z0-9 ]{1,301}$/.test(form.acercaDe.value)) == false){
        alert("Máximo 300 caractéres") 
    }else{
        ok++
        return ok
    }
}
function validarCheck(e){
    if (form.condiciones.checked == false){
        alert("Acepta las condiciones"); 
    }else{
        ok++
        return ok
    }
}
