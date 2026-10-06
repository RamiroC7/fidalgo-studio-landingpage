// Selección de material para la landing. Las rutas son relativas a
// "CLIENTES - PROYECTOS" dentro de la carpeta de assets crudos (fuera del repo).
// Para cambiar la selección: editar acá y correr `npm run media`.

export const projects = [
  {
    slug: 'rich',
    client: 'Rich',
    category: 'Gastronomía',
    services: 'Fotografía + Video',
    year: 2026,
    dir: '2026/RICH',
    photos: ['DSC01307.jpg', 'DSC01205.jpg', 'DSC02184.jpg', 'DSC01870.jpg', 'DSC03952.jpg', 'DSC02136.jpg'],
  },
  {
    slug: 'hola-manola',
    client: 'Hola Manola',
    category: 'Moda',
    services: 'Fotografía + Video',
    year: 2026,
    dir: '2026/HOLA MANOLA',
    photos: ['DSC00308.JPG', 'DSC00257.JPG', 'DSC00395.JPG', 'DSC00446.JPG', 'DSC00363.JPG', 'DSC00466.JPG'],
  },
  {
    slug: 'crea-bijou',
    client: 'Creá Bijou',
    category: 'Retail · Producto',
    services: 'Contenido + Fotografía',
    year: 2026,
    dir: '2026/CREA BIJOU',
    photos: ['DSC02615.jpg', 'DSC00696.jpg', 'DSC02656.jpg', 'DSC00594.jpg', 'DSC02617.jpg', 'DSC00753.jpg'],
  },
  {
    slug: 'cruda',
    client: 'Cruda',
    category: 'Gastronomía · Producto',
    services: 'Fotografía de producto',
    year: 2026,
    dir: '2026/CRUDA',
    photos: ['DSC01533.jpg', 'DSC01550.jpg', 'DSC01453.jpg', 'DSC01563.jpg'],
  },
  {
    slug: 'vincent-moto-garage',
    client: 'Vincent Moto Garage',
    category: 'Motos',
    services: 'Fotografía + Reels',
    year: 2025,
    dir: '2025/VINCENT MOTO GARAGE',
    photos: ['IMG_2892.heic', 'IMG_2896.heic', 'IMG_9484.heic', 'IMG_7838.heic'],
  },
  {
    slug: 'tres-en-uno',
    client: 'Tres en Uno',
    category: 'Teatro · Centro Cultural Flavio Virla',
    services: 'Fotografía de espectáculo',
    year: 2025,
    dir: '2025/TRES EN UNO (obra de teatro en el Centro Cultural Flavio Virla)',
    photos: ['IMG_3636_jpg.jpg', 'IMG_3670_jpg.jpg', 'IMG_3753_jpg.jpg', 'IMG_3648_jpg.jpg'],
  },
  {
    slug: 'djs',
    client: 'Juanchy Ferreyra & Jero Racedo',
    category: 'Eventos · DJs',
    services: 'Fotografía',
    year: 2025,
    dir: '2025/DJs Juanchy Ferreyra y Jero Racedo',
    photos: ['IMG_2534.heic', 'IMG_3001.PNG', 'IMG_2471.heic'],
  },
  {
    slug: 'luna-andina',
    client: 'Luna Andina',
    category: 'Joyería',
    services: 'Fotografía + Reels',
    year: 2025,
    dir: '2025/LUNA ANDINA',
    photos: ['IMG_2227.HEIC', 'IMG_2265.heic'],
  },
  {
    slug: 'sunny-piletas',
    client: 'Sunny Piletas',
    category: 'Producto',
    services: 'Fotografía de producto',
    year: 2025,
    dir: '2025/SUNNY PILETAS',
    photos: ['IMG_3068.heic', 'IMG_3066.heic'],
  },
];

// Reels verticales: se genera una versión completa con audio (720p) y un preview mudo en loop.
export const reels = [
  { slug: 'imperial', client: 'Cata Majul × Imperial', tag: 'Creación de contenido', file: '2026/CATA MAJUL/Reel Imperial.mp4' },
  { slug: 'rich-medallones', client: 'Rich', tag: 'Video + Edición', file: '2026/RICH/Reel Medallones.mp4' },
  { slug: 'crea-bijou-party-box', client: 'Creá Bijou', tag: 'Contenido + Edición', file: '2026/CREA BIJOU/Reel Party Box.mov' },
  { slug: 'hola-manola', client: 'Hola Manola', tag: 'Video de moda', file: '2026/HOLA MANOLA/Reel 20_5.mp4' },
  { slug: 'la-base-mkt', client: 'La Base MKT', tag: 'Guion + Edición', file: '2026/LA BASE MKT/Reel 4.mp4' },
  { slug: 'kei-software', client: 'KEI Software', tag: 'Contenido institucional', file: '2026/KEI SOFTWARE/Reel 2.mp4' },
  { slug: 'vincent', client: 'Vincent Moto Garage', tag: 'Video de producto', file: '2025/VINCENT MOTO GARAGE/Reel #2.mp4' },
  { slug: 'bruce-academy', client: 'Cata Majul × Bruce Academy', tag: 'Creación de contenido', file: '2026/CATA MAJUL/Bruce Academy (3).mp4' },
  { slug: 'crea-bijou-fornitura', client: 'Creá Bijou', tag: 'Video de producto', file: '2026/CREA BIJOU/Reel Fornitura.mov' },
  { slug: 'luna-andina', client: 'Luna Andina', tag: 'Video de joyería', file: '2025/LUNA ANDINA/Reel #1.mov' },
];

// Montaje vertical para el hero: [archivo, segundo de inicio] → cortes de 2 s.
export const heroCuts = [
  ['2026/RICH/Reel Medallones.mp4', 6],
  ['2026/HOLA MANOLA/Reel 20_5.mp4', 2],
  ['2025/VINCENT MOTO GARAGE/Reel #2.mp4', 3],
  ['2026/CREA BIJOU/Reel Fornitura.mov', 4],
  ['2026/CATA MAJUL/Reel Imperial.mp4', 9],
  ['2025/LUNA ANDINA/Reel #1.mov', 1],
];

// Video horizontal cinematográfico (Baum). Se recorta abajo para sacar los subtítulos quemados.
export const showreel = { file: '2025/BAUM/Reel #2.mov', start: 2, duration: 20 };
