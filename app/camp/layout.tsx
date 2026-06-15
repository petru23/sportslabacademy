import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multisport Holiday Camp Brisbane',
  description:
    'School-holiday multisport camps in Brisbane for kids — football, games and fun in a safe, professional environment. Book single days or full weeks.',
  openGraph: {
    title: 'Multisport Holiday Camp Brisbane | SportsLab Academy',
    description:
      'School-holiday multisport camps in Brisbane for kids — football, games and fun in a safe, professional environment. Book single days or full weeks.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
