import { MetadataRoute } from 'next';
import { siteData } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourwebsite.com'; // Replace with your actual domain

  // Static pages
  const routes = [
    '',
    '/work',
    '/life',
    '/family',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add article pages if you have dynamic routes in the future
  // For now we just link to external articles, so no dynamic routes needed here

  return routes;
}
