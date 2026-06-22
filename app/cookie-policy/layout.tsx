import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How SportsLab Academy uses cookies and similar technologies on our website, and how you can control them.',
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
