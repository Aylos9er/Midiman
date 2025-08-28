'use client'

import { useState } from 'react'

export default function GitPushPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleGitPush = async () => {
    setIsLoading(true)
    setStatus('idle')
    setMessage('')

    try {
      const response = await fetch('/api/git-push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Git push completed successfully!')
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to perform git push')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error: Unable to perform git push')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Git Push</h1>
      
      <div className="max-w-2xl mx-auto bg-chart-bg rounded-lg p-6 border border-white/10">
        <p className="text-gray-300 mb-6">
          Push your changes to the remote repository. Make sure you have the necessary permissions.
        </p>
        
        <button
          onClick={handleGitPush}
          disabled={isLoading}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
            isLoading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
          }`}
        >
          {isLoading ? 'Pushing...' : 'Push to Remote'}
        </button>

        {message && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status === 'success'
                ? 'bg-green-600/20 border border-green-600/30 text-green-300'
                : status === 'error'
                ? 'bg-red-600/20 border border-red-600/30 text-red-300'
                : 'bg-gray-600/20 border border-gray-600/30 text-gray-300'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  )
}