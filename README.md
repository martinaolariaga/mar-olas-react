# Mar Olas - React

Proyecto de e-commerce desarrollado con ReactJS y Vite.

## Instalación y ejecución
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor local.

## Tecnologías utilizadas
- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- Git / GitHub

## Componentes creados
- **Navbar**: barra de navegación con el logo de la tienda, categorías de productos (Hombre, Mujer, Accesorios) y el CartWidget. Estilizada con Flexbox y la paleta de colores de la marca.
- **CartWidget**: componente hijo del Navbar que muestra un ícono de carrito y la cantidad de productos (por ahora un valor fijo).
- **ItemListContainer**: contenedor principal que recibe un mensaje de bienvenida mediante props (`greeting`) y lo muestra en pantalla.