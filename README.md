# 🎥 Segundo Pacial Taller de Lenguajes de Programación I

<p align="left">
  <img src="https://img.shields.io/github/last-commit/bruizdiaz/segundo-parcial-RuizDiaz-Mateo?style=for-the-badge&logo=github&label=last%20commit&color=blue" alt="last commit">
  <img src="https://img.shields.io/github/languages/top/bruizdiaz/segundo-parcial-RuizDiaz-Mateo?style=for-the-badge" alt="top language">
</p>

Este es el repositorio de una API RESTful para la gestión de peliculas (CRUD), construida con Node.js, Express, Sequelize y MySQL. El proyecto es el resultado de un proceso de desarrollo iterativo enfocado en aplicar las mejores prácticas de la industria.

## ✨ Características Principales

-   **Operaciones CRUD Completas:** Funcionalidad completa para Crear, Leer, Actualizar y Eliminar peliculas.
-   **Validación de Datos Avanzada:** Reglas de validación detalladas en el backend para todos los campos de entrada.
-   **Unicidad de Title:** Verificación para asegurar que no existan titulos duplicados.
-   **Manejo de Errores Centralizado:** Uso de `try...catch` y códigos de estado HTTP semánticos.
-   **Arquitectura por Capas:** Estructura organizada (Modelos, Controladores, Rutas) para alta mantenibilidad.
-   **Configuración por Entorno:** Uso de variables de entorno (`.env`) para gestionar datos sensibles.

## 🛠️ Tecnologías Utilizadas

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/dotenv-ECA92C?style=for-the-badge&logo=dotenv&logoColor=black" alt="dotenv">
</p>

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

-   Tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).
-   Tener instalado y corriendo un servidor de [MySQL](https://www.mysql.com/).
-   Un cliente de API como [Postman](https://www.postman.com/) para probar los endpoints.

### Pasos

1.  **Clona el [Repositorio](https://github.com/bruizdiaz/segundo-parcial-RuizDiaz-Mateo.git):**
    ```bash
    git clone https://github.com/bruizdiaz/segundo-parcial-RuizDiaz-Mateo.git
    cd segundo-parcial-RuizDiaz-Mateo
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

3.  **Configura la Base de Datos:**
    Asegúrate de que tu servidor MySQL esté corriendo y crea una base de datos.
    ```sql
    CREATE DATABASE movies;
    ```

4.  **Configura las Variables de Entorno:**
    Copia el archivo `.env.example` y renómbralo a `.env`.
    ```bash
    cp .env.example .env
    ```
    Ahora, abre el archivo `.env` y rellena los valores con tus credenciales.
    ```env
    PORT=3000
    DB_NAME=movies
    DB_USER=tu_user
    DB_PASSWORD=tu_password
    DB_HOST=localhost
    DB_DIALECT=mysql
    ```

## ▶️ Uso

-   **Modo Desarrollo (con reinicio automático):**
    ```bash
    npm run dev
    ```

El servidor se iniciará en el puerto definido (por defecto, 3000).

## 📡 API Endpoints

El prefijo base para todas las rutas es `/api`.

### 🎬 Peliculas (`/api/movies`)

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/movies` | Obtiene una lista de todas las peliculas. |
| `POST` | `/movies` | Crea un nueva nueva pelicula. |
| `GET` | `/movies/:id` | Obtiene una pelicula específico por su ID. |
| `PUT` | `/movies/:id` | Actualiza una pelicula específica por su ID. |
| `DELETE`| `/movies/:id` | Elimina una pelicula específica por su ID. |

---

#### ➕ `POST /api/movies`
Crea una nueva pelicula.
-   **Body (raw/json):**
    ```json
    {
        "title": "Anora",
        "director": "Sean Baker",
        "duration": 139,
        "genre": "Drama, Comedia Cinematografica",
        "description": "Una estríper..."
    }
    ```

---

#### 🆙 `PUT /api/movies/:id`
Actualiza una pelicula existente.
-   **Body (raw/json):**
    ```json
    {
        "title": "Anora",
        "director": "Sean Baker",
        "duration": 140,
        "genre": "Drama, Comedia Cinematografica",
        "description": "Una estríper..."
    }
    ```

---

#### ❌ `DELETE /api/movies/:id`
Elimina una pelicula existente.
-   **Respuesta Exitosa (200 OK):**
    ```json
    {
        "message": "Película eliminada"
    }
    ```

---

## ✒️ Autor

-   **Mateo B. Ruiz Diaz** - [bruizdiaz](https://github.com/bruizdiaz)
