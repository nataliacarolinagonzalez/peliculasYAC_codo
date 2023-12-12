const URL = "http://127.0.0.1:5000/" 
//const URL = "http://caritogonza.pythonanywhere.com/" 

let formAdmin = document.querySelector("#form-admin")
let formRegistro = document.querySelector("#form-registro")
/* let btnRegistro = document.querySelector("#link-registro") */
/* let btnLogin = document.querySelector("#link-login") */
let login = document.querySelector("#login")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let admin = document.querySelector("#admin")
let listado = document.querySelector("#listado")
//let saludo = document.querySelector("#saludo")

formAdmin.addEventListener("submit", function(e){
    e.preventDefault()

    fetch(URL + 'admin') 
    .then(async function (response) { 
        if (response.ok) {
            let rta = await (response.json())
            console.log(rta)
            /* console.log(rta[0].email)
            console.log(rta[1].email) */
            let email_ingresado = email.value
            let password_ingresado = password.value
            //console.log(email_ingresado)
            //console.log(password_ingresado)
            validarAdmin(rta, email_ingresado, password_ingresado)
        } else {  
            throw new Error('Error al obtener los usuarios.'); 
        }
        })    
    .catch(function (error) { 
        // En caso de error 
        alert('Error al agregar el usuario.'); 
        console.error('Error:', error); 
    })

}
)


function validarAdmin(rta, email_ingresado, password_ingresado){
let ac = 0
    for (let i=0; i < rta.length ; i++){
        if (email_ingresado === rta[i].email){
            if (password_ingresado === rta[i].password){
            //console.log(rta[i].email, rta[i].password)
            let usuario = rta[i].usuario
            sessionStorage.setItem('usuario', usuario)
            location.href="us_admin.html";
            } else{
                alert("Contraseña incorrecta")
            }      
        }else{
            ac++
            if (ac == rta.length){
                alert("Usuario no encontrado")
            }
                
        }
    }
        
}

/* function validarAdmin(rta, email_ingresado, password_ingresado){
    
    for (let i=0; i < rta.length; i++){
       
        if (email_ingresado === rta[i].email && password_ingresado === rta[i].password){
            //console.log(rta[i].email, rta[i].password)
            //alert("Ud puede ingresar")
            
            let usuario = rta[i].usuario
            sessionStorage.setItem('usuario', usuario)
            location.href="us_admin.html";
            }
            if (email_ingresado === rta[i].email){
                if (password_ingresado === rta[i].password){
                console.log(rta[i].email, rta[i].password)
                alert("Ud puede ingresar")
                 admin.style.display = "none"
                listado.style.display = "block" 
                let usuario = rta[i].usuario
                sessionStorage.setItem('usuario', usuario)
                location.href="us_admin.html";
                } else{
                    alert("Contraseña incorrecta")
                }
            } else{
                alert("Usuario no encontrado")
            }
        }
        
    } */



