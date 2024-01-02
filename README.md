# Proyecto de Portafolios Estudiantil

Este proyecto utiliza Node.js, Express.js, Nodemailer, MongoDB, Formsubmit.co, Passport.js, Cloudinary, Mailtrap y Render para crear un sistema completo de gestión de portafolios para estudiantes.

## Funcionalidades Principales

### Generacon de credenciales
- Para este proyecto se ocupó credenciales de
  - GMAIL (Mailtrap Para hacer la prueba de correo antes de GMAIL)
  - MongoDB Atlas (link de la base de datos)
  - Formsubmit.co (para declarar a que correo se va a enviar los formularios de contacto)

### 1. Página Principal

- La página principal muestra dos secciones:
  - **Portafolios Creados:** Muestra los portafolios creados por los usuarios.
  - **Formulario de Contacto:** Utiliza Formsubmit.co para enviar correos electrónicos con los datos proporcionados.
  - **Barra de navegacion:** Se muestra quien esta logeado y si no un login y register.

### 2. Autenticación y Registro

- **Login y Registro:** Implementados utilizando Passport.js y nodemailer para la autenticación de usuarios.
- **Nodemailer en Registro:** Al registrarse, se envía un correo de verificación con un token al correo proporcionado.
- **Verificación de Cuenta:** El usuario debe verificar su cuenta haciendo clic en el enlace del correo antes de iniciar sesión.

### 3. Sección de Portafolios

- **CRUD de Portafolios:** Después de iniciar sesión, los usuarios tienen acceso a una sección donde pueden realizar operaciones CRUD en sus propios portafolios.
- **Almacenamiento en MongoDB:** Los datos de los portafolios y la información de autenticación se almacenan en MongoDB.
- **Almacenamiento en Cloudinary:** Las imagenes de los portafoliosse almacenan en Cloudinary.

### 4. Deploy

1. El proyecto local debe ser subido a GitHub para poder traerlo desde allí.
2. Se debe elegir el commit el cual se quiera hacer deploy.
3. Se debe configurar las variables de entorno (las mismas de .env del proyecto local).
4. Se configura los comandos de ejecucion en Render y el archivo principal del proyecto.
5. Hacer el deploy,
6. Probar el link generado de Render para pode rusar en cualquier dispositivo.

## Configuración del Proyecto en local

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno para servicios externos en un archivo '.env', ejemplo en '.env.example'
4. Ejecuta la aplicación con `npm start`.


