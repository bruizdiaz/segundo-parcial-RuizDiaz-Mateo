# 🎥 Segundo Pacial Taller de Lenguajes de Programación I

Este es el repositorio de una API RESTful para la gestión de peliculas (CRUD), construida con Node.js, Express, Sequelize y MySQL. El proyecto es el resultado de un proceso de desarrollo iterativo enfocado en aplicar las mejores prácticas de la industria.

## ✨ Características Principales

-   **Operaciones CRUD Completas:** Funcionalidad completa para Crear, Leer, Actualizar y Eliminar peliculas.
-   **Validación de Datos Avanzada:** Reglas de validación detalladas en el backend para todos los campos de entrada (title, director, duration, genre, description.).
-   **Unicidad de Title:** Verificación a nivel de aplicación y base de datos para asegurar que no existan titulos duplicados.
-   **Manejo de Errores Centralizado:** Uso de bloques `try...catch` y códigos de estado HTTP semánticos para un manejo de errores claro y predecible.
-   **Arquitectura por Capas:** Estructura de proyecto organizada (Modelos, Controladores, Rutas) para una alta mantenibilidad y escalabilidad.
-   **Configuración por Entorno:** Uso de variables de entorno (`.env`) para gestionar datos sensibles y configuraciones de la aplicación.

## 🛠️ Tecnologías Utilizadas

-   **Backend:** Node.js
-   **Framework:** Express.js
-   **ORM:** Sequelize
-   **Base de Datos:** MySQL
-   **Variables de Entorno:** dotenv

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
    npm i
    ```
    o
     ```bash
    npm install
    ```

3.  **Configura la Base de Datos:**
    Asegúrate de que tu servidor MySQL esté corriendo y crea una base de datos para el proyecto.
    ```sql
    CREATE DATABASE movies;
    ```

4.  **Configura las Variables de Entorno:**
    Copia el archivo de ejemplo `.env.example` y renómbralo a `.env`.
    ```bash
    cp .env.example .env
    ```
    Ahora, abre el archivo `.env` y rellena los valores con tus credenciales de la base de datos y la configuración que desees.
    ```env
    PORT=3000
    DB_NAME=movies
    DB_USER=tu_user
    DB_PASSWORD= tu_password
    DB_HOST=localhost
    DB_DIALECT=mysql

    ```

## ▶️ Uso

Una vez configurado, puedes iniciar el servidor de dos maneras:

-   **Modo Desarrollo (con reinicio automático):**
    ```bash
    npm run dev
    ```

El servidor se iniciará y estará escuchando en el puerto definido (por defecto, el puerto 3000).

## 📡 API Endpoints

La API sigue las convenciones RESTful. El prefijo base para todas las rutas es `/api`.

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
			"description": "Una estríper americana de ascendencia rusa se casa con el hijo de un oligarca ruso que está estudiando en Nueva York, pero la familia del chico la considera una prostituta y envía a unos matones para convencer a la pareja de que anulen el matrimonio."
		}
    ```
-   **Respuesta Exitosa (201 Created):**
    ```json
    {
      "newMovie": {
          "id": 1,
          "title": "Anora",
          "director": "Sean baker",
          "duration": 139,
          "genre": "Drama, comedia cinematografica",
          "description": "Una estríper americana de ascendencia rusa se casa con el hijo de un oligarca ruso que está estudiando en nueva york, pero la familia del chico la considera una prostituta y envía a unos matones para convencer a la pareja de que anulen el matrimonio.",
          "updatedAt": "2025-06-27T14:26:00.945Z",
          "createdAt": "2025-06-27T14:26:00.945Z"
    }    
    }
    ```
-   **Respuesta de Error (400 Bad Request):**
    ```json
    {
    "message": "Ya existe una película con ese título"
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
			"description": "Una estríper americana de ascendencia rusa se casa con el hijo de un oligarca ruso que está estudiando en Nueva York, pero la familia del chico la considera una prostituta y envía a unos matones para convencer a la pareja de que anulen el matrimonio."
		}
    ```
-   **Respuesta Exitosa (200 OK):**
    ```json
    {
    "message": "Película actualizada",
    "movie": {
        "id": 1,
        "title": "Anora",
        "director": "Sean baker",
        "duration": 140,
        "genre": "Drama, comedia cinematografica",
        "description": "Una estríper americana de ascendencia rusa se casa con el hijo de un oligarca ruso que está estudiando en nueva york, pero la familia del chico la considera una prostituta y envía a unos matones para convencer a la pareja de que anulen el matrimonio.",
        "createdAt": "2025-06-27T14:26:00.000Z",
        "updatedAt": "2025-06-27T14:27:52.240Z"
    }
    }
    ```
-   **Respuesta de Error (404 Not Found):**
    ```json
     {
    "message": "Película no encontrada"
    }
    ```
---
---

#### ❌ `DELETE /api/movies/:id`

Elimina una pelicula existente.

-   **Respuesta Exitosa (200 OK):**
    ```json
    {
    "message": "Película eliminada"
    }
    ```
-   **Respuesta de Error (404 Not Found):**
    ```json
     {
    "message": "Película no encontrada"
    }
    ```
---

## ✒️ Autor

-   **Mateo B. Ruiz Diaz** - [bruizdiaz](https://github.com/bruizdiaz)
