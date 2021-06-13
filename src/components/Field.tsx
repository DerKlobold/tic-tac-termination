import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import { FieldState } from "../game-state";
import { Highlight } from "./Highlight";
import { Square } from "./Square";

export type FieldProps = {
	field: FieldState;
	active: boolean;
	onClick: (square: number) => void;
};

export const Field: React.FC<FieldProps> = ({ field, active, onClick }) => (
	<Highlight isActive={active}>
		<Grid templateColumns="repeat(3, 1fr)" gap={1}>
			{field.state.map((value, index) => (
				<GridItem>
					<Square value={value} onClick={() => onClick(index)} />
				</GridItem>
			))}
		</Grid>
	</Highlight>
);
