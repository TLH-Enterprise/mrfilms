/** Categorías para filtros (coinciden con data-category en las cards) */
export type PortfolioWorkCategory = 'video' | 'foto' | 'diseno' | 'ia';

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
 * Edita aquí: imágenes en /public/..., categorías y textos.
 */
export const portfolioWorks: PortfolioWork[] = [
	{
		slug: 'porsche-gt3',
		category: 'video',
		title: 'Porsche GT3',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / Speedramp',
		thumb: '/images/about-me/03.jpg'
	},
	{
		slug: 'ferrari-296',
		category: 'video',
		title: 'Ferrari 296 GTS',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / Speedramps',
		thumb: '/images/about-me/04.jpg'
	},
	{
		slug: 'supercars',
		category: 'video',
		title: 'Supercars',
		subtitle: 'Videos automotrices',
		tags: 'Cinematic / detalle',
		thumb: '/images/about-me/05.jpg'
	},
	{
		slug: 'lifestyle-set',
		category: 'foto',
		title: 'Lifestyle',
		subtitle: 'Fotografía',
		tags: 'Editorial / marca',
		thumb: '/images/about-me/01.jpg'
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
