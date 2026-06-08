import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
  try {
    const { cart, form } = await req.json()

    if (!cart || cart.length === 0) {
      return Response.json(
        { error: 'Cart is empty' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',

      payment_method_types: ['card'],

      line_items: cart.map((item) => ({
        price_data: {
          currency: 'aud',

          product_data: {
            name: item.name,
          },

          unit_amount:
            item.id === 'test-payment'
              ? 50
              : Math.round(item.price * 100),
        },

        quantity: item.quantity,
      })),

      customer_email: form.email,

      metadata: {
        parentName: form.parentName || '',
        parentLastName: form.parentLastName || '',
        childName: form.childName || '',
        childDob: form.childDob || '',
        campWeek: form.campWeek || '',
        clinicWeek: form.clinicWeek || '',
        phone: form.phone || '',
        email: form.email || '',
        notes: form.notes || '',
      },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    })

    return Response.json({
      url: session.url,
    })

  } catch (error) {
    console.error(error)

    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }
}