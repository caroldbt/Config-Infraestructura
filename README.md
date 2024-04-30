# FrondEnd(S3) BackEnd(EC2) Database(RDS)
- verifica la configuración del Apache
- Añadir la política "awssnsFullaccess"
  
## Crear topico SNS
- Crea un topico SNS elige email, asegurate de crear una suscripción y confirmar la suscripción.
  
## Crea un S3 bucket
- Habilita la web estática, con el documento index.html
- Añade una politica, puedes usar de ejemplo el fichero bucket.txt, y asegurate de cambiar la arn.
- Puedes usar un archivo de prueba que contenga un formulario por ejemplo:
- https://github.com/technext/jobentry/archive/refs/tags/v1.0.0.zip
- En la parte inferior de archivo contact.html donde los script, puedes añadir el fichero contact.js
- Asegurate de sustituir la IP de la EC2.
- Puedes usar el siguiente comando para copiar archivos o directorios a tu sistema local a un bucket de Amazon S3:
- aws s3 cp jobentry-1.0.0/ s3://nombre-bucket/ --recursive
  
## Conectarse a la base de datos
- Conectarse a la base de datos:
- Inicia el servidor MySQL en sistema Linux utilizando systemctl.
- Configura el servicio MySQL para que se inicie automáticamente cada vez que el sistema se inicie.
- Inicie una sesión interactiva de MySQL con el usuario "admin" en el servidor MySQL especificado. Una vez que ingresas la contraseña del usuario, tendrás acceso a la consola de MySQL donde puedes ejecutar consultas y comandos de administración de bases de datos.
- Una vez conectado crea la base de datos y la tabla necesarios:

- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS your_database_name;

- Usar la base de datos recién creada
USE your_database_name;

- Crear la tabla si no existe
CREATE TABLE IF NOT EXISTS your_table_name (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message TEXT
);

- Con todo hecho debes comprobar en el navegador la funcionalidad del formulario.
