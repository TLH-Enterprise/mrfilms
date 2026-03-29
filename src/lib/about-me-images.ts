import fs from 'node:fs';
import path from 'node:path';

const ABOUT_DIR = path.join(process.cwd(), 'public/images/about-me');

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

/** Rutas públicas listas para <img src>, ordenadas por nombre de archivo. */
export function getAboutMeImageUrls(): string[] {
	if (!fs.existsSync(ABOUT_DIR)) return [];
	return fs
		.readdirSync(ABOUT_DIR)
		.filter((f) => IMAGE_EXT.test(f))
		.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
		.map((f) => `/images/about-me/${encodeURIComponent(f)}`);
}
