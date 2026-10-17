// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// TODO(SEO): reemplazar por el dominio de producción real (o definir SITE_URL en Vercel).
// No figura en README/docs/CLAUDE.md; este valor es un PLACEHOLDER.
const SITE_URL = process.env.SITE_URL ?? 'https://fidalgostudio.com.ar';

export default defineConfig({
  site: SITE_URL,
  // Sin la barra de herramientas de Astro que aparece abajo en desarrollo
  devToolbar: { enabled: false },
});
