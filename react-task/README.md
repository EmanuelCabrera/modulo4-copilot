

# React Task Generator

Este proyecto es una aplicación web desarrollada con React y Vite. Permite consumir un servicio para la generación y gestión de tareas, utilizando Axios para las peticiones HTTP y Material UI para el diseño de la interfaz.

## Secciones del README

- **Tecnologías:** Lista las principales tecnologías utilizadas en el proyecto.
- **Scripts:** Explica los comandos disponibles para desarrollo y producción.
- **Uso:** Detalla los pasos para instalar dependencias y levantar la aplicación.
- **Personalización:** Sugerencias para adaptar la app a tus necesidades.

## Tecnologías
- **React:** Biblioteca para construir interfaces de usuario.
- **Vite:** Herramienta de desarrollo rápida para proyectos frontend.
- **Axios:** Cliente HTTP para consumir APIs.
- **Material UI:** Framework de componentes visuales para React.

## Scripts
- `npm run dev`: Inicia la aplicación en modo desarrollo, permitiendo hot reload y pruebas rápidas.
- `npm run build`: Compila la aplicación para producción, generando los archivos optimizados en la carpeta `dist`.

## ¿Cómo levantar la aplicación?

1. **Instala las dependencias:**
   Abre una terminal en la carpeta `react-task` y ejecuta:
   ```bash
   npm install
   ```

2. **Inicia la aplicación en modo desarrollo:**
   ```bash
   npm run dev
   ```
   Esto abrirá la app en tu navegador (generalmente en `http://localhost:5173`).

3. **Compila para producción (opcional):**
   ```bash
   npm run build
   ```
   Los archivos listos para producción estarán en la carpeta `dist`.

## Personalización

Puedes modificar la lógica de consumo del servicio de tareas usando Axios en los componentes, y adaptar el diseño visual utilizando los componentes de Material UI. Explora la carpeta `src/components` para agregar o modificar funcionalidades y estilos.
