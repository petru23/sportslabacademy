import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elite Soccer Clinic Brisbane',
  description:
    'High-intensity elite soccer clinic in Brisbane for ambitious young players. Choose single days, a 3-day block or the full program.',
  openGraph: {
    title: 'Elite Soccer Clinic Brisbane | SportsLab Academy',
    description:
      'High-intensity elite soccer clinic in Brisbane for ambitious young players. Choose single days, a 3-day block or the full program.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
