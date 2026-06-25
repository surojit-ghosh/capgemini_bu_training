import { useState, useEffect, useCallback } from 'react'

let toastListener = null

export function showToast(message) {
  if (toastListener) toastListener(message)
}

export default function Toast() {
  const [message, setMessage] = useState(null)

  const show = useCallback((msg) => {
    setMessage(msg)
  }, [])

  useEffect(() => {
    toastListener = show
    return () => { toastListener = null }
  }, [show])

  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => setMessage(null), 2500)
    return () => clearTimeout(timer)
  }, [message])

  if (!message) return null

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition-all">
        {message}
      </div>
    </div>
  )
}
