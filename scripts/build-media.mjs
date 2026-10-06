// Genera las versiones web de fotos y videos a partir del material crudo.
// Uso: npm run media            (salta lo que ya existe)
//      npm run media -- --force (regenera todo)
// Carpeta de origen: FIDALGO_ASSETS o ../fidalgo-studio-assets/LANDING PAGE @fidalgostudio
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import heicConvert from 'heic-convert';
import ffmpeg from 'ffmpeg-static';
import { projects, reels, heroCuts, showreel } from './media.config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = process.env.FIDALGO_ASSETS ?? path.resolve(ROOT, '../fidalgo-studio-assets/LANDING PAGE @fidalgostudio');
const SRC = path.join(ASSETS, 'CLIENTES - PROYECTOS');
const PHOTOS_OUT = path.join(ROOT, 'src/assets/work');
const VIDEO_OUT = path.join(ROOT, 'public/media');
const force = process.argv.includes('--force');

if (!fs.existsSync(SRC)) {
  console.error(`No encuentro el material crudo en: ${SRC}\nDefiní FIDALGO_ASSETS con la ruta a "LANDING PAGE @fidalgostudio".`);
  process.exit(1);
}

const skip = (out) => !force && fs.existsSync(out);
const ff = (args) => execFileSync(ffmpeg, ['-v', 'error', '-y', ...args], { stdio: 'inherit' });
const mkdir = (dir) => fs.mkdirSync(dir, { recursive: true });

async function loadImage(file) {
  if (/\.heic$/i.test(file)) {
    const jpeg = await heicConvert({ buffer: fs.readFileSync(file), format: 'JPEG', quality: 0.95 });
    return sharp(Buffer.from(jpeg));
  }
  return sharp(file);
}

// Fotos: JPG de 2000 px de lado mayor. Astro genera AVIF/WebP responsive en el build.
for (const p of projects) {
  const outDir = path.join(PHOTOS_OUT, p.slug);
  mkdir(outDir);
  for (const [i, name] of p.photos.entries()) {
    const out = path.join(outDir, `${String(i + 1).padStart(2, '0')}.jpg`);
    if (skip(out)) continue;
    const img = await loadImage(path.join(SRC, p.dir, name));
    await img.rotate().resize(2000, 2000, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
    console.log('foto', path.relative(ROOT, out));
  }
}

// Reels: versión completa con audio + preview mudo en loop + poster.
const reelDir = path.join(VIDEO_OUT, 'reels');
mkdir(reelDir);
const vertical = 'scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1';
for (const r of reels) {
  const src = path.join(SRC, r.file);
  const full = path.join(reelDir, `${r.slug}.mp4`);
  const preview = path.join(reelDir, `${r.slug}-preview.mp4`);
  const poster = path.join(reelDir, `${r.slug}.webp`);
  if (!skip(full)) {
    ff(['-i', src, '-vf', vertical, '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', full]);
    console.log('reel', r.slug);
  }
  if (!skip(preview)) {
    ff(['-ss', '1', '-t', '8', '-i', src, '-vf', 'scale=480:854:force_original_aspect_ratio=increase,crop=480:854,setsar=1', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '30', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', preview]);
  }
  if (!skip(poster)) {
    const frame = path.join(reelDir, `${r.slug}.tmp.png`);
    ff(['-ss', '1.5', '-i', src, '-frames:v', '1', '-vf', vertical, frame]);
    await sharp(frame).webp({ quality: 72 }).toFile(poster);
    fs.rmSync(frame);
  }
}

// Hero: montaje vertical de cortes de 2 s, mudo, en loop.
const hero = path.join(VIDEO_OUT, 'hero.mp4');
if (!skip(hero)) {
  const inputs = heroCuts.flatMap(([file, ss]) => ['-ss', String(ss), '-t', '2', '-i', path.join(SRC, file)]);
  const chains = heroCuts.map((_, i) => `[${i}:v]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,fps=30[v${i}]`).join(';');
  const concat = heroCuts.map((_, i) => `[v${i}]`).join('') + `concat=n=${heroCuts.length}:v=1:a=0[out]`;
  ff([...inputs, '-filter_complex', `${chains};${concat}`, '-map', '[out]', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '29', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', hero]);
  ff(['-ss', '0.5', '-i', hero, '-frames:v', '1', path.join(VIDEO_OUT, 'hero.tmp.png')]);
  await sharp(path.join(VIDEO_OUT, 'hero.tmp.png')).webp({ quality: 72 }).toFile(path.join(VIDEO_OUT, 'hero.webp'));
  fs.rmSync(path.join(VIDEO_OUT, 'hero.tmp.png'));
  console.log('hero');
}

// Showreel horizontal (Baum): se recorta el 12 % inferior para sacar los subtítulos quemados.
const reel = path.join(VIDEO_OUT, 'showreel.mp4');
if (!skip(reel)) {
  ff(['-ss', String(showreel.start), '-t', String(showreel.duration), '-i', path.join(SRC, showreel.file), '-vf', 'crop=iw:ih*0.88:0:0,scale=1600:-2,setsar=1', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', reel]);
  ff(['-ss', '1', '-i', reel, '-frames:v', '1', path.join(VIDEO_OUT, 'showreel.tmp.png')]);
  await sharp(path.join(VIDEO_OUT, 'showreel.tmp.png')).webp({ quality: 72 }).toFile(path.join(VIDEO_OUT, 'showreel.webp'));
  fs.rmSync(path.join(VIDEO_OUT, 'showreel.tmp.png'));
  console.log('showreel');
}

console.log('Listo.');
