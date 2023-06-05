import { useState, useTransition } from 'react'
import { Square } from './components/Square'
import confetti from 'canvas-confetti'
import "./styles/index.css"
import {TURNS} from './constants'
import { checkWinner } from './logic/board'
import WinnerModal from './components/WinnerModal'

function App() {

  const [board,setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn,setTurn] = useState(()=>{
    const turnsFromStorage = window.localStorage.getItem('turns')
    return turnsFromStorage ?? TURNS.X
  })
  const [winer,setWiner] = useState(null)


  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turns')
  }

  const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square !== null)
    }

  const updateBoard = (index) =>{
    // no actualizar
    if(board[index]  || winer) return
    //actualizar
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cmabiar de turno
    const newTurn = turn === TURNS.X? TURNS.O: TURNS.X
    setTurn(newTurn)
    //guardar aqui

    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turns',newTurn)
    // revisar si hay ganador

    const newWinner = checkWinner(newBoard)
    
    if(newWinner){
      confetti()
      setWiner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWiner(false)
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset Game</button>
        <section className='game'>
        {
          board.map((square,index)=>{
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
              </Square>
            )
          })
        }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal winer={winer} resetGame={resetGame}/>
      </main>
    </>
  )
}

export default App
