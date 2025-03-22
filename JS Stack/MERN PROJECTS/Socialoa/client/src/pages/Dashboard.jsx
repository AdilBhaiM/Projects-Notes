import React from 'react'
import { Logout } from '../redux/actions/AuthActions.js'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(Logout())
  }
  return (
    <div>
      <p onClick={logout}>Logout</p>
    </div>
  )
}

export default Dashboard