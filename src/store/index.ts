import { configureStore, createSlice } from "@reduxjs/toolkit";

import { gameSlice } from "./game";

const store = configureStore({
	reducer: gameSlice.reducer,
});
