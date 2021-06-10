import * as React from "react";

import { BoardState, Value } from "../game-state";
import { Field, FieldProps } from "./Field";
import { Column, Row } from "./Layout";

type BoardProps = {
	board: BoardState;
	activeField: number;
	onClick: (field: number, square: number) => void;
};

export function Board({ board, activeField, onClick }: BoardProps) {
	const createProps = (field: number): FieldProps => {
		const state: Value = board.state.state[field];
		const isActive: boolean =
			(field === activeField || activeField === -1) && state === null && activeField !== 9;

		return {
			field: board.board[field],
			state: state,
			active: isActive,
			onClick: (square: number) => onClick(field, square),
		};
	};

	const gap: number = 0.4;

	return (
		<Column gap={gap}>
			<Row gap={gap}>
				<Field {...createProps(0)} />
				<Field {...createProps(1)} />
				<Field {...createProps(2)} />
			</Row>
			<Row gap={gap}>
				<Field {...createProps(3)} />
				<Field {...createProps(4)} />
				<Field {...createProps(5)} />
			</Row>
			<Row gap={gap}>
				<Field {...createProps(6)} />
				<Field {...createProps(7)} />
				<Field {...createProps(8)} />
			</Row>
		</Column>
	);
}
