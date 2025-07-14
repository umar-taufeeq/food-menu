import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    // <div className='h-screen w-screen font-thin bg-gray-800 text-white py-10 px-[10%] overflow-auto  '>
      
    //   <Navbar/>
    //   <MainRoutes/>
    // </div>
    <div className="min-h-screen w-full font-sans bg-gray-50 text-gray-800 px-4 md:px-20 py-8 overflow-x-hidden">
  <Navbar />
  <MainRoutes />
</div>
  )
}

export default App