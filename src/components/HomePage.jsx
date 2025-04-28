import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage