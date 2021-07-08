import produce from "immer";

import { GameState, gameSlice, initialGameState } from "./game";

describe("gameSlice", () => {
	it("should ...", () => {
		const newState = gameSlice.reducer(
			produce(initialGameState, (state) => {}),
			gameSlice.actions.setValue()
		);
	});
});
