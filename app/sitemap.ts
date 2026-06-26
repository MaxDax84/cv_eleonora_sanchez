import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.eleonorasanchez.it',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.eleonorasanchez.it/privacy-policy',
      lastModified: new Date('2025-06-26'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]
}
