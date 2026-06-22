import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How SportsLab Academy collects, uses, stores, and protects your personal information, and your privacy rights.',
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
