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
	thumb: string;
	/** Enlace opcional al proyecto (video, Behance, etc.) */
	href?: string;
}

/**
 * Lista completa de trabajos para /portfolio.
 * ============================================================
 * 👉 EDITA AQUÍ para agregar, quitar o mover trabajos.
 * - thumb: ruta de la imagen (colócala en /public/images/... y referencia igual que abajo)
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
		thumb: '/images/about-me/03.jpg'
	},
	{
		slug: 'ferrari-296',
		category: 'automotriz',
		title: 'Ferrari 296 GTS',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / Speedramps',
		thumb: '/images/about-me/04.jpg'
	},
	{
		slug: 'supercars',
		category: 'automotriz',
		title: 'Supercars',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / detalle',
		thumb: '/images/about-me/05.jpg'
	},
	{
		slug: 'podium-bc-event',
		category: 'eventos',
		title: 'Podium BC Event',
		subtitle: 'Cobertura de eventos',
		tags: 'Evento / cobertura completa',
		thumb: '/images/DSC01204.jpg'
	},
	{
		slug: 'tunica-en-dubai',
		category: 'musical',
		title: 'Túnica en Dubai - Emmus',
		subtitle: 'Video musical',
		tags: 'Dirección / edición',
		thumb: '/images/about-me/01.jpg',
		href: 'https://www.youtube.com/watch?v=OTTS_X6VSsY'
	},
	{
		slug: 'medellin-noche',
		category: 'foto',
		title: 'Ciudad nocturna',
		subtitle: 'Fotografía',
		tags: 'Urban / mood',
		thumb: '/images/MedellinCityPortada.jpg'
	},
	{
		slug: 'brand-visual',
		category: 'diseno',
		title: 'Identidad visual',
		subtitle: 'Diseño',
		tags: 'Branding / piezas',
		thumb: '/images/about-me/02.jpg'
	},
	{
		slug: 'ai-concept',
		category: 'ia',
		title: 'Concept IA',
		subtitle: 'Producción con IA',
		tags: 'Dirección creativa',
		thumb: '/images/about-me/06.jpg'
	}
];
