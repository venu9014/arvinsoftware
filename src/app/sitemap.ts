import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arvinsoftware.com'; // Prepared canonical domain
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/technologies',
    '/contact',
    '/blog',
    '/careers',
    '/testimonials',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
