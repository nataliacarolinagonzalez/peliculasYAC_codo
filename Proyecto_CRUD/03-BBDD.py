import mysql.connector

class Usuario:

    def __init__(self, host, user, password, database):

        self.conn = mysql.connector.connect( 
            host=host,
            user=user,
            password=password,
            database=database
        )

        self.cursor = self.conn.cursor(dictionary=True)
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios (
            usuario VARCHAR (20) NOT NULL,
            nombre VARCHAR (20) NOT NULL,
            apellido VARCHAR (20) NOT NULL,
            tel INT (10),
            email VARCHAR (255),
            password VARCHAR (255))''')
        self.conn.commit()

    def agregar_usuario(self, usuario, nombre, apellido, tel, email, password):
        self.cursor.execute(f'SELECT * FROM usuarios WHERE usuario = "{usuario}"')
        usuario_existe = self.cursor.fetchone()
        #si el usuario existe
        if usuario_existe: 
            #prompt usuario encontrado
            return False
        
        #si el usuario existe
        sql = f"INSERT INTO usuarios (usuario, nombre, apellido, tel, email, password) VALUES ('{usuario}', '{nombre}', '{apellido}', {tel}, '{email}', '{password}')"
        self.cursor.execute(sql)
        self.conn.commit()
        return True
    
    def consultar_usuario(self, usuario):
        # Consultamos un usuario a partir de su código 
        self.cursor.execute(f"SELECT * FROM usuarios WHERE usuario = '{usuario}'")
        return self.cursor.fetchone()
    
    def modificar_usuario(self, usuario, nueva_nombre, nueva_apellido, nuevo_tel, nueva_email, nuevo_password): 
        sql = f"UPDATE usuarios SET nombre = '{nueva_nombre}', apellido = '{nueva_apellido}', tel = {nuevo_tel}, email = '{nueva_email}', password = '{nuevo_password}' WHERE usuario = '{usuario}'" 
        self.cursor.execute(sql) 
        self.conn.commit() 
        return self.cursor.rowcount > 0
    
    def mostrar_usuario(self, usuario): 
        # Mostramos los datos de un usuario a partir de su código 
        usu = self.consultar_usuario(usuario) 
        if usu: 
            print("-" * 40) 
            print(f"Usuario.....: {usu['usuario']}") 
            print(f"Descripción: {usu['nombre']}") 
            print(f"apellido...: {usu['apellido']}") 
            print(f"Teléfono.....: {usu['tel']}") 
            print(f"Email.....: {usu['email']}") 
            print(f"Password..: {usu['password']}") 
            print("-" * 40) 
        else: 
            print("usuario no encontrado.")

    def listar_usuarios(self): 
        # Mostramos en pantalla un listado de todos los usuarios en la tabla 
        self.cursor.execute("SELECT * FROM usuarios") 
        usuarios = self.cursor.fetchall() 
        print("-" * 40) 
        for usu in usuarios: 
            print(f"Usuario.....: {usu['usuario']}") 
            print(f"Descripción: {usu['nombre']}") 
            print(f"Apellido...: {usu['apellido']}") 
            print(f"Teléfono.....: {usu['tel']}") 
            print(f"Email.....: {usu['email']}") 
            print(f"password..: {usu['password']}") 
            print("-" * 40)
    
    def eliminar_usuario(self, usuario): 
        # Eliminamos un usuario de la tabla a partir de su código 
        self.cursor.execute(f"DELETE FROM usuarios WHERE usuario = '{usuario}'") 
        self.conn.commit() 
        return self.cursor.rowcount > 0


#-----------------------------------
#Programa principal
usuario_registro = Usuario(host='localhost', user='root', password='', database='yac_registro_usuarios') 

usuario_registro.agregar_usuario("Acrizz", "Acriz", "Romero", 1100221441, "acriz@g.com", "jdkjd9Jsdsd")

usuario_registro.listar_usuarios()

usuario_registro.agregar_usuario('Jona', 'Jonathan', 'Massa', 1100331441, 'jona@g.com', 'j545ddd9Jsdsd')
usuario_registro.agregar_usuario('Panchita', 'Pancha', 'Boni', 1144044441, 'panchi@g.com', 'GGGGd9Jsdsd')
usuario_registro.agregar_usuario('Caro', 'CArito', 'Gonzalez', 1100441441, 'caro@g.com', 'GGGGd9Jsdsd')
usuario_registro.listar_usuarios()

usuario_registro.modificar_usuario('Panchita', 'Pancha', 'Bonilauri', 1144044441, 'panchi@g.com', 'GGGGd9Jsdsd')
usuario_registro.listar_usuarios()
usuario_registro.eliminar_usuario('Caro')
usuario_registro.listar_usuarios()
