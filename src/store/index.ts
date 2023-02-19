import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "./game/loginSlice";
import gameReducer from "./game/gameSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    game: gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
