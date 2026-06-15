import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soccer Tap Test',
  description:
    'Try the SportsLab Academy tap test — a quick way to measure and challenge your footwork and reaction speed.',
  openGraph: {
    title: 'Soccer Tap Test | SportsLab Academy',
    description:
      'Try the SportsLab Academy tap test — a quick way to measure and challenge your footwork and reaction speed.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
