import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import SidebarCatalog from './SidebarCatalog';




// Importar todas las imágenes

//abosrbentes
import limpionImg from '@/assets/absorbentes/limpion.png';
import panomicroImg from '@/assets/absorbentes/pano-microfibra.png';
import papelImg from '@/assets/absorbentes/papel-boquete.png';
import toallazImg from '@/assets/absorbentes/toalla_z_bio.png';
// complementarios
import escobaImg from '@/assets/complementarios/escoba_tipo_zulia.png';
import mopaImg from '@/assets/complementarios/mopa-humeda-poliester-blick-econ-removebg-preview.png';
import traperoImg from '@/assets/complementarios/trapero_mopa-removebg-preview.png';
// cuidado personal
import alcohollImg from '@/assets/cuidado_personal/alcohol-multiusos.webp';
import jabonLiquidoImg from '@/assets/cuidado_personal/jabon_liquido.webp';
import shampooImg from '@/assets/cuidado_personal/shampoo.png';
// detergentes
import detergenteultrexImg from '@/assets/detergentes/detergente-ultrex.png';
import detergenteliquidoImg from '@/assets/detergentes/detergente_liquido.webp';
import detergenteBioImg from '@/assets/detergentes/detergente_liquido_bioz.webp';
//dispensadores
import dispensadorPapelImg from '@/assets/dispensadores/dispensador.png';
import dispensadorJabonImg from '@/assets/dispensadores/dispensador2.png';
//limpieza institucional
import alcoholInstiImg from '@/assets/limpieza_institucional/alcohol_institucional.webp';
import ambientalImg from '@/assets/limpieza_institucional/ambiental.webp';
import antisarroImg from '@/assets/limpieza_institucional/antisarro.webp';
import ceraImg from '@/assets/limpieza_institucional/cera_liquida.webp';
import cloroImg from '@/assets/limpieza_institucional/cloro.webp';
import desinfectanteBiozImg from '@/assets/limpieza_institucional/desinfectante_bioz.webp';
import desinfectanteImg from '@/assets/limpieza_institucional/desinfectante.webp';
import gelAntideImg from '@/assets/limpieza_institucional/gel_antibacterial_institucional.webp';
import jabonLiquidioBiozImg from '@/assets/limpieza_institucional/jabon_liquido_bioz.webp';
import kingrassImg from '@/assets/limpieza_institucional/kingrass.webp';
import lavaVajillasImg from '@/assets/limpieza_institucional/lava_vajillas.webp';
import limpiavidriosImg from '@/assets/limpieza_institucional/limpiavidrios.png';
import suavizanteImg from '@/assets/limpieza_institucional/suavizante.webp';
//linea automotriz
import shampooAutoImg from '@/assets/linea_automotriz/shampoo.png';
import siliconAutoImg from '@/assets/linea_automotriz/silicon.webp';
// seguridad
import guanteEternaImg from '@/assets/seguridad/guante-eterna.png';
import guanteNitriloImg from '@/assets/seguridad/nitrilo_wave-removebg-preview.png';
//LOGO
import logoImg from '@/assets/logo1.svg';

// FICHAS TÉCNICAS
import fichaTecnicaAlcohol from '@/assets/hojas_tecnicas/ALCOHOL_MULTIUSOS_MR_CLEAN.pdf';
import fichaTecnicaCera from '@/assets/hojas_tecnicas/CERA_LÍQUIDA_MR_CLEAN.pdf';
import fichaTecnicaCloro from '@/assets/hojas_tecnicas/CLORO_RELUCIENTE.pdf';
import fichaTecnicaDesinfectante from '@/assets/hojas_tecnicas/DESINFECTANTE.pdf';
import fichaTecnicaDetergenteBioz from '@/assets/hojas_tecnicas/DETERGENTE_BIOZ.pdf';
import fichaTecnicaDetergenteLiquido from '@/assets/hojas_tecnicas/DETERGENTE_LÍQUIDO_RELUCIENTE.pdf';
import fichaTecnicaJabon from '@/assets/hojas_tecnicas/JABÓN_ANTIBACTERIAL_RELUCIENTE.pdf';
import fichaTecnicaKingras from '@/assets/hojas_tecnicas/KINGRAS.pdf';
import fichaTecnicaLavaVajilla from '@/assets/hojas_tecnicas/LAVAVAJILLA_MR_CLEAN.pdf';
import fichaTecnicaShampooAutos from '@/assets/hojas_tecnicas/SHAMPOO_AUTOS_RELUCIENTE.pdf';
import fichaTecnicaSilicon from '@/assets/hojas_tecnicas/SILICON_MR_CLEAN.pdf';
import fichaTecnicaAntisarro from '@/assets/hojas_tecnicas/Antisarro_Reluciente.pdf';
import fichaTecnicaShampoo from '@/assets/hojas_tecnicas/SHAMPOO.pdf';
import fichaTecnicaAmbiental from '@/assets/hojas_tecnicas/AMBIENTAL.pdf';









// Definición de tipos
interface ProductVariation {
  presentation?: string;
  aroma?: string;
  price?: string;
  image?: string;
}
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  variations?: ProductVariation[];
  techSheet?: string;

}

// categorías
const CATEGORIES = [
  'TODOS',
  'CUIDADO PERSONAL',
  'LIMPIEZA INSTITUCIONAL',
  'ABSORBENTES',
  'DETERGENTES',
  'COMPLEMENTARIOS',
  'LÍNEA AUTOMOTRIZ',
  'SEGURIDAD',
  'DISPENSADORES',


];

// Base de datos de productos
const PRODUCTS: Product[] = [
  // ABSORBENTES
  {
    id: 1,
    name: "Limpión natural industrial",
    category: "ABSORBENTES",
    description: "Limpión Eco Natural Biodegradable marca Yasuní, ideal para uso en varias industrias: Hotelera, alimenticia, hospitalaria. Uso institucional y doméstico.",
    image: limpionImg,
    variations: [
      { presentation: "Rollo (300 metros)", },
      { presentation: "Rollo (600 metros)", },
    ]
  },
  {
    id: 2,
    name: "Paño de Microfibra",
    category: "ABSORBENTES",
    description: "Descubre la eficiencia y suavidad de nuestros paños de microfibra, diseñados para ofrecerte una limpieza impecable en cada uso. Fabricados con tecnología de vanguardia, estos paños son ideales para todo tipo de superficies, desde cristales y muebles hasta el interior de tu coche. ",
    image: panomicroImg,
    variations: [
      { presentation: "Rojo" },
      { presentation: "Verde" },
      { presentation: "Azul" },
      { presentation: "Amarillo" },
    ]
  },
  {
    id: 3,
    name: "Papel higiénico jumbo",
    category: "ABSORBENTES",
    description: "Producto de línea institucional, de tráfico alto, adecuado para el uso en oficinas, restaurantes, clínicas, etc. adecuado para el uso en oficinas, restaurantes, clínicas, etc. ",
    image: papelImg,
    variations: [
      { presentation: "200 mts", },
      { presentation: "250 mts", }

    ]
  },
  {
    id: 4,
    name: "Toalla Z blanca",
    category: "ABSORBENTES",
    description: "Toalla de manos en Z ideal para el secado e higiene de manos. Puede utilizar en baños, cocinas, salones, restaurants o establecimientos comerciales. Cuenta con máximo poder de absorción y retención de líquidos. ",
    image: toallazImg,
  },

  //COMPLEMENTARIOS

  {
    id: 5,
    name: "Escoba tipo Zulia",
    category: "COMPLEMENTARIOS",
    description: "Su diseño con cerdas suaves o duras, dependiendo del modelo, permite adaptarse a diversas necesidades, desde la remoción de polvo en interiores hasta la limpieza de áreas exteriores con suciedad más persistente. ",
    image: escobaImg,

  },
  {
    id: 6,
    name: "Mopa húmeda de poliéster",
    category: "COMPLEMENTARIOS",
    description: " Mopa húmeda sirve para la limpieza en los hogares y todo recinto de trabajo de oficinas. Ideal para usar con desinfectantes en pisos como: vinil, cerámica, porcelanato, mármol, baldosa, madera, es decir en pisos regulares. Son más eficientes para limpiar grandes superficies y llegar a rincones de difícil acceso, reducen el tiempo de limpieza y el costo de mano de obra. ",
    image: mopaImg,

  },
  {
    id: 7,
    name: "Trapero Mopa",
    category: "COMPLEMENTARIOS",
    description: " El trapero mopa es una herramienta de limpieza versátil y eficiente, ideal para mantener tus pisos impecables. Su diseño permite una fácil maniobrabilidad y acceso a rincones difíciles, garantizando una limpieza profunda en todo tipo de superficies.",
    image: traperoImg,

  },
  // CUIDADO PERSONAL

  {
    id: 8,
    name: "Alcohol Multiusos AL 70%",
    category: "CUIDADO PERSONAL",
    description: "Desinfectante y sanitizante de todo tipo de superficies, ideal para eliminar el 99% de microorganismos perjudiciales, y disminuir el riesgo de contaminación indirecta por contacto de superficies contaminadas. ",
    image: alcohollImg,
    variations: [
      { presentation: "Botella (500ml)", },
      { presentation: "Botella (250ml)", },
      { presentation: "Botella (110ml)", },
      { presentation: "Botella (1L)", },
      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)", }
    ],
    techSheet: fichaTecnicaAlcohol,

  },
  {
    id: 9,
    name: "Jabón Líquido Antibacterial",
    category: "CUIDADO PERSONAL",
    description: "Sus componentes antibacteriales limpian y desinfectan tu piel, y gracias a su nueva formula con Glicerina tu piel estará más protegida, suave y tersa.",
    image: jabonLiquidoImg,
    variations: [
      { presentation: "Botella (500ml)", aroma: "Mora Azul", },
      { presentation: "Botella (250ml)", aroma: "Citrus Mix", },
      { presentation: "Botella (110ml)", aroma: "Vainilla", },
      { presentation: "Botella (1L)", aroma: "Manzana Verde", },
      { presentation: "Galón (4L)", aroma: "Frutos rojos (perlado)" },
      { presentation: "Caneca (20L)", aroma: "Brisa (perlado)" },
      { aroma: "Almendra (perlado)" }
    ],
    techSheet: fichaTecnicaJabon,

  },
  {
    id: 10,
    name: "Shampoo Hidratante",
    category: "CUIDADO PERSONAL",
    description: "Nuestro shampoo está diseñado para nutrir y proteger tu cabello desde la raíz hasta las puntas. La fórmula suave, pero efectiva, elimina suavemente la suciedad y el exceso de grasa sin resecar el cuero cabelludo.",
    image: shampooImg,
    variations: [
      { presentation: "Botella (1L)", aroma: "Manzanilla", },
      { presentation: "Botella (1L)", aroma: "Romero", },
      { presentation: "Galón (4L)", aroma: "Manzanilla", },
      { presentation: "Galón (4L)", aroma: "Romero", },

    ],
    techSheet: fichaTecnicaShampoo,
  },
  // DETERGENTES
  {
    id: 11,
    name: "Detergente Líquido BIOZ",
    category: "DETERGENTES",
    description: " Detergente Líquido BIOZ es un detergente concentrado. La presencia de sus componentes biodegradables en su formulación facilita la limpieza de telas manchadas con grasa de alimentos (grasas freídas, aceites para ensalada, mantequilla,salsas y sopas, sudor y otros residuos corporales.",
    image: detergenteBioImg,
    variations: [
      { presentation: "Botella (1L)", aroma: "Floral", },
      { presentation: "Botella (1L)", aroma: "Cítrico", },
      { presentation: "Galón (4L)", aroma: "Floral", },
      { presentation: "Galón (4L)", aroma: "Cítrico", },
      { presentation: "Caneca (20L)", aroma: "Floral", },
      { presentation: "Caneca (20L)", aroma: "Neutro", }
    ],
    techSheet: fichaTecnicaDetergenteBioz,
  },
  {
    id: 12,
    name: "Detergente Líquido ",
    category: "DETERGENTES",
    description: " Detergente Líquido Reluciente es un detergente concentrado 100% biodegradable. La presencia de sus componentes biodegradables en su formulación facilita la limpieza de telas manchadas con grasa de alimentos (grasas freídas, aceites para ensalada, mantequilla, salsas y sopas), sudor y residuos de cosméticos.",
    image: detergenteliquidoImg,
    variations: [
      { presentation: "Botella (1L)", aroma: "Aroma Soft", },
      { presentation: "Galón (4L)", aroma: "Aroma Soft", },
      { presentation: "Caneca (20L)", aroma: "Aroma Soft", },

    ],
    techSheet: fichaTecnicaDetergenteLiquido,
  },

  {
    id: 13,
    name: "Detergente Ultrex",
    category: "DETERGENTES",
    description: "Ultrex: Limpieza profunda para tu ropa con tecnología Fibraprotec. Elimina manchas difíciles y protege el color de tus prendas, dejándolas con un aroma fresco y duradero. ¡Descubre la diferencia de Ultrex!",
    image: detergenteultrexImg,
    variations: [
      { presentation: "3kg", aroma: "Floral", },

    ]
  },
  // DISPENSADORES
  {
    id: 14,
    name: "Dispensador de Jabón Líquido",
    category: "DISPENSADORES",
    description: "Dispensador de jabón líquido ideal para cualquier tipo de ambiente. Le permite ahorrar el consumo del producto. Dispensador que brinda soluciones adecuadas para el jabón, protegiendo al producto del polvo y la humedad, modelo robusto y de gran capacidad con mantenimiento mínimo. Permite ahorrar costos, mejorar la higiene del lugar y cuidar la salud de los clientes.",
    image: dispensadorJabonImg,
    variations: [
      { presentation: "Blanco" },
      { presentation: "Gris" },

    ]
  },
  {
    id: 15,
    name: "Dispensador de  papel higiénico jumbo",
    category: "DISPENSADORES",
    description: "Dispensador para papel higiénico jumbo ideal para cualquier tipo de ambiente. Le permite ahorrar el consumo del producto. Dispensador que brinda soluciones adecuadas para el papel, protegiendo al producto del polvo y la humedad, modelo robusto y de gran capacidad con mantenimiento mínimo. Permite ahorrar costos, mejorar la higiene del lugar y cuidar la salud de los clientes.",
    image: dispensadorPapelImg,
    variations: [
      { presentation: "Blanco" },
      { presentation: "Gris" },

    ]
  },

  // LIMPIEZA INSTITUCIONAL
  {
    id: 16,
    name: "Alcohol Institucional",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Alcohol multiusos, ideal para desinfectar superficies y objetos de uso frecuente en instituciones. Elimina el 99.9% de gérmenes y bacterias.",
    image: alcoholInstiImg,
    variations: [

      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)", }

    ],
    techSheet: fichaTecnicaAlcohol,
  },
  {
    id: 17,
    name: "Aromatizante Ambiental",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Desodorante y aromatizante ambiental concentrado, especialmente formulado para eliminar y neutralizar olores desagradables, dejando un delicioso aroma, fresco y duradero en cualquier ambiente. ",
    image: ambientalImg,
    variations: [
      { presentation: "600 ml Aromizador", aroma: "Mora Azul", },
      { presentation: "600 ml Aromizador", aroma: "Floral", },
      { presentation: "Galón (4L)", aroma: "Manzana Canela", },
      { presentation: "Galón (4L)", aroma: "Brisa Marina", },
      { presentation: "Caneca (20L)", aroma: "Bambú", },

    ],
    techSheet: fichaTecnicaAmbiental,
  },
  {
    id: 18,
    name: "Antisarro",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Limpia el sarro de baños, sanitarios, paredes o pisos de cerámica, pisos de cemento o superficies duras., especialmente donde exista residuos de materia orgánica, actuando como un desincrustante efectivo. Removedor de incrustaciones calcáreas originadas por la presencia de aguas duras",
    image: antisarroImg,
    variations: [
      { presentation: "600 ml Aromizador", aroma: "Olor Característico", },
      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)" },
    ],
    techSheet: fichaTecnicaAntisarro,
  },
  {
    id: 19,
    name: "Cera Líquida Autobrillante",
    category: "LIMPIEZA INSTITUCIONAL",
    description:
      "Ideal para pisos de madera. Limpia y deja un brillo duradero con un agradable aroma. Crea también una barrera protectora contra los rayones, y disminuye la adherencia al polvo, dejando su piso limpio por mucho mas tiempo.",
    image: ceraImg,
    variations: [
      { presentation: "Botella(1L)" },
      { presentation: "Galón(4L)" },
      { presentation: "Caneca(20L)" },
    ],
    techSheet: fichaTecnicaCera,
  },
  {
    id: 20,
    name: "Cloro Multiusos",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Poderoso desinfectante de superficies lisas duras no porosas, potabilizador de agua y desmanchador/ blanqueador,. Permite una reducción inmediata de carga de bacterias, hongos y virus, incluyendo virus envueltos como el SARS-CoV2",
    image: cloroImg,
    variations: [
      { presentation: "Botella (1L)", },
      { presentation: "Botella (500ml)", },
      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)", },
      { presentation: "5.5%", },
      { presentation: "10% uso hospitalario)", }
    ],
    techSheet: fichaTecnicaCloro,
  },
  {
    id: 21,
    name: "Desinfectante BIOZ",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Desinfectante BIOZ, ideal para desinfectar superficies y objetos de uso frecuente en instituciones. Elimina el 99.9% de gérmenes y bacterias.",
    image: desinfectanteBiozImg,
    variations: [
      { presentation: "Botella (1L)", aroma: "Kiwi", },
      { presentation: "Botella (1L)", aroma: "Citrus Mix", },
      { presentation: "Galón", aroma: "Flores de Otoño", },
      { presentation: "Galón", aroma: "Floral", },
      { presentation: "Caneca (20L)", aroma: "Lavanda", },
      { presentation: "Galón (4L)", aroma: "Manzana Verde", },
      { presentation: "Caneca (20L)", aroma: "Brisa Marina", },
      { presentation: "Botella (1L)", aroma: "Eucalipto", },
      { presentation: "Galón", aroma: "Manzana Canela", },

    ],
    techSheet: fichaTecnicaDesinfectante,
  },

  {
    id: 22,
    name: "Desinfectante Concentrado",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Formulado a base de amonio cuaternario. Desinfectante de amplio espectro ideal para limpiar y desinfectar todo tipo de superficies, de aroma duradero gracias a su efectivo residual.",
    image: desinfectanteImg,
    variations: [
      { presentation: "Botella (1L)", aroma: "Kiwi", },
      { presentation: "Botella (1L)", aroma: "Citrus Mix", },
      { presentation: "Galón", aroma: "Flores de Otoño", },
      { presentation: "Galón", aroma: "Floral", },
      { presentation: "Caneca (20L)", aroma: "Lavanda", },
      { presentation: "Galón (4L)", aroma: "Manzana Verde", },
      { presentation: "Caneca (20L)", aroma: "Brisa Marina", },
      { presentation: "Botella (1L)", aroma: "Eucalipto", },
      { presentation: "Galón", aroma: "Manzana Canela", },

    ],
    techSheet: fichaTecnicaDesinfectante,
  },

  {
    id: 23,
    name: "Gel Antibacterial Institucional",
    category: "LIMPIEZA INSTITUCIONAL",
    description:
      "Sanitizante de manos de uso externo, a base de etanol. El uso adecuado garantiza la eliminación del 99% de microorganismos de las manos en 30 segundos.",
    image: gelAntideImg,
    variations: [
      { presentation: "Galón(4L)" },
      { presentation: "Caneca(20L)" },
    ]
  },

  {
    id: 24,
    name: "Jabón Líquido BIOZ",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Sus componentes antibacteriales limpian y desinfectan tu piel, y gracias a su nueva formula con Glicerina tu piel estará más protegida, suave y tersa.",
    image: jabonLiquidioBiozImg,
    variations: [
      { presentation: "Galón", aroma: "Kiwi", },
      { presentation: "Galón", aroma: "Citrus Mix", },
      { presentation: "Galón", aroma: "Flores de Otoño", },
      { presentation: "Galón", aroma: "Floral", },
      { presentation: "Caneca (20L)", aroma: "Lavanda", },
      { presentation: "Galón (4L)", aroma: "Manzana Verde", },
      { presentation: "Caneca (20L)", aroma: "Brisa Marina", },
      { presentation: "Caneca (20L)", aroma: "Eucalipto", },
      { presentation: "Galón", aroma: "Manzana Canela", },
    ],
    techSheet: fichaTecnicaJabon,
  },

  {
    id: 25,
    name: "Kingras Desengrasante",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Sus propiedades de limpiador desengrasante, el producto puede utilizarse en industrias alimenticias para el aseo de pisos, maquinarias, equipos,utensilios, lavado de mesas, vajillas y cristalería de restaurantes. KINGRAS 100 ontiene agentes ablandadores que permiten su uso en aguas duras, resultando en un perfecto limpiador para las cubiertas de embarcaciones, buques, camarotes y utensilios diversos. ",
    image: kingrassImg,
    variations: [
      { presentation: "Botella (Litro)" },
      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)" },
    ],
    techSheet: fichaTecnicaKingras,
  },

  {
    id: 26,
    name: "Lava Vajillas",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Detergente líquido especializado para el lavado y limpieza de la vajilla y utensilios de cocina. No tóxico, biodegradable, su formula está diseñada para eliminar la grasa y suciedad sin dejar aroma, para evitar la contaminación por transferencia a los alimentos, de fácil enjuague. Delicado con tus manos.",
    image: lavaVajillasImg,
    variations: [
      { presentation: "Botella (Litro)", aroma: "Manzana Verde", },
      { presentation: "Galón (4L)", aroma: "Manzana Verde" },
      { presentation: "Caneca (20L)", aroma: "Manzana Verde" },
    ],
    techSheet: fichaTecnicaLavaVajilla,

  },

  {
    id: 27,
    name: "Limpiavidrios",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "s un limpiador de vidrios antiempañante, formulado especialmente para eliminar los depósitos de suciedad y grasa en las superficies de cristal y espejos. De secado rápido.",
    image: limpiavidriosImg,
    variations: [
      { presentation: "600 ml atomizador", },
      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)", }
    ]
  },

  {
    id: 28,
    name: "Suavizante de Ropa",
    category: "LIMPIEZA INSTITUCIONAL",
    description: "Suaviza y protege las fibras textiles de tus prendas, prolongando el color y la vida útil de las mismas, con encapsuladores de aroma que hacen perdurar su fragancia,   y la sensación de limpio y  fresco en la ropa.",
    image: suavizanteImg,
    variations: [
      { presentation: "Botella (1L)", aroma: "Aroma Soft", },
      { presentation: "Galón (4L)", aroma: "Aroma Soft", },
      { presentation: "Caneca (20L)", aroma: "Aroma Soft", }
    ]
  },
  // LÍNEA AUTOMOTRIZ

  {
    id: 29,
    name: "Shampoo de Autos",
    category: "LÍNEA AUTOMOTRIZ",
    description: "Producto especializado en el lavado profesional de automóviles o carrocerías en general. Elimina suciedades como polvo, lodo, insectos, basura y grasas, dejando un brillo duradero en la superficie y cuidando la pintura original .",
    image: shampooAutoImg,
    variations: [
      { presentation: "Botella (1L tapa fliptop)", },
      { presentation: "Galón (4L)", },
      { presentation: "Caneca (20L)", }
    ],
    techSheet: fichaTecnicaShampooAutos,
  },
  {
    id: 30,
    name: "Silicona para Autos",
    category: "LÍNEA AUTOMOTRIZ",
    description: "Es un protector de superficies desarrollado especialmente para la industria automotriz,  limpia, da brillo duradero y protección contra los rayos ultra violetas al cuero natural o sintético, vinil, plástico, tapiz, y caucho, creando una barrera protectora en la superficie.",
    image: siliconAutoImg,
    variations: [
      { presentation: "Botella (1L con atomizador)", aroma: "Brillante", },
      { presentation: "Galón (4L)", aroma: "Brillante", },
      { presentation: "Botella (500ml)", aroma: "Brillante" }
    ],
    techSheet: fichaTecnicaSilicon,
  },

  // SEGURIDAD

  {
    id: 31,
    name: "Guante Eterna",
    category: "SEGURIDAD",
    description: "Guante de látex natural, con recubrimiento de polvo, para uso general. Proporciona una excelente protección contra productos químicos y abrasivos.",
    image: guanteEternaImg,
    variations: [
      { presentation: "Talla S", },
      { presentation: "Talla M", },
      { presentation: "Talla L", },
      { presentation: "Talla XL", }
    ]
  },
  {
    id: 32,
    name: "Guante Nitrilo Wave",
    category: "SEGURIDAD",
    description: "Guante desechable de nitrilo sin polvo, ideal para uso en laboratorios, hospitales y limpieza. Ofrece alta resistencia a productos químicos y perforaciones.",
    image: guanteNitriloImg,
    variations: [
      { presentation: "Talla S", },
      { presentation: "Talla M", },
      { presentation: "Talla L", },
      { presentation: "Talla XL", }
    ]
  },




];

const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPresentation, setSelectedPresentation] = useState<string>('');
  const [selectedAroma, setSelectedAroma] = useState<string>('');
  const MARCAS = ['Yasuní', 'Mr. Clean', 'Reluciente', 'BIOZ', 'Eterna', 'Wave'];
  const PREMIUM_IDS = [25, 12];
  const PREMIUM_PRODUCTS = PRODUCTS.filter(p => PREMIUM_IDS.includes(p.id));


  const [selectedBrand, setSelectedBrand] = useState<string>('');

  const handleSelectPremium = (id: number) => {
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod) openProductModal(prod);
  };

  // Filtrar productos cuando cambia la categoría o la búsqueda
  useEffect(() => {
    let filtered = PRODUCTS;

    // Filtrar por categoría
    if (selectedCategory !== 'TODOS') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  // Función para abrir modal con detalles del producto
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    // Resetear variaciones seleccionadas
    setSelectedPresentation('');
    setSelectedAroma('');
    // Si el producto tiene variaciones, seleccionar la primera por defecto
    if (product.variations && product.variations.length > 0) {
      setSelectedPresentation(product.variations[0].presentation);
      setSelectedAroma(product.variations[0].aroma);
    }
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  };

  // Función para cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restaurar scroll del body
  };

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Logo de la empresa */}
          <img
            src={logoImg}
            alt="Logo de la empresa"
            className="mx-auto mb-6 w-64 h-auto"
            style={{ maxHeight: 220 }}
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Catálogo Digital
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos de limpieza y cuidado personal
          </p>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full sm:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Contador de productos */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">
            {selectedCategory === 'TODOS' ? 'Todos los productos' : selectedCategory}
          </h2>
          <Badge variant="secondary" className="text-sm">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </div>

      {/* Grid de Productos */}


      <div className="container mx-auto px-4 pb-12">
        <div className="flex">
          <SidebarCatalog
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            categories={CATEGORIES}
            brands={MARCAS}
            premiumProducts={PREMIUM_PRODUCTS.map(p => ({
              id: p.id,
              name: p.name,
              image: p.image,
            }))}
            onSelectPremium={handleSelectPremium}
          />
          <main className="flex-1 pl-0 sm:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                  onClick={() => openProductModal(product)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-muted-foreground">
                  No hay productos disponibles en esta categoría.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>




      {/* Modal de Detalles */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Detalles del Producto
              </h2>

              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {selectedProduct.category}
                    </Badge>
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                      {selectedProduct.name}
                    </h1>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Descripción
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    {selectedProduct.techSheet && (
                      <a
                        href={selectedProduct.techSheet}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4"
                      >
                        <Button
                          className="w-full md:w-auto text-white border-none [background-color:#A1CE7D] hover:bg-blue-600 hover:text-white"
                          variant="outline"
                        >
                          Descargar ficha técnica
                        </Button>
                      </a>
                    )}

                  </div>

                  {/* Variaciones del producto */}
                  {selectedProduct.variations && selectedProduct.variations.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        Variaciones Disponibles
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Selector de Presentación */}
                        {selectedProduct.variations.some(v => v.presentation) && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">
                              Presentación
                            </label>
                            <Select value={selectedPresentation} onValueChange={setSelectedPresentation}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccionar presentación" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border shadow-lg">
                                {[...new Set(selectedProduct.variations.map(v => v.presentation).filter(Boolean))].map((presentation) => (
                                  <SelectItem key={presentation} value={presentation}>
                                    {presentation}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        {/* Selector de Aroma */}
                        {selectedProduct.variations.some(v => v.aroma) && (
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">
                              Aroma
                            </label>
                            <Select value={selectedAroma} onValueChange={setSelectedAroma}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccionar aroma" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border shadow-lg">
                                {[...new Set(selectedProduct.variations.map(v => v.aroma).filter(Boolean))].map((aroma, index) => (
                                  <SelectItem key={index} value={aroma}>
                                    {aroma}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>

                      {/* Información de la variación seleccionada */}
                      {(selectedPresentation || selectedAroma) && (
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium text-foreground mb-2">
                            Variación Seleccionada
                          </h4>
                          {selectedPresentation && (
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Presentación:</span> {selectedPresentation}
                            </p>
                          )}
                          {selectedAroma && (
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Aroma:</span> {selectedAroma}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-4">
                    <Button
                      onClick={closeModal}
                      className="w-full md:w-auto"
                    >
                      Cerrar Detalles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;