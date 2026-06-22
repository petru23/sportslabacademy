import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/camp',
    '/coaching',
    '/junior-program',
    '/elite-soccer-clinic',
    '/multisport-camp',
    '/italy-tour',
    '/team',
    '/sponsor',
    '/tap-test',
    '/cookie-policy',
    '/privacy',
  ]

  const now = new Date()

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
