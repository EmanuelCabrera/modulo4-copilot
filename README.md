# Proyecto Fullstack: Task App

Este repositorio contiene dos aplicaciones complementarias para la gestión de tareas:

- **Backend:** Node.js + Express (carpeta `node-express-task-app`)
- **Frontend:** React + Vite (carpeta `react-task`)

## Descripción General

La solución está diseñada para ofrecer una experiencia completa de administración de tareas, permitiendo crear, listar, actualizar y eliminar tareas desde una interfaz moderna y conectada a una API robusta.

### Bondades del Backend (`node-express-task-app`)
- API RESTful para gestión de tareas y usuarios.
- Uso de Sequelize para interacción con bases de datos.
- Arquitectura modular: controladores, servicios, repositorios y middlewares.
- Manejo centralizado de errores.
- Fácil integración y escalabilidad.

### Bondades del Frontend (`react-task`)
- Interfaz intuitiva y responsiva desarrollada con React y Material UI.
- Consumo eficiente de la API mediante Axios.
- Componentes reutilizables para formularios y tablas de tareas.
- Configuración rápida con Vite para desarrollo y producción.

## ¿Cómo levantar ambos proyectos?

### 1. Backend

```bash
cd node-express-task-app
npm install
npm start
```

El backend se ejecutará en el puerto configurado (por defecto, 3000).

### 2. Frontend

```bash
cd react-task
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`.

## Recomendaciones
- Revisa los README específicos de cada carpeta para más detalles técnicos y de personalización.
- Puedes adaptar la API y la interfaz según tus necesidades.

---

¡Explora, personaliza y extiende esta solución para tus propios proyectos de gestión de tareas!



## COMENTARIOS
Durante el desarrollo de la app para el backend utilizando copilot note una disminución significativa para el desarrollo de la app, rápidamente me construyo la app, solo tuvo que ajustar el modelo de TASK para respetar la consigna y aplicar que use la Base de dato sqlite. Pero en el desarrollo de la app para el Frontend me encontré con varios problemas con el diseño de las pantallas, al pasarle el html de los diseños realizados por stitch hizo que las vistas quedaran rotas y no aceptaban los cambios que le sugería, por ende, tuve que borrar el proyecto y arrancar de nuevo desde cero, guiando a la IA de copilot por cada uno de los módulos y luego aplicar la visual sugerida por stitch y logre que quede acorde a lo esperado. 