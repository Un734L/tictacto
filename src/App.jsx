import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Square({props, onSquareClick}){

    return <button onClick={onSquareClick} className='square'>{props}</button>
  }
  
function App() {
  const [xIsNext,setXIsNext]=useState(true);
  const [sqaures,setSquares]=useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares=sqaures.slice();
    if(xIsNext){

      nextSquares[i]="X";
    }else{
      nextSquares[i]="O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
    <div className='board-row'>
      <Square props={sqaures[0]} onSquareClick={()=>handleClick(0)} />
      <Square props={sqaures[1]} onSquareClick={()=>handleClick(1)}/>
      <Square props={sqaures[2]} onSquareClick={()=>handleClick(2)}/>

    </div>

    <div className='board-row'>
      <Square props={sqaures[3]} onSquareClick={()=>handleClick(3)}/>
      <Square props={sqaures[4]} onSquareClick={()=>handleClick(4)}/>
      <Square props={sqaures[5]} onSquareClick={()=>handleClick(5)}/> 
    </div>

    <div className='board-row'>
      <Square props={sqaures[6]} onSquareClick={()=>handleClick(6)}/>
      <Square props={sqaures[7]} onSquareClick={()=>handleClick(7)}/>
      <Square props={sqaures[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    </>
  )
}
export default App
