import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet the Coaches',
  description:
    'Meet the SportsLab Academy coaching team — experienced, accredited coaches developing young footballers in Brisbane.',
  openGraph: {
    title: 'Meet the Coaches | SportsLab Academy',
    description:
      'Meet the SportsLab Academy coaching team — experienced, accredited coaches developing young footballers in Brisbane.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
