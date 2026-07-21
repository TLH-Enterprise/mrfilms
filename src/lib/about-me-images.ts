import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const rawImages = import.meta.glob<{ default: ImageMetadata }>(
	'/src/assets/about-me/*.{jpg,jpeg,png,webp}',
	{ eager: true }
);

/** URLs optimizadas (WebP, ancho acotado) listas para <img src>, ordenadas por nombre de archivo. */
export async function getAboutMeImageUrls(): Promise<string[]> {
	const entries = Object.entries(rawImages).sort(([a], [b]) =>
		a.localeCompare(b, undefined, { sensitivity: 'base' })
	);

	const optimized = await Promise.all(
		entries.map(async ([, mod]) => {
			const result = await getImage({
				src: mod.default,
				format: 'webp',
				width: 1200,
				quality: 80
			});
			return result.src;
		})
	);

	return optimized;
}
