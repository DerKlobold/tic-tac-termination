import { useState } from "react";

export type Value = 'X' | 'O' | null | '-';

export type FieldState = {
  state: Value[];
  space: number;
}

export type BoardState = {
  board: FieldState[];
  state: FieldState;
}

const createFieldState = () => {
  let fieldState = {
    state: Array<Value>(9).fill(null),
    space: 9,
  }

  return (
    fieldState
  );
}

const createBoardState = () => {
  let boardState = {
    board: Array<FieldState>(9),
    state: createFieldState(),
  }

  for(let i = 0; i < boardState.board.length; i++){
    boardState.board[i] = createFieldState();
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
    if (fieldState.state[a] && fieldState.state[a] === fieldState.state[b] && fieldState.state[a] === fieldState.state[c]) {
      return fieldState.state[a];
    }
  }
  //if all spaces are occupied. return '-' to signal a draw
  if (fieldState.space == 0){
    return '-';
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

    if (current.board[field].state[square] || calculateWinner(current.state) || calculateWinner(current.board[field])) {
      return; //cancel if square is not null OR if Game has finished OR field already won/tie
    }

    if (activeField !== -1 && field !== activeField){ 
        return; //cancel if the player tries to click field NOT active unless ALL are active
    }
    
    //fill clicked square with current player symbol
    current.board[field].state[square] = ((gameState.step % 2) === 0 ? 'X' : 'O');

    //count down free space variable of clicked field
    current.board[field].space--;

    
    //check if last move led to win on the current field
    current.state.state[field] = calculateWinner(current.board[field]);
    
    if (current.state.state[field]){
      if (calculateWinner(current.state)) {
        //Game is over
        activeField = 9;
      } 
    }
    
    if (current.state.state[square]){
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