import type { ImageMetadata } from 'astro';

import img01 from '../assets/about-me/01.jpg';
import img02 from '../assets/about-me/02.jpg';
import img03 from '../assets/about-me/03.jpg';
import img04 from '../assets/about-me/04.jpg';
import img05 from '../assets/about-me/05.jpg';
import img06 from '../assets/about-me/06.jpg';
import dsc01204 from '../assets/DSC01204.jpg';
import medellinCityPortada from '../assets/MedellinCityPortada.jpg';

/** Categorías para filtros (coinciden con data-category en las cards) */
export type PortfolioWorkCategory =
	| 'automotriz'
	| 'eventos'
	| 'musical'
	| 'foto'
	| 'diseno'
	| 'ia';

export interface PortfolioWork {
	slug: string;
	category: PortfolioWorkCategory;
	title: string;
	subtitle: string;
	tags: string;
	thumb: ImageMetadata;
	/** Enlace opcional al proyecto (video, Behance, etc.) */
	href?: string;
}

/**
 * Lista completa de trabajos para /portfolio.
 * ============================================================
 * 👉 EDITA AQUÍ para agregar, quitar o mover trabajos.
 * - thumb: importa la imagen desde /src/assets/... (Astro la optimiza en build)
 * - category: debe ser una de las de PortfolioWorkCategory de arriba
 * - href: opcional, link externo (YouTube, Behance, etc.)
 * ============================================================
 */
export const portfolioWorks: PortfolioWork[] = [
	{
		slug: 'porsche-gt3',
		category: 'automotriz',
		title: 'Porsche GT3',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / Speedramp',
		thumb: img03
	},
	{
		slug: 'ferrari-296',
		category: 'automotriz',
		title: 'Ferrari 296 GTS',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / Speedramps',
		thumb: img04
	},
	{
		slug: 'supercars',
		category: 'automotriz',
		title: 'Supercars',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / detalle',
		thumb: img05
	},
	{
		slug: 'podium-bc-event',
		category: 'eventos',
		title: 'Podium BC Event',
		subtitle: 'Cobertura de eventos',
		tags: 'Evento / cobertura completa',
		thumb: dsc01204
	},
	{
		slug: 'tunica-en-dubai',
		category: 'musical',
		title: 'Túnica en Dubai - Emmus',
		subtitle: 'Video musical',
		tags: 'Dirección / edición',
		thumb: img01,
		href: 'https://www.youtube.com/watch?v=OTTS_X6VSsY'
	},
	{
		slug: 'medellin-noche',
		category: 'foto',
		title: 'Ciudad nocturna',
		subtitle: 'Fotografía',
		tags: 'Urban / mood',
		thumb: medellinCityPortada
	},
	{
		slug: 'brand-visual',
		category: 'diseno',
		title: 'Identidad visual',
		subtitle: 'Diseño',
		tags: 'Branding / piezas',
		thumb: img02
	},
	{
		slug: 'ai-concept',
		category: 'ia',
		title: 'Concept IA',
		subtitle: 'Producción con IA',
		tags: 'Dirección creativa',
		thumb: img06
	}
];
