import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar />
      <Card />
    </div>
  )
}

export default App