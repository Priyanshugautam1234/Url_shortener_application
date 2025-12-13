import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice'
import { useNavigate } from '@tanstack/react-router'

const DashboardPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate({ to: '/' })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
      <div className="bg-white -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
        <UserUrl />
      </div>
    </div>
  )
}

export default DashboardPage