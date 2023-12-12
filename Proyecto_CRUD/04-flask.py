# Instalar con pip install Flask 
from flask import Flask, request, jsonify
# Instalar con pip install flask-cors 
from flask_cors import CORS 
# Instalar con pip install mysql-connector-python 
import mysql.connector 
# Si es necesario, pip install Werkzeug 
from werkzeug.utils import secure_filename 
# No es necesario instalar, es parte del sistema standard de Python 
import os 
import time 
#--------------------------------------------------------------------

#es una instancia de flask
app = Flask(__name__) #hace referencia al nonmbre del archivo (04-flask.py)
CORS(app) # Esto habilitará CORS para todas las rutas

class Usuario:
    def __init__(self, host, user, password, database):
        # Primero, establecemos una conexión sin especificar la base de datos 
        self.conn = mysql.connector.connect( 
            host=host, 
            user=user, 
            password=password 
        )
        self.cursor = self.conn.cursor()

        # Intentamos seleccionar la base de datos 
        try: 
            self.cursor.execute(f"USE {database}") 
        except mysql.connector.Error as err: 
            # Si la base de datos no existe, la creamos 
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR: 
                self.cursor.execute(f"CREATE DATABASE {database}") 
                self.conn.database = database 
            else: 
                raise err
            
        # Una vez que la base de datos está establecida, creamos la tabla si no existe
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios ( 
                            usuario VARCHAR(10) NOT NULL,
                            nombre VARCHAR(20) NOT NULL, 
                            apellido VARCHAR(20) NOT NULL, 
                            tel INT (10), 
                            email VARCHAR(100) NOT NULL, 
                            password VARCHAR(255) NOT NULL)''')
        self.conn.commit()

        # Cerrar el cursor inicial y abrir uno nuevo con el parámetro dictionary=True
        self.cursor.close() 
        self.cursor = self.conn.cursor(dictionary=True)

        #---------------------------------------------------------------- 
    def listar_usuarios(self): 
        self.cursor.execute("SELECT * FROM usuarios") 
        usuarios = self.cursor.fetchall() 
        return usuarios
    #--------------------------------------
    def consultar_usuario(self, usuario):
    # Consultamos un usuario a partir de su código 
        self.cursor.execute(f"SELECT * FROM usuarios WHERE usuario = '{usuario}'") 
        return self.cursor.fetchone()
    #---------------------------------------------------------------- 
    def mostrar_usuario(self, usuario): 
        # Mostramos los datos de un usuario a partir de su código 
        usu = self.consultar_usuario(usuario) 
        if usu: 
            print("-" * 40) 
            print(f"Usuario.....: {usu['usuario']}") 
            print(f"Descripción: {usu['nombre']}") 
            print(f"Apellido...: {usu['apellido']}") 
            print(f"Teléfono.....: {usu['tel']}") 
            print(f"Email.....: {usu['email']}") 
            print(f"Password..: {usu['password']}") 
            print("-" * 40) 
        else: 
            print("usuario no encontrado.") 
            
    def agregar_usuario(self, usuario, nombre, apellido, tel, email, password): 
        self.cursor.execute(f"SELECT * FROM usuarios WHERE usuario = '{usuario}'") 
        usuario_existe = self.cursor.fetchone() 
        if usuario_existe:

            return False 
        
        sql = "INSERT INTO usuarios (usuario, nombre, apellido, tel, email, password) VALUES (%s, %s, %s, %s, %s, %s)" #forma mas segura de pasar datos q por f'string
        valores = (usuario, nombre, apellido, tel, email, password) 
        self.cursor.execute(sql,valores) 
        self.conn.commit() 
        return True 
    
    def eliminar_usuario(self, usuario): 
        # Eliminamos un usuario de la tabla a partir de su código 
        self.cursor.execute(f"DELETE FROM usuarios WHERE usuario = '{usuario}'") 
        self.conn.commit() 
        return self.cursor.rowcount > 0 
    
    def modificar_usuario(self, usuario, nueva_nombre, nueva_apellido, nuevo_tel, nueva_email, nuevo_password): 
        sql = "UPDATE usuarios SET nombre = %s, apellido = %s, tel = %s, email = %s, password = %s WHERE usuario = %s"
        valores = (nueva_nombre, nueva_apellido, nuevo_tel, nueva_email, nuevo_password, usuario) 
        self.cursor.execute(sql, valores) 
        self.conn.commit() 
        return self.cursor.rowcount > 0 
    
class Admin:
    def __init__(self, host, user, password, database):
        # Primero, establecemos una conexión sin especificar la base de datos 
        self.conn = mysql.connector.connect( 
            host=host, 
            user=user, 
            password=password 
        )
        self.cursor = self.conn.cursor()
        self.cursor.execute(f"USE {database}") 
        self.conn.commit()
        self.cursor.close() 
        self.cursor = self.conn.cursor(dictionary=True)

        #---------------------------------------------------------------- 
    def listar_admin(self): 
        self.cursor.execute("SELECT * FROM admin") 
        admin = self.cursor.fetchall() 
        return admin
    #--------------------------------------
    def consultar_admin(self, email):
        self.cursor.execute(f"SELECT * FROM admin WHERE email = '{email}'") 
        return self.cursor.fetchone()
    #---------------------------------------------------------------- 
    def mostrar_admin(self, email): 
        # Mostramos los datos de un admin a partir de su código 
        adm = self.consultar_admin(email) 
        if adm: 
            print("-" * 40) 
            print(f"Email.....: {adm['email']}") 
            print(f"Password..: {adm['password']}") 
            print("-" * 40) 
        else: 
            print("usuario no encontrado.") 
    
#--------------------------------------------------------------------
#  Cuerpo del programa #-------------------------------------------------------------------- 
# Crear una instancia de la clase usuario_registro

usuario_registro = Usuario(host='localhost', user='root', password='', database='db_registro_us_yac') 
usuario_admin = Admin(host='localhost', user='root', password='', database='login_yac') 

""" usuario_registro = Usuario(host='caritogonza.mysql.pythonanywhere-services.com', user='caritogonza', password='CaroCodo', database='caritogonza$yac_registro_usuarios') 

usuario_admin = Admin(host='caritogonza.mysql.pythonanywhere-services.com', user='caritogonza', password='CaroCodo', database='caritogonza$login_yac')  """


# Carpeta para guardar las imagenes 
#ruta_destino = 'static/img/' #buena practica crear carpeta statuc donde guardar archivos estaticos.
#-------------------------------------------------------------------- 
@app.route("/usuarios", methods=["GET"]) 
def listar_usuarios(): 
    usuarios = usuario_registro.listar_usuarios()
    return jsonify(usuarios) 
#--------------------------------------------------------------------
@app.route("/usuarios/<usuario>", methods=["GET"]) 
def mostrar_usuario(usuario): 
    usuario_registro.mostrar_usuario(usuario) 
    usu = usuario_registro.consultar_usuario(usuario) 
    if usu: 
        return jsonify(usu) 
    else: 
        return "Usuario no encontrado", 404 
    
@app.route("/usuarios", methods=["POST"]) 
def agregar_usuario(): 
    # Recojo los datos del form 
    usuario = request.form['usuario'] 
    nombre = request.form['nombre'] 
    apellido = request.form['apellido'] 
    tel = request.form['tel'] 
    password = request.form['password'] 
    email = request.form['email'] 
  
    if usuario_registro.agregar_usuario(usuario, nombre, apellido, tel, email, password):
        return jsonify({"mensaje": "Usuario registrado"}), 201 
    else: 
        return jsonify({"mensaje": "Ya existe el nombre de usuario. Elija otro. "}), 400 
    
@app.route("/usuarios/<usuario>", methods=["DELETE"]) 
def eliminar_usuario(usuario):  
    usu = usuario_registro.consultar_usuario(usuario) 
    if usu: 
        # Luego, elimina el usuario del catálogo 
        if usuario_registro.eliminar_usuario(usuario): 
            return jsonify({"mensaje": "Usuario eliminado"}), 200 
        else: 
            return jsonify({"mensaje": "Error al eliminar el usuario"}), 500 
    else: 
            return jsonify({"mensaje": "Usuario no encontrado."}), 404
    
@app.route("/usuarios/<usuario>", methods=["PUT"]) 
def modificar_usuario(usuario): 
    # Recojo los datos del form 
    nueva_nombre = request.form.get("nombre") 
    nueva_apellido = request.form.get("apellido") 
    nuevo_tel = request.form.get("tel") 
    nuevo_email = request.form.get("email") 
    nuevo_password = request.form.get("password") 
    # Procesamiento de la imagen 
    """ email = request.files['email'] 
    nombre_email = secure_filename(email.filename) 
    nombre_base, extension = os.path.splitext(nombre_email) 
    nombre_email = f"{nombre_base}_{int(time.time())}{extension}" 
    email.save(os.path.join(ruta_destino, nombre_email)) """ 
    
    # Actualización del usuario 
    if usuario_registro.modificar_usuario(usuario, nueva_nombre, nueva_apellido, nuevo_tel, nuevo_email, nuevo_password): 
        return jsonify({"mensaje": "usuario modificado"}), 200 
    else: 
        return jsonify({"mensaje": "usuario no encontrado"}), 404 
    
#---------------------------------------------------------------------------------
# ADMIN
@app.route("/admin", methods=["GET"]) 
def listar_admin(): 
    admin = usuario_admin.listar_admin()
    return jsonify(admin) 

@app.route("/admin/<usuario>", methods=["GET"]) 
def mostrar_admin(email): 
    usuario_admin.mostrar_admin(email) 
    adm = usuario_admin.consultar_admin(email) 
    if adm: 
        return jsonify(adm) 
    else: 
        return "Usuario no encontrado", 404

if __name__ == "__main__":
    app.run(debug=True) #hace correr la aplicación