// Contenido de la landing. Los textos salen del PDF "Portfolio + Servicios 2026" de Tomás.
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
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export const aboutTags = ['Creación de contenido', 'Fotografía', 'Video', 'Edición', 'Comunicación'];

export const services = [
  {
    title: 'Creación de contenido',
    text: 'Conceptos, ideas, guiones y piezas pensadas para comunicar en redes sociales.',
    tags: 'Reels · contenido mensual · campañas',
  },
  {
    title: 'Fotografía + video',
    text: 'Producciones visuales para marcas, productos, servicios y comunicación digital.',
    tags: 'Foto · video · producción · dirección visual',
  },
  {
    title: 'Edición audiovisual',
    text: 'Material en bruto convertido en piezas terminadas, dinámicas y adaptadas a cada plataforma.',
    tags: 'Reels · ads · institucional · vertical/horizontal',
  },
  {
    title: 'Estrategia de contenido',
    text: 'Definición de qué comunicar, cómo hacerlo y qué formatos tienen sentido para cada proyecto.',
    tags: 'Objetivos · ejes · ideas · planificación',
  },
  {
    title: 'Gestión de redes sociales',
    text: 'Planificación y coordinación de una presencia digital coherente, activa y alineada con la marca.',
    tags: 'Calendario · copys · publicación · análisis',
  },
];

export const skills = [
  {
    title: 'Fotografía + dirección visual',
    text: 'Creo imágenes con enfoque estético y una comunicación visual clara, buscando que cada producción represente la identidad de la marca.',
  },
  {
    title: 'Edición + narrativa audiovisual',
    text: 'Trabajo ritmo, estructura, sonido e imagen para transformar material grabado en piezas que mantengan la atención y comuniquen con claridad.',
  },
  {
    title: 'Comunicación + redacción creativa',
    text: 'Desarrollo conceptos, guiones y textos adaptados a la identidad de cada marca y al formato donde va a comunicar.',
  },
  {
    title: 'Estrategia + coordinación',
    text: 'Ordeno objetivos, necesidades y recursos para que las ideas puedan convertirse en proyectos concretos, coherentes y realizables.',
  },
];

export const collabs = [
  {
    title: 'Identidad visual + diseño',
    text: 'Branding e identidad, logotipos, diseño gráfico y editorial, packaging, merchandising, papelería corporativa y motion graphics.',
    tags: 'Brochures · menús · portadas · banners · stands · cartelería · folletos',
  },
  {
    title: 'Publicidad digital',
    text: 'Meta Ads, Google Ads, estrategia de campañas, segmentación, optimización y reportes.',
  },
  {
    title: 'Web + software',
    text: 'Landing pages, sitios web, plataformas, sistemas a medida y soluciones digitales con IA.',
  },
];

export const steps = [
  { title: 'Contame', text: 'Qué estás haciendo hoy y qué te gustaría mejorar.' },
  { title: 'Analizamos', text: 'Qué necesita realmente el proyecto y dónde está la oportunidad.' },
  { title: 'Definimos', text: 'Qué servicios tienen sentido, sin sumar cosas porque sí.' },
  { title: 'Coordinamos', text: 'Producción, ejecución y especialistas desde un mismo lugar.' },
];

export const proposals = [
  { title: 'Proyecto puntual', text: 'Una producción, campaña, sesión, pieza audiovisual o necesidad concreta.' },
  { title: 'Acompañamiento mensual', text: 'Contenido, planificación y continuidad para sostener la comunicación de la marca.' },
  { title: 'Proyecto integral', text: 'Combinación de contenido con diseño, pauta o desarrollo digital junto a especialistas.' },
];

export type Project = (typeof projectMedia)[number];
export type Reel = (typeof reelMedia)[number];
export const projects: Project[] = projectMedia;
export const reels: Reel[] = reelMedia;

// Marcas para la cinta de clientes.
export const clients = [
  'Rich', 'Hola Manola', 'Creá Bijou', 'Cata Majul', 'Imperial', 'La Base MKT', 'KEI Software',
  'Vincent Moto Garage', 'Cruda', 'Bruce Academy', 'Luna Andina', 'Baum', 'Sunny Piletas',
];
