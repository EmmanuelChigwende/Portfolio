import React from 'react'
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import Home from '../pages/Home'

const App = () => {
  return (
    <div className='bg-[#0F1720] min-h-[100vh] w-[100vw] pl-50 pr-50 '>
      <Header/>
      {/* <div className='underline w-full decoration-2 decoration-[#263340]'></div> */}
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
