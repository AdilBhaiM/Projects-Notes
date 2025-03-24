import React from 'react'
import { Logout } from '../redux/actions/AuthActions.js'
import { useDispatch } from 'react-redux'
import Sidebar from '../components/Sidebar.jsx'

const Dashboard = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(Logout())
  }
  return (
    <div className='flex min-h-screen bg-gray-900'>
      <Sidebar />
      <p onClick={logout}>Logout</p>
    </div>
  )
}

export default Dashboard