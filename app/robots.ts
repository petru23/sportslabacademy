import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep private / funnel pages out of search results.
      disallow: ['/admin', '/dashboard', '/checkout', '/login', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
