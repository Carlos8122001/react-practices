 export const TURNS = {
    X:"X",
    O:"O"
  }
  
  export const winnerCombination = [
  
    // vertical
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //orizontal
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //esquinas
    [0,4,8],
    [2,4,6],
    [6,4,2],
    [8,4,0]
  ]