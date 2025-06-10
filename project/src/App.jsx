import React from 'react'
import Navbar from './component/Navbar'
import Herosection from './mainpages/Herosection'
import Services from './mainpages/Services'
import Experience from './mainpages/Experience'
import Hire from './mainpages/Hire'
import Carousel from './Carousel'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
            <Experience/>

      <Services/>
      <Carousel/>
            <Hire/>

      <Footer/>




    </div>
  )
}

export default App