const URL = "http://127.0.0.1:5000/" 
//const URL = "http://caritogonza.pythonanywhere.com/" 

const app = Vue.createApp({ 
    data() { 
        return { 
            usuario: '', 
            nombre: '', 
            apellido: '', 
            tel: '', 
            password: '', 
            email: '', 
            mostrarDatosUsuario: false, 
        }; 
    }, 
    methods: { 
        obtenerUsuario() { 
            fetch(URL + 'usuarios/' + this.usuario) 
                .then(response => { 
                    console.log(this.usuario)

                    if (response.ok) { 
                        return response.json() 
                    } else { 
                        //Si la respuesta es un error, lanzamos una excepción para ser "catcheada" más adelante en el catch. 
                        throw new Error('Error al obtener los datos del usuario.') 
                    } 
                }) 
                .then(data => { 
                    this.nombre = data.nombre; 
                    this.apellido = data.apellido; 
                    this.tel = data.tel; 
                    this.password = data.password; 
                    this.email = data.email; 
                    this.mostrarDatosUsuario = true; 
                }) 
                .catch(error => {
                    console.log(error); 
                    alert('Usuario no encontrado.'); 
                }) 
            }, 
            guardarCambios() {
                const formData = new FormData(); 
                formData.append('usuario', this.usuario); 
                formData.append('nombre', this.nombre); 
                formData.append('apellido', this.apellido); 
                formData.append('password', this.password); 
                formData.append('tel', this.tel);
                formData.append('email', this.email);
               
                //Utilizamos fetch para realizar una solicitud PUT a la API y guardar los cambios. 
                fetch(URL + 'usuarios/' + this.usuario, { 
                    method: 'PUT', 
                    body: formData, 
                }) 
                    .then(response => { 
                        //Si la respuesta es exitosa, utilizamos response.json() para parsear la respuesta en formato JSON.
                        if (response.ok) { 
                            return response.json() 
                        } else { 
                            //Si la respuesta es un error, lanzamos una excepción. 
                            throw new Error('Error al guardar los cambios del usuario.') 
                        } 
                    }) 
                    .then(data => { 
                        alert('Usuario actualizado correctamente.'); 
                        this.limpiarFormulario(); 
                    }) 
                    .catch(error => { 
                        console.error('Error:', error); 
                        alert('Error al actualizar el usuario.'); 
                    }); 
                },
                limpiarFormulario() { 
                    this.usuario = '';
                    this.nombre = '';
                    this.apellido = ''; 
                    this.tel = ''; 
                    this.email = ''; 
                    /* this.emailSeleccionada = null; 
                    this.emailUrlTemp = null;  */
                    this.mostrarDatosUsuario = false;
                } 
            } 
});
app.mount('#app');