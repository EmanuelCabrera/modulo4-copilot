
# Node Express SOLID App

Este proyecto es una aplicación Node.js con Express que sigue los principios SOLID y utiliza Sequelize con SQLite en memoria para la gestión de tareas (tasks).

## Características principales

- API RESTful para gestión de tareas (CRUD)
- Base de datos relacional en memoria (SQLite, no requiere instalación de cliente ni servidor)
- Arquitectura por capas: controllers, services, repositories, models
- Código asíncrono y validación de datos


## Estructura del proyecto

```
node-express-solid-app
├── src
│   ├── app.js                # Inicializa la app Express y middlewares
│   ├── server.js             # Punto de entrada, sincroniza modelos y arranca el servidor
│   ├── config
│   │   ├── index.js          # Configuración general
│   │   └── sequelize.js      # Configuración de Sequelize (SQLite en memoria)
│   ├── controllers           # Controladores de rutas
│   │   └── taskController.js # Controlador de tareas
│   ├── routes                # Definición de rutas
│   │   └── taskRoutes.js     # Rutas de tareas
│   ├── services              # Lógica de negocio
│   │   └── taskService.js    # Servicio de tareas
│   ├── repositories          # Acceso a datos
│   │   └── taskRepository.js # Repositorio de tareas
│   ├── models                # Modelos de datos
│   │   └── taskModel.js      # Modelo de tarea (Sequelize)
│   └── middlewares           # Middlewares
│       └── errorHandler.js   # Manejo de errores
├── package.json              # Configuración npm
└── README.md                 # Documentación
```


## Instalación y ejecución

1. Clona el repositorio:
   ```
   git clone <repository-url>
   ```

2. Entra a la carpeta del proyecto:
   ```
   cd node-express-solid-app
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia el servidor:
   ```
   npm start
   ```

El servidor arrancará en el puerto 3000 por defecto. La base de datos se crea en memoria y se borra al detener el servicio.


## Endpoints principales de la API

- `GET /tasks` — Listar todas las tareas
- `POST /tasks` — Crear una nueva tarea
- `GET /tasks/:id` — Obtener una tarea por su id
- `PUT /tasks/:id` — Actualizar una tarea por su id
- `DELETE /tasks/:id` — Eliminar una tarea por su id

### Ejemplo de objeto Task

```json
{
  "id": "uuid-string",
  "title": "Comprar pan",
  "description": "Ir a la panadería",
  "dueDate": "2025-07-15",
  "priority": "Medium",
  "status": "Pending"
}
```


## Notas

- No necesitas instalar ni configurar una base de datos externa, todo funciona en memoria.
- Si quieres persistencia, puedes cambiar la configuración de Sequelize para usar un archivo SQLite.

## Licencia

MIT