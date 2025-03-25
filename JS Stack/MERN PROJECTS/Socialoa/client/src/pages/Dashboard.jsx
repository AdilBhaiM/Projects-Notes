import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen bg-gray-900'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default Dashboard