'use client'

import { useCart } from '@/context/CartContext'

export default function CartDrawer() {

  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
  } = useCart()

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  if (!cartOpen) return null

  return (

    <>

      {/* OVERLAY */}
      <div
        onClick={() => setCartOpen(false)}
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
      />

      {/* DRAWER */}
      <div className="fixed right-0 top-0 z-[9999] flex h-screen w-full max-w-md flex-col bg-[#0B1220] text-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-300">
              SportsLab Academy
            </p>

            <h2 className="mt-1 text-3xl font-black">
              Your Cart
            </h2>

          </div>

          <button
            onClick={() => setCartOpen(false)}
            className="text-4xl font-light leading-none text-white"
          >
            ×
          </button>

        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {cart.length === 0 ? (

            <div className="mt-20 text-center">

              <p className="text-xl font-bold text-zinc-300">
                Your cart is empty.
              </p>

            </div>

          ) : (

            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-xl font-black">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-zinc-300">
                        Qty: {item.quantity}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-2xl font-black">
                        ${item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-sm font-bold text-red-400"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* FOOTER */}
        <div className="border-t border-white/10 p-6">

          <div className="mb-5 flex items-center justify-between">

            <p className="text-lg font-bold text-zinc-300">
              Total
            </p>

            <p className="text-4xl font-black">
              ${total}
            </p>

          </div>

          <button
            className="w-full rounded-full bg-[#2563EB] py-4 text-lg font-black text-white"
          >
            Checkout
          </button>

        </div>

      </div>

    </>

  )
}