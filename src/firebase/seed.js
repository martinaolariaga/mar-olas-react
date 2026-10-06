import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';
import musculosaHombre from '../assets/musculosa-hombre.png';
import shortHombre from '../assets/short-hombre.png';
import buzo from '../assets/buzo.png';
import remeraMujer from '../assets/remera-mujer.png';
import shortMujer from '../assets/short-mujer.png';
import buzoUnisex from '../assets/buzo-unisex.png';
import silbato from '../assets/silbato.png';
import pilusoHombre from '../assets/piluso-hombre.png';
import toalla from '../assets/toalla.png';

const productos = [
  {
    name: 'Musculosa Masculina',
    price: 40000,
    category: 'remeras',
    img: musculosaHombre,
    stock: 10,
    description: 'Confeccionada en algodón de alta resistencia. Disponible en talles S, M, L, XL, XXL.',
  },
  {
    name: 'Short Masculino',
    price: 25000,
    category: 'shorts',
    img: shortHombre,
    stock: 8,
    description: 'Secado rápido con elástico reforzado. Disponible en talles S, M, L, XL, y XXL.',
  },
  {
    name: 'Buzo Masculino',
    price: 60000,
    category: 'buzos',
    img: buzo,
    stock: 5,
    description: 'Friza pesada. Disponible en talles M, L, XL, XXL.',
  },
  {
    name: 'Remera Femenina',
    price: 40000,
    category: 'remeras',
    img: remeraMujer,
    stock: 10,
    description: 'Algodón peinado con estampa reflectiva. Disponible en talles XS, S, M, L y XL.',
  },
  {
    name: 'Short Femenino',
    price: 25000,
    category: 'shorts',
    img: shortMujer,
    stock: 12,
    description: 'Corte anatómico de secado rápido. Disponible en talles XS, S, M, L y XL.',
  },
  {
    name: 'Buzo Unisex',
    price: 60000,
    category: 'buzos',
    img: buzoUnisex,
    stock: 8,
    description: 'Friza abrigo medio con capucha. Disponible en talles S, M, L, XL y XXL.',
  },
  {
    name: 'Silbato profesional',
    price: 20000,
    category: 'accesorios',
    img: silbato,
    stock: 15,
    description: 'Potencia de 115dB con cordón de agarre incluido. Talle único',
  },
  {
    name: 'Piluso Unisex',
    price: 10000,
    category: 'accesorios',
    img: pilusoHombre,
    stock: 20,
    description: 'Protección UV50+ con ajuste mentonero. Talle único',
  },
  {
    name: 'Toalla albatroz',
    price: 10000,
    category: 'accesorios',
    img: toalla,
    stock: 12,
    description: 'Microfibra ultra absorbente de compacto rápido. Medidas 140x70cm',
  },
];

export async function seedProducts() {
  for (const producto of productos) {
    try {
      const docRef = await addDoc(collection(db, 'products'), producto);
      console.log('Producto agregado con ID:', docRef.id);
    } catch (error) {
      console.error('Error agregando producto:', error);
    }
  }
  console.log('Carga completa');
}