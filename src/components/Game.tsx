import { Box } from "@chakra-ui/layout";

import { useGameState } from "../game-state";
import { Board } from "./Board";
import { Layout } from "./Layout";

function Game() {
	const { gameState, xIsNext, winner, handleClick } = useGameState();

	return (
		<Layout>
			<Box marginBottom={4}>
				{winner === "X" || winner === "O"
					? `Winner ${winner}`
					: winner === "-"
					? `Draw!`
					: `Next Player: ${xIsNext ? "X" : "O"}`}
			</Box>
			<Board board={gameState.current} activeField={gameState.activeField} onClick={handleClick} />
		</Layout>
	);
}
export default Game;
