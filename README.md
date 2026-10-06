# Mar Olas - React 🌊

Proyecto de e-commerce desarrollado con ReactJS, Vite y Firebase.

Mar Olas es una tienda online de indumentaria y accesorios relacionados con el mundo de los guardavidas y el mar.

## Tecnologías utilizadas

- ReactJS
- Vite
- React Router
- Context API
- Firebase Authentication
- Cloud Firestore
- CSS

## Funcionalidades

- Catálogo de productos dinámico desde Firestore.
- Filtrado de productos por categoría.
- Vista de detalle de cada producto.
- Carrito de compras con Context API.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Vaciar el carrito.
- Cálculo automático de subtotales y total.
- Registro e inicio de sesión con Firebase Authentication.
- Visualización del usuario autenticado y cierre de sesión.
- Checkout protegido para usuarios autenticados.
- Formulario de datos de entrega.
- Generación y almacenamiento de órdenes en Firestore.
- Generación de un ID único para cada orden.
- Validación de datos obligatorios.
- Manejo de estados de carga y errores.

## Instalación y ejecución

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Crear un archivo `.env` en la raíz del proyecto con las variables de Firebase.
4. Ejecutar `npm run dev` para iniciar el servidor local.

### Variables de entorno

El proyecto utiliza las siguientes variables:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

## Autora

Martina Olariaga