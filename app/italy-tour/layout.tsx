import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Italy Tour 2026 — Train with Como 1907',
  description:
    'Elite football tour to Como, Italy (6–15 Dec 2026). Train with Como 1907, play academy friendlies, attend a Serie A match. Ages U13–U15.',
  openGraph: {
    title: 'Italy Tour 2026 — Train with Como 1907 | SportsLab Academy',
    description:
      'Elite football tour to Como, Italy (6–15 Dec 2026). Train with Como 1907, play academy friendlies, attend a Serie A match. Ages U13–U15.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
