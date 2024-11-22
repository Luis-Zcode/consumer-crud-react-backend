# Proyecto Backend

Este proyecto proporciona la funcionalidad backend para una aplicación desarrollada con React y Ant Design en el frontend. La aplicación consume diversas APIs para brindar una experiencia completa y funcional.

## Características

- **API RESTful:** Endpoints para CRUD de entidades.
- **Integración con Frontend:** Consumido por una aplicación React con Ant Design.

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución para el servidor.
- **Express.js:** Framework para crear el servidor y las rutas.
- **MySQL:** Base de datos relacional para almacenamiento de datos.
- **Sequelize:** ORM para interactuar con MySQL.
- **Sequelize CLI:** Herramienta de línea de comandos para Sequelize.

## Requisitos Previos

- Node.js
- npm o yarn
- MySQL

## Instalación

1. Clonar el repositorio:

    ```sh
    git clone git@github.com:Luis-Zcode/consumer-crud-react-backend.git
    ```

2. Navegar al directorio del proyecto:

    ```sh
    cd nombre-del-repositorio-backend
    ```

3. Instalar dependencias:

    ```sh
    npm install
    ```

    o si usas yarn:

    ```sh
    yarn install
    ```

4. Configurar las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```env
    PORT=5000
    DB_HOST=localhost
    DB_USER=tu_usuario_mysql
    DB_PASSWORD=tu_contraseña_mysql
    DB_NAME=nombre_de_tu_base_de_datos
    ```

5. Ejecutar migraciones:

    ```sh
    npx sequelize-cli db:migrate
    ```

## Uso

1. Iniciar el servidor:

    ```sh
    npm start
    ```

    o con yarn:

    ```sh
    yarn start
    ```

2. El servidor estará disponible en `http://localhost:5000`.

