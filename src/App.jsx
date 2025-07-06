import React from 'react'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import Highlights from './componets/Highlights'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default App
