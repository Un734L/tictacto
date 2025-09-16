import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div className='board-row'>

      <button className='square'>1</button>
      <button className='square'>2</button>
      <button className='square'>3</button>
    </div>

    // 2nd row
    <div>
      <button className='square'>4</button>
      <button className='square'>5</button>
      <button className='square'>6</button>
    </div>
    
    // 3rd rom
    <div>
    <button className='square'>X</button>
    <button className='square'>X</button>
    <button className='square'>X</button>
    </div>
    </>
  )
}
export default App
