class Usuario:
    usuarios = []

    def agregar_usuario(self, usuario, nombre, apellido, tel, email, password):

        if self.consultar_usuario(usuario): #si consultar_usuario es true, significa q lo encontro, entonces no tiene q volverlo a cargar, entonces le pone false, sale y no lo agrega. 
            return False

        nuevo_usuario = { #Diccionario de datos
            'usuario': usuario,
            'nombre': nombre,
            'apellido': apellido,
            'tel': tel,
            'email': email,
            'password': password

        }
        self.usuarios.append(nuevo_usuario)
        return True
    
    def consultar_usuario(self, usuario):
        for usu in self.usuarios:
            if usu['usuario'] == usuario: 
                return usu
        return False
    

    def listar_usuarios(self):
        print('-'*50)
        for usuario in self.usuarios:
            print(f'Código....: {usuario['usuario']}')
            print(f'nombre....: {usuario['nombre']}')
            print(f'Apellido....: {usuario['apellido']}')
            print(f'Teléfono....: {usuario['tel']}')
            print(f'email....: {usuario['email']}')
            print(f'Password....: {usuario['password']}')
            print('-'*50)

    def modificar_usuario(self, usuario, nueva_nombre, nueva_apellido, nuevo_tel, nueva_email, nuevo_password):
        for usu in self.usuarios:
           if usu['usuario'] == usuario: #p actualizar, recorre lista, si encuentra el usuario lo actualiza. Si no sale, con false
                usu['nombre'] = nueva_nombre
                usu['apellido'] = nueva_apellido
                usu['tel'] = nuevo_tel
                usu['email'] = nueva_email
                usu['password'] = nuevo_password
                return True
        return False

    def eliminar_usuario(self, usuario):
        for usu in self.usuarios:
           if usu['usuario'] == usuario: 
                self.usuarios.remove(usu)
                return True
        return False







#Prog principal
usuario_registro = Usuario()
usuario_registro.agregar_usuario('Acrizz', 'Acriz', 'Romero', 1100221441, 'acriz@g.com', 'jdkjd9Jsdsd')
usuario_registro.agregar_usuario('Jona', 'Jonathan', 'Massa', 1100331441, 'jona@g.com', 'j545ddd9Jsdsd')
usuario_registro.agregar_usuario('Panchita', 'Pancha', 'Boni', 1144044441, 'panchi@g.com', 'GGGGd9Jsdsd')
usuario_registro.agregar_usuario('Caro', 'CArito', 'Gonzalez', 1100441441, 'caro@g.com', 'GGGGd9Jsdsd')
usuario_registro.listar_usuarios()

usuario_registro.modificar_usuario('Panchita', 'Pancha', 'Bonilauri', 1144044441, 'panchi@g.com', 'GGGGd9Jsdsd')
usuario_registro.listar_usuarios()
usuario_registro.eliminar_usuario('Caro')
usuario_registro.listar_usuarios()






























'''


def modificar_usuario(usuario, nueva_nombre, nueva_apellido, nueva_tel, nueva_email, nueva_password):
    for usuario in usuarios:
       if usuario['usuario'] == usuario: #p actualizar, recorre lista, si encuentra el usuario lo actualiza. Si no sale, con false
            usuario['nombre'] == nueva_nombre
            usuario['apellido'] == nueva_apellido
            usuario['tel'] == nueva_tel
            usuario['email'] == nueva_email
            usuario['password'] == nueva_password
            return True
    return False

def eliminar_usuario(usuario):
    for usuario in usuarios:
       if usuario['usuario'] == usuario: 
            usuarios.remove(usuario)
            return True
    return False




#Prog principal
#Def lista de usuarios (contiene diccionarios, van a ser las columnas de la tabla)

#Agregamos usuarios



#print(usuarios)
#nro_prod = int(input('Ingrese num de usuario: '))
#usuario = consultar_usuario(nro_prod)
#if usuario:
#    print (f'usuario encontrado: {usuario['usuario']} - {usuario['nombre']} ')
#else: 
#     print (f'usuario : {nro_prod} - no encontrado ')

listar_usuarios()
modificar_usuario(1, 'Caro', 5, 100, 'No', 'xxx')
listar_usuarios()
eliminar_usuario(2)

'''