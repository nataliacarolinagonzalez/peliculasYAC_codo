let form = document.querySelector("form")

function validar (e){
    if(form.nombre.value == ""){
        alert("Completá tu nombre y apellido")
        form.nombre.value == ""
        e.preventDefault()
    }else if ((/^[a-zA-Z]{3,10}$/.test(form.nombre.value)) == false){
        alert("Completá tu nombre y apellido, mínimo 3 caractéres")
        e.preventDefault() 
    }
    if (form.tel.value == ""){
        alert("Completá tu teléfono") 
        e.preventDefault()  
    } else if ((/^\d{10}$/.test(form.tel.value)) == false){
        alert("Completá un teléfono válido")
        e.preventDefault() 
    }
    if (form.email.value == "") { 
        alert("Completa tu E-mail")
        e.preventDefault()
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)) == false){
        alert("Escribí un e-mail válido")
        e.preventDefault() 
    }
    if (form.acercaDe.value == "") { 
        alert("Dejanos tus comentarios")
        e.preventDefault()
    } else if ((/^[a-zA-Z]{1,301}$/.test(form.acercaDe.value)) == false){
        alert("Máximo 300 caractéres")
        e.preventDefault() 
    }
    if (form.condiciones.checked == false){
        alert("Acepta las condiciones");
    }
}

form.addEventListener("submit", validar)




