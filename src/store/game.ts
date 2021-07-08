import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sample, values } from "lodash";

/**
 * * 0 = empty
 * * 1 = player1
 * * 2 = player2
 * * 3 = tied
 */
export type Value = 0 | 1 | 2 | 3;

export type FieldState = Value[];

export type GameState = {
	fields: FieldState[];
	boardState: FieldState;
	step: number;

	/**
	 * Index of field which is active.
	 * This is 'null' every time you can choose any field OR if the game is over.
	 */
	activeFieldIndex: number | null;
	winner: Value;
	firstPlayer: 1 | 2;
};

export const initialGameState: GameState = {
	fields: Array.from(Array(9), () => new Array(9).fill(0)),
	boardState: new Array(9).fill(0),
	step: 0,
	activeFieldIndex: null,
	winner: 0,
	firstPlayer: sample([1, 2])!, //can't be undefined
};

export const gameSlice = createSlice({
	name: "game",
	initialState: initialGameState,
	reducers: {
		setValue: (state, action: PayloadAction<{ fieldIndex: number; valueIndex: number }>) => {
			const { fieldIndex, valueIndex } = action.payload;
			state.fields[fieldIndex][valueIndex] = state.step % 2 === 0 ? 1 : 2;
			state.step++;

			const currentFieldWinner = calculateWinner(state.fields[fieldIndex]);
			state.boardState[fieldIndex] = currentFieldWinner;
			if (currentFieldWinner !== 0) {
				state.winner = calculateWinner(state.boardState);
				state.activeFieldIndex = state.winner === 0 ? valueIndex : null;
			}

			//TODO: explain this
			if (state.boardState[valueIndex]) {
				state.activeFieldIndex = null;
			} else {
				state.activeFieldIndex = valueIndex;
			}
		},
	},
});

function calculateWinner(fieldState: FieldState): Value {
	for (const [a, b, c] of [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]) {
		if (
			[1, 2].includes(fieldState[a]) &&
			fieldState[a] === fieldState[b] &&
			fieldState[a] === fieldState[c]
		) {
			return fieldState[a];
		}
	}

	// Return tied if no empty fields are left
	if (!fieldState.some((value) => value === 0)) {
		return 3;
	}

	return 0;
}
