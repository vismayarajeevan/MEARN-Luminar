import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import employee file
import Employee from './Employee'

function App() {
  // js code 
  const empName ="Max"



  return (
    // jsx code
    <>
     <h1  className='text-center text-success'>Demo project</h1>
     
     <h3>Inside App Content: <span className='text-warning fs-4 fw-bolder'>{empName}</span></h3>

     {/* to get/display employee */}
     <Employee dataFromParent={empName} desig="developer" empStatus/>
    </>
  )
}

export default App
