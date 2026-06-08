import './globals.css'
import { CartProvider } from '@/context/CartContext'
import CartDrawer from '../components/CartDrawer'

export const metadata = {
  title: 'SportsLab Academy',
  description: 'Elite youth football development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}