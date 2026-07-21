import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const rawImages = import.meta.glob<{ default: ImageMetadata }>(
	'/src/assets/highlights-carousel/*.{jpg,jpeg,png,webp}',
	{ eager: true }
);

/** URLs optimizadas (WebP, ancho acotado) para el carrusel de highlights del inicio. */
export async function getHighlightsCarouselImageUrls(): Promise<string[]> {
	const entries = Object.entries(rawImages).sort(([a], [b]) =>
		a.localeCompare(b, undefined, { sensitivity: 'base' })
	);

	const optimized = await Promise.all(
		entries.map(async ([, mod]) => {
			const result = await getImage({
				src: mod.default,
				format: 'webp',
				width: 960,
				quality: 78
			});
			return result.src;
		})
	);

	return optimized;
}
