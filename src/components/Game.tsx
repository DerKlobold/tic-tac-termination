import * as React from 'react';
import { useGameState } from '../game-state';
import { Board } from './Board';
import { Row, Column, Title } from './Layout';
import { Line } from './Line';

function Game() {
  const {
    gameState,
    xIsNext,
    winner,
    handleClick,
  } = useGameState();

  return (
    <Row gap={1}>
      <Column gap = {1}>

      </Column>
      <Column gap={1}>
        <Title>
          Tic-Tac-Termination
        </Title>
        <div>{
          winner == 'X' || winner == 'O' ? `Winner ${winner}`
            : winner == '-' ? `Draw!`
              : `Next Player: ${xIsNext ? 'X' : 'O'}`
        }</div>
        <Board 
          board={gameState.current}
          activeField = {gameState.activeField}
          onClick={handleClick} />
      </Column>
      <Column gap = {3}>
        <Line/>
      </Column>
    </Row>
  );
}
export default Game;