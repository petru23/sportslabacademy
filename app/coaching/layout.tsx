import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private 1-on-1 Soccer Coaching Brisbane',
  description:
    'Personalised one-on-one football coaching in Brisbane to fast-track your child\'s technique, confidence and game intelligence.',
  openGraph: {
    title: 'Private 1-on-1 Soccer Coaching Brisbane | SportsLab Academy',
    description:
      'Personalised one-on-one football coaching in Brisbane to fast-track your child\'s technique, confidence and game intelligence.',
  },
}

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
