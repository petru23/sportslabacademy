import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junior Soccer Development Program',
  description:
    'Structured junior football development program in Brisbane building fundamental skills, coordination and confidence for young players.',
  openGraph: {
    title: 'Junior Soccer Development Program | SportsLab Academy',
    description:
      'Structured junior football development program in Brisbane building fundamental skills, coordination and confidence for young players.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
