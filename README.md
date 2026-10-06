# Fidalgo Studio — Landing

Landing page de **Fidalgo Studio** (Tomás Fidalgo): contenido, foto, video y estrategia.
Hecha con [Astro](https://astro.build), sin frameworks de UI. Se publica como sitio estático en Vercel.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
```

## Estructura

```
src/
  data/site.ts          Textos, servicios, contacto (sacados del PDF "Portfolio + Servicios 2026")
  components/           Una sección por archivo (Hero, Work, Reels, Services, ...)
  layouts/Base.astro    <head>, scroll suave (Lenis) y animaciones de aparición
  styles/global.css     Paleta y tipografías del manual de marca
  assets/work/<slug>/   Fotos del portfolio (Astro las convierte a WebP responsive en el build)
public/
  media/                Hero, showreel y reels (MP4 + poster)
  brand/                Logo, isotipo y textura
  fonts/                PP Neue Machina
scripts/
  media.config.mjs      Qué fotos y reels se usan de cada cliente
  build-media.mjs       Genera las versiones web desde el material crudo
```

## Cambiar fotos o reels

El material original (≈4,4 GB) **no está en el repo**. Vive en
`../fidalgo-studio-assets/LANDING PAGE @fidalgostudio/` (o la ruta que indiques en `FIDALGO_ASSETS`).

1. Editar `scripts/media.config.mjs` (agregar/quitar archivos o proyectos).
2. `npm run media` — genera solo lo que falta. `npm run media -- --force` regenera todo.
3. Si se agrega un proyecto nuevo, aparece solo en el portfolio.

## Marca

- Tipografías: **PP Neue Machina** (títulos) y **Manrope** (textos).
- Colores: `#FFFFFF` `#E9E9E9` `#6E6E6E` `#0D0D0D` y acento oliva `#96996E`.
