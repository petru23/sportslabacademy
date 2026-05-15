'use client'

export default function TapTestPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="mb-8 text-4xl font-black text-black">
        Tap Test
      </h1>

      <button
        type="button"
        onClick={() => alert('BUTTON WORKS')}
        className="rounded-full bg-blue-600 px-8 py-5 text-xl font-black text-white"
      >
        TAP ME
      </button>
    </main>
  )
}