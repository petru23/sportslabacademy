import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Sponsor',
  description:
    'Partner with SportsLab Academy and support youth sport in Brisbane. Brand exposure across camps, clinics, events and digital channels with flexible sponsorship tiers.',
  openGraph: {
    title: 'Become a Sponsor | SportsLab Academy',
    description:
      'Partner with SportsLab Academy and support youth sport in Brisbane. Flexible sponsorship tiers with local and digital brand exposure.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
