import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type GameType = "open" | "close" | null;
export type UsersType = { id: number; name: string };

interface LoginState {
  startGame: GameType;
  username: string;
  roomСode?: string;
  users?: UsersType[];
}

const initialState: LoginState = {
  startGame: null,
  username: "",
  roomСode: "",
  users: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    startGame(state, action: PayloadAction<GameType>) {
      state.startGame = action.payload;
    },
    username(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    roomСode(state, action: PayloadAction<string>) {
      state.roomСode = action.payload;
    },
    users(state, action: PayloadAction<UsersType[]>) {
      state.users = action.payload;
    },
  },
});

export const { startGame, username, roomСode, users } = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
