import { Grid, GridItem } from "@chakra-ui/layout";
import * as React from "react";

import { BoardState } from "../game-state";
import { Field } from "./Field";

type BoardProps = {
	board: BoardState;
	activeField: number;
	onClick: (field: number, square: number) => void;
};

export const Board: React.FC<BoardProps> = ({ board, activeField, onClick }) => (
	<Grid templateColumns="repeat(3, 1fr)">
		{board.board.map((field, index) => (
			<GridItem padding={2}>
				<Field
					field={field}
					active={
						(index === activeField || activeField === -1) &&
						board.state.state[index] === null &&
						activeField !== 9
					} //TODO move to state management
					onClick={(square: number) => onClick(index, square)}
				/>
			</GridItem>
		))}
	</Grid>
);
