import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Sections from './components/Sections/Sections'
import Footer from './components/Footer/footer'
function App() {
  

  return (
    <>
      <div
        style={{
          backgroundColor:"#e5e8dd"
        }}
      >
       <div>
          <Navbar/>
       </div>
       <div>
          <Sections/>
       </div>
       <div
         style={{
          backgroundColor:"#c85c48"
      }}
       >
        <Footer/>
       </div>
      </div>
    </>
  )
}

export default App
