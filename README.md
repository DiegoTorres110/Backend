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
   git clone [Enlace github]
2. Entra a la carpeta del proyecto e instala las dependencias:
   "npm install"
3. Crea un archivo .env en la raíz basado en el archivo .env.example y configura tus propias credenciales (Puerto, URI de MongoDB y JWT Secret).
4. Ejecuta el servidor en modo de desarrollo:
   "npm run dev"
O en modo normal:
   "npm start"

# Endpoints de la API:
| Método | Ruta | Descripción | ¿Requiere token? |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/users` | Crear usuario (crearUser) | No |
| **POST** | `/api/users/login` | Iniciar sesión y devolver el JWT (loginUser) | No |
| **GET** | `/api/users/datos` | Datos del usuario dueño del token (datosUser) | **Sí** |
| **GET** | `/api/tareas` | Listar solo las tareas del usuario logueado (getTareas) | **Sí** |
| **POST** | `/api/tareas` | Crear una tarea asignada al usuario logueado (createTareas) | **Sí** |
| **PUT** | `/api/tareas/:id` | Modificar una tarea propia (updateTareas) | **Sí** |
| **DELETE** | `/api/tareas/:id` | Eliminar una tarea propia (deleteTareas) | **Sí** |

# Reglas de seguridad y arquitectura:
* **Protección de Rutas:** Todas las rutas del CRUD de tareas pasan por un middleware de autenticación que valida el header `Authorization: Bearer <token>`. Si no se proporciona un token o este es inválido, la API responde con un `401 Unauthorized`.
* **Extracción Segura de Identidad:** El ID del usuario se obtiene directamente del token decodificado (`req.user.id`), protegiendo la aplicación de manipulaciones en el cuerpo de la petición o en la URL.
* **Aislamiento de Datos:** Cada tarea almacena la referencia del ID de su propietario, asegurando que las consultas filtren de forma estricta los registros y que ningún usuario pueda ver, modificar o eliminar datos de otros usuarios.
