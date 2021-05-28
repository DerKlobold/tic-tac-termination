import { useState } from "react";

export type Value = 'X' | 'O' | null | '-';

export type FieldState = Value[];
export type BoardState = {
  board: FieldState[];
  state: FieldState;
}

const createBoardState = () => {
  let boardState = {
    board: Array<FieldState>(9),
    state: Array<Value>(9).fill(null),
  }

  for(let i = 0; i < boardState.board.length; i++){
    boardState.board[i] = Array<Value>(9).fill(null);
  }

  return boardState;
}

function calculateWinner(fieldState: FieldState) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (fieldState[a] && fieldState[a] === fieldState[b] && fieldState[a] === fieldState[c]) {
      return fieldState[a];
    }
  }
  return null;
}

export type GameState = {
  current: BoardState,
  step: number,
  activeField: number
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    current: createBoardState(),
    step: 0,
    activeField: -1
  });

  const current = gameState.current;
  const xIsNext = (gameState.step % 2) === 0;
  let activeField = gameState.activeField;
  const winner = calculateWinner(current.state);

  function handleClick(field: number, square: number) {

    if (current.board[field][square] || calculateWinner(current.state) || calculateWinner(current.board[field])) {
      return; //cancel if square is not null OR if Game has finished OR field already won/tie
    }

    if (activeField !== -1 && field !== activeField){ 
        return; //cancel if the player tries to click field NOT active unless ALL are active
    }
    
    //fill clicked square with current player symbol
    current.board[field][square] = ((gameState.step % 2) === 0 ? 'X' : 'O');
    
    //check if last move led to win on the current field
    current.state[field] = calculateWinner(current.board[field]);
    
    if (current.state[field]){
      if (calculateWinner(current.state)) {
        activeField = 9;
      } 
    }
    
    if (current.state[square]){
      activeField = -1; 
    } else {
      activeField = square;
    }
    setGameState({
      current: current,
      step: gameState.step + 1,
      activeField: activeField
    });
  }

  
  return {
    gameState,
    xIsNext,
    winner,
    activeField,
    handleClick,
  };
}