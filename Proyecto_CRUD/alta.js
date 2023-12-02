const URL = "http://127.0.0.1:5000/" 

// Capturamos el evento de envío del formulario
document.getElementById('form-registro').addEventListener('submit', function (event) { 
    event.preventDefault(); // Evitamos que se envie el form 

    let formData = new FormData(); 
    formData.append('usuario', document.getElementById('usuario').value); 
    formData.append('nombre', document.getElementById('nombre').value); 
    formData.append('apellido', document.getElementById('apellido').value); 
    formData.append('tel', document.getElementById('tel').value); 
    formData.append('email', document.getElementById('email').value); 
    formData.append('password', document.getElementById('password').value);
    // Realizamos la solicitud POST al servidor 
    fetch(URL + 'usuarios', {
         method: 'POST',
         body: formData // Aquí enviamos formData en lugar de JSON 
        }) 
    //Después de realizar la solicitud POST, se utiliza el método then() para manejar la respuesta del servidor. 
    .then(function (response) { 
        if (response.ok) {
             return response.json(); 
            } else { 
                // Si hubo un error, lanzar explícitamente una excepción // para ser "catcheada" más adelante 
                throw new Error('Error al registrarse.'); 
            } 
        })
    // Respuesta OK 
    .then(function () { 
        // En caso de éxito 
        alert('Ud. se ha registrado correctamente.'); 
    }) 
    .catch(function (error) { 
        // En caso de error 
        alert('Error al registrarse.'); console.error('Error:', error);
    }) 
    .finally(function () { 
        // Limpiar el formulario en ambos casos (éxito o error)
        document.getElementById('usuario').value = ""; 
        document.getElementById('nombre').value = ""; 
        document.getElementById('apellido').value = ""; 
        document.getElementById('tel').value = ""; 
        document.getElementById('email').value = ""; 
        document.getElementById('password').value = ""; 
    })
 })   