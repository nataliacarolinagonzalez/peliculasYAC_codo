const URL = "http://127.0.0.1:5000/" 
// Realizamos la solicitud GET al servidor para obtener todos los usuarios 
fetch(URL + 'usuarios') 
    .then(function (response) { 
        if (response.ok) {
            return response.json();
        } else { 
            // Si hubo un error, lanzar explícitamente una excepción 
            // para ser "catcheada" más adelante 
            throw new Error('Error al obtener los usuarios.'); 
        } 
    }) 
    .then(function (data) { 
        let tablaUsuarios = document.getElementById('tablaUsuarios'); 
        // Iteramos sobre los usuarios y agregamos filas a la tabla 
        for (let usuario of data) { 
            let fila = document.createElement('tr'); 
            fila.innerHTML = '<td>' + usuario.usuario + '</td>' + '<td>' + usuario.nombre + '</td>' + '<td>' + usuario.apellido + '</td>' + '<td>' + usuario.tel + '</td>' + '<td>' + usuario.email + '</td>' + '<td>' + usuario.password + '</td>'; 
            tablaUsuarios.appendChild(fila); 
        } 
    }) 
    .catch(function (error) { 
        // En caso de error 
        alert('Error al agregar el usuario.'); 
        console.error('Error:', error); 
})