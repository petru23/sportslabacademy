import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multisport Camp Brisbane',
  description:
    'Multisport holiday camp in Brisbane — football and more across a fun, active week. Single-day or full-week options available.',
  openGraph: {
    title: 'Multisport Camp Brisbane | SportsLab Academy',
    description:
      'Multisport holiday camp in Brisbane — football and more across a fun, active week. Single-day or full-week options available.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
