import type { APIRoute } from 'astro';

// Sitio de una sola página: sitemap generado en el build con la URL de `site`.
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('http://localhost:4321')).href.replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${base}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image><image:loc>${base}/og-fidalgo-studio.jpg</image:loc></image:image>
  </url>
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
