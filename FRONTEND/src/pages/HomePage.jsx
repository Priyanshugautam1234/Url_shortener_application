import React from 'react'
import UrlForm from '../components/UrlForm'
import { Link } from '@tanstack/react-router'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <Link 
          to="/auth" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm/>
      </div>
    </div>
  )
}

export default HomePage