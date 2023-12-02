#Funcion para agregar usuarios q seria como el CREATE de la BD
def agregar_usuario(usuario, nombre, apellido, tel, email, password):

    if consultar_usuario(usuario): #si consultar_usuario es true, significa q lo encontro, entonces no tiene q volverlo a cargar, entonces le pone false, sale y no lo agrega. 
        return False
    
    nuevo_usuario = { #Diccionario de datos
        'usuario': usuario,
        'nombre': nombre,
        'apellido': apellido,
        'tel': tel,
        'email': email,
        'password': password

    }
    usuarios.append(nuevo_usuario)
    return True

def consultar_usuario(usuario):
    for usu in usuarios:
        if usu['usuario'] == usuario: 
            return usu
    return False

def listar_usuarios():
    print('-'*50)
    for usuario in usuarios:
        print(f'Usuario....: {usuario['usuario']}')
        print(f'Nombre....: {usuario['nombre']}')
        print(f'Apellido....: {usuario['apellido']}')
        print(f'Teléfono....: {usuario['tel']}')
        print(f'Email....: {usuario['email']}')
        print(f'Password....: {usuario['password']}')
        print('-'*50)
#p actualizar, recorre lista, si encuentra el usuario lo actualiza. Si no sale, con false
def modificar_usuario(usuario, nueva_nombre, nueva_apellido, nueva_tel, nueva_email, nueva_password):
    for usu in usuarios:
       if usu['usuario'] == usuario: 
            usu['nombre'] = nueva_nombre
            usu['apellido'] = nueva_apellido
            usu['tel'] = nueva_tel
            usu['email'] = nueva_email
            usu['password'] = nueva_password
            return True
    return False

def eliminar_usuario(usuario):
    for usu in usuarios:
       if usu['usuario'] == usuario: 
            usuarios.remove(usu)
            return True
    return False




#Prog principal
#Def lista de usuarios (contiene diccionarios, van a ser las columnas de la tabla)
usuarios = []
#Agregamos usuarios
agregar_usuario('Acrizz', 'Acriz', 'Romero', 1100221441, 'acriz@g.com', 'jdkjd9Jsdsd')
agregar_usuario('Jona', 'Jonathan', 'Massa', 1100331441, 'jona@g.com', 'j545ddd9Jsdsd')
agregar_usuario('Caro', 'Carolina', 'Gonza', 1100441441, 'caro@g.com', 'GGGGd9Jsdsd')
agregar_usuario('Panchita', 'Pancha', 'Boni', 1144044441, 'panchi@g.com', 'GGGGd9Jsdsd')
agregar_usuario('Caro', 'CArito', 'Gonzalez', 1100441441, 'caro@g.com', 'GGGGd9Jsdsd')

#print(usuarios)
#nro_prod = int(input('Ingrese num de usuario: '))
#usuario = consultar_usuario(nro_prod)
#if usuario:
#    print (f'usuario encontrado: {usuario['usuario']} - {usuario['nombre']} ')
#else: 
#     print (f'usuario : {nro_prod} - no encontrado ')

listar_usuarios()
modificar_usuario('Panchita', 'Pancha', 'Bonilauri', 1144044441, 'panchi@g.com', 'GGGGd9Jsdsd')
listar_usuarios()
eliminar_usuario('Caro')
listar_usuarios()

