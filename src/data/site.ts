// Contenido de la landing. Los textos salen del PDF "FS destacadas" (copy definitivo) de Tomás.
import { projects as projectMedia, reels as reelMedia } from '../../scripts/media.config.mjs';

const whatsappNumber = '5493815954431';

export const contact = {
  whatsappDisplay: '+54 9 381 595 4431',
  whatsappUrl: (text = 'Hola Tomás! Vengo de la web y quiero contarte sobre mi proyecto.') =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
  email: 'tomifidalgo7@gmail.com',
  instagram: '@fidalgostudio',
  instagramUrl: 'https://www.instagram.com/fidalgostudio/',
};

export const nav = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reels', href: '#reels' },
  { label: 'Studio', href: '#studio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

// Destacada 01 — STUDIO: tres placas. Cada línea es una lista de tramos: [texto, true] va en blanco,
// [texto, false] en gris (selective emphasis), en el mismo orden que el copy del PDF.
type Segment = [string, boolean];
export const studio: { tag: string; title: [string, string]; lines: Segment[][] }[] = [
  {
    tag: 'Qué es',
    title: ['Fidalgo', 'Studio'],
    lines: [
      [['Estudio creativo especializado en', false], ['contenido, fotografía, video y edición.', true]],
      [['Estética + estrategia', true], ['para transformar ideas en', false], ['piezas visuales con identidad.', true]],
    ],
  },
  {
    tag: 'Quién está detrás',
    title: ['Hola, soy', 'Tomás Fidalgo.'],
    lines: [
      [['Creador de contenido,', false], ['fotógrafo, videógrafo y editor.', true]],
      [
        ['Trabajo con marcas para entender', false],
        ['qué quieren comunicar', true],
        ['y encontrar la mejor manera de convertirlo en contenido.', false],
      ],
    ],
  },
  {
    tag: 'Manifiesto',
    title: ['Más que', 'crear contenido,'],
    lines: [
      [['buscamos comunicar, conectar', false], ['y reflejar la esencia de cada marca.', true]],
      [['Construimos identidades visuales', false], ['con algo para decir.', true]],
    ],
  },
];

// Destacada 02 — SERVICIOS. `collab: true` = en colaboración con profesionales especializados.
export const services = [
  {
    title: 'Creación de contenido',
    text: 'Conceptos, ideas, guiones y piezas pensadas para comunicar en redes sociales.',
    tags: ['Reels', 'Contenido mensual', 'Campañas'],
  },
  {
    title: 'Fotografía + video',
    text: 'Producciones visuales para marcas, productos, servicios y comunicación digital.',
    tags: ['Foto', 'Video', 'Producción', 'Dirección visual'],
  },
  {
    title: 'Edición audiovisual',
    text: 'Transformamos material en bruto en piezas terminadas, dinámicas y adaptadas a cada plataforma.',
    tags: ['Reels', 'Ads', 'Institucional', 'Vertical / horizontal'],
  },
  {
    title: 'Estrategia de contenido',
    text: 'Definimos qué comunicar, cómo hacerlo y qué formatos tienen sentido para cada proyecto.',
    tags: ['Objetivos', 'Ejes', 'Ideas', 'Planificación'],
  },
  {
    title: 'Gestión de redes sociales',
    text: 'Planificación y coordinación de una presencia digital coherente, activa y alineada con la identidad de la marca.',
    tags: ['Calendario', 'Copys', 'Publicación', 'Análisis'],
  },
  {
    title: 'Diseño + identidad',
    text: 'Branding, identidad visual, logotipos, diseño gráfico y editorial, packaging, merchandising y motion graphics.',
    tags: ['Brochures', 'Menús', 'Portadas', 'Banners', 'Cartelería', 'Piezas gráficas'],
    collab: true,
  },
  {
    title: 'Publicidad digital',
    text: 'Estrategia y gestión de campañas para potenciar la presencia y los objetivos de cada marca.',
    tags: ['Meta Ads', 'Google Ads', 'Segmentación', 'Optimización', 'Reportes'],
    collab: true,
  },
  {
    title: 'Web + software',
    text: 'Desarrollo de soluciones digitales adaptadas a las necesidades de cada proyecto.',
    tags: ['Landing pages', 'Sitios web', 'Plataformas', 'Sistemas a medida', 'Soluciones con IA'],
    collab: true,
  },
];

export type Project = (typeof projectMedia)[number];
export type Reel = (typeof reelMedia)[number];
export const projects: Project[] = projectMedia;
export const reels: Reel[] = reelMedia;

// Marcas con las que trabajó (para los créditos del cierre)
export const clients = [
  'Rich', 'Hola Manola', 'Creá Bijou', 'Cata Majul', 'Imperial', 'La Base MKT', 'KEI Software',
  'Vincent Moto Garage', 'Cruda', 'Bruce Academy', 'Luna Andina', 'Baum', 'Sunny Piletas',
];
