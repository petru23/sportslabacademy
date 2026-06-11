'use client'

import AuthForm from './AuthForm'

export default function AuthModal({
  isOpen,
  onClose,
  onAuthSuccess,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 px-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8">
        <button
          onClick={onClose}
          className="mb-6 text-3xl text-black"
        >
          ×
        </button>

        <h2 className="mb-6 text-4xl font-black text-black">
          LOGIN / CREATE ACCOUNT
        </h2>

        <AuthForm
          variant="modal"
          defaultIsLogin={false}
          onAuthSuccess={() => {
            onAuthSuccess?.()
            onClose()
          }}
        />
      </div>
    </div>
  )
}
