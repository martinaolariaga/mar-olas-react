import musculosaHombre from '../assets/musculosa-hombre.png';
import shortHombre from '../assets/short-hombre.png';
import buzo from '../assets/buzo.png';
import remeraMujer from '../assets/remera-mujer.png';
import shortMujer from '../assets/short-mujer.png';
import buzoUnisex from '../assets/buzo-unisex.png';
import silbato from '../assets/silbato.png';
import pilusoUnisex from '../assets/piluso-hombre.png';
import toalla from '../assets/toalla.png';



const productos = [
  {
    id: 1,
    name: 'Musculosa Masculina',
    price: 40000,
    category: 'remeras',
    img: musculosaHombre,
    stock: 10,
    description: 'Confeccionada en algodón de alta resistencia. Disponible en talles S, M, L, XL, XXL.',
  },
  {
    id: 2,
    name: 'Short Masculino',
    price: 25000,
    category: 'shorts',
    img: shortHombre,
    stock: 8,
    description: 'Secado rápido con elástico reforzado. Disponible en talles S, M, L, XL, y XXL.',
  },
  {
    id: 3,
    name: 'Buzo Masculino',
    price: 60000,
    category: 'buzos',
    img: buzo,
    stock: 5,
    description: 'Friza pesada. Disponible en talles M, L, XL, XXL.',
  },
  {
    id: 4,
    name: 'Remera Femenina',
    price: 40000,
    category: 'remeras',
    img: remeraMujer,
    stock: 10,
    description: 'Algodoón peinado con estampa reflectiva. Disponible en talles XS, S, M, L y XL.',
  },
  {
    id: 5,
    name: 'Short Femenino',
    price: 25000,
    category: 'shorts',
    img: shortMujer,
    stock: 12,
    description: 'Corte anatómico de secado rapido. Disponible en talles XS, S, M, L y XL.',
  },
  {
    id: 6,
    name: 'Buzo Unisex',
    price: 60000,
    category: 'buzos',
    img: buzoUnisex,
    stock: 8,
    description: 'Friza abrigo medio con capucha. Disponible en talles S, M, L , XL y XXL.',
  },
  {
    id: 7,
    name: 'Silbato profesional',
    price: 20000,
    category: 'accesorios',
    img: silbato,
    stock: 15,
    description: 'Potencia de 115dB con cordón de agarre incluido. Talle único',
  },
  {
    id: 8,
    name: 'Piluso Unisex',
    price: 10000,
    category: 'accesorios',
    img: pilusoUnisex,
    stock: 20,
    description: 'Protección UV50+ con ajuste mentonero. Talle único',
  },
  {
    id: 9,
    name: 'Toalla albatroz',
    price: 10000,
    category: 'accesorios',
    img: toalla,
    stock: 12,
    description: 'Microfibra ultra absorbente de compacto rápido. Medidas 140x70cm',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};