import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path:'/signup',
    element:<SignUp />
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/',
    element:<HomePage/>
  },
])

function App() {

  return (
    <>
     {/* <h1 className='text-xl'>This is a Chat Application</h1> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
