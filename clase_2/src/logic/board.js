import { winnerCombination } from "../constants"

export const checkWinner = (boardCheck) =>{
    for (const combination of winnerCombination){
      const [a,b,c] = combination
      if(
        boardCheck[a] && 
        boardCheck[a] == boardCheck[b] &&
        boardCheck[a] == boardCheck[c] 
      ){
        return boardCheck[a]
      }
    }
    return null 
  }