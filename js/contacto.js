let form = document.querySelector("form")

function validar (e){
    let ok = 0
    if(form.nombre.value == ""){
        alert("Completá tu nombre y apellido")
        form.nombre.value == ""
    }else if ((/^[a-zA-Z]{3,20}$/.test(form.nombre.value)) == false){
        alert("Completá tu nombre y apellido, mínimo 3 caractéres") 
    } else{
        ok++
    }
    if (form.tel.value == ""){
        alert("Completá tu teléfono")   
    } else if ((/^\d{10}$/.test(form.tel.value)) == false){
        alert("Completá un teléfono válido") 
    }else{
        ok++
    }
    if (form.email.value == "") { 
        alert("Completa tu E-mail")
    } else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)) == false){
        alert("Escribí un e-mail válido") 
    }else{
        ok++
    }
    if (form.acercaDe.value == ""){ 
        alert("Dejanos tus comentarios")
    } else if ((/^[a-zA-Z0-9]{1,301}$/.test(form.acercaDe.value)) == false){
        alert("Máximo 300 caractéres") 
    }else{
        ok++
    }
    if (form.condiciones.checked == false){
        alert("Acepta las condiciones"); 
    }else{
        ok++
    }
    if (ok == 5){
        alert("Sus datos han sido enviados. Nos contactaremos a la brevedad")
    } else{
        e.preventDefault()
    }
}

form.addEventListener("submit", validar)




