# API REST con Autenticación JWT y Node.js
Backend desarrollado en Node.js y Express que utiliza un sistema de autenticación basado en JSON Web Tokens (JWT) y un CRUD de tareas protegido, asegurando que cada usuario gestione exclusivamente sus propios registros.

# Tecnologías utilizadas:
-Node.js
-Express
-MongoDB y Mongoose
-JSON Web Tokens (JWT)
-Bcrypt

# Instrucciones de instalación y ejecución:
1. Clona este repositorio:
   ```bash
   git clone
   [https://github.com/DiegoTorres110/tu-repositorio.git](https://github.com/DiegoTorres110/tu-repositorio.git)
2. Entra a la carpeta del proyecto e instala las dependencias:
   npm install
3. Crea un archivo .env en la raíz basado en el archivo .env.example y configura tus propias credenciales (Puerto, URI de MongoDB y JWT Secret).
4. Ejecuta el servidor en modo de desarrollo:
   npm run dev
O en modo normal:
   npm start

#Endpoints de la API:
| Método | Ruta | Descripción | ¿Requiere token? |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/users` | Crear usuario (crearUser) | No |
| **POST** | `/api/users/login` | Iniciar sesión y devolver el JWT (loginUser) | No |
| **GET** | `/api/users/datos` | Datos del usuario dueño del token (datosUser) | **Sí** |
| **GET** | `/api/tareas` | Listar solo las tareas del usuario logueado (getTareas) | **Sí** |
| **POST** | `/api/tareas` | Crear una tarea asignada al usuario logueado (createTareas) | **Sí** |
| **PUT** | `/api/tareas/:id` | Modificar una tarea propia (updateTareas) | **Sí** |
| **DELETE** | `/api/tareas/:id` | Eliminar una tarea propia (deleteTareas) | **Sí** |
