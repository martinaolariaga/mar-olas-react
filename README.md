# Mar Olas - React

Proyecto de e-commerce desarrollado con ReactJS y Vite.

## Instalación y ejecución
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor local.

## Tecnologías utilizadas
- React 19
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Git / GitHub

## Componentes creados
- **Navbar**: barra de navegación con el logo de la tienda (link a inicio), categorías de productos (Remeras, Shorts, Buzos, Accesorios) como links de navegación, y el CartWidget. Visible en todas las rutas de la aplicación.
- **CartWidget**: componente hijo del Navbar que muestra un ícono de carrito y la cantidad de productos (por ahora un valor fijo).
- **ItemListContainer**: obtiene el listado de productos mediante una promesa simulada (`getProducts`). Si la URL incluye un parámetro de categoría (`/category/:categoryId`), filtra los productos según esa categoría; si no, muestra el catálogo completo.
- **ItemList**: recibe los productos por props y los recorre con `.map()` para renderizar un `Item` por cada uno.
- **Item**: card de presentación individual de cada producto (imagen, nombre, descripción, precio, stock), envuelta en un `Link` que navega al detalle del producto (`/item/:id`).
- **ItemDetailContainer**: lee el `id` del producto desde la URL (`useParams`) y obtiene ese producto específico mediante la promesa `getProductById`.
- **ItemDetail**: muestra la información completa de un producto (imagen, nombre, precio, categoría, descripción, stock) y reutiliza el componente `ItemCount`.
- **ItemCount**: contador de cantidad reutilizable, respeta el stock disponible como límite superior y no permite valores negativos.
- **NotFound**: página de error 404 para cualquier URL que no coincida con ninguna ruta definida.

## Datos simulados (mocking)
- `src/mock/asyncMock.js`: exporta `getProducts`, una función que retorna una Promise resuelta luego de 2 segundos con el catálogo completo de productos.
- `src/services/getProductById.js`: exporta `getProductById`, una función dinámica que retorna una Promise resuelta con un producto específico según su `id`, simulando una demora