import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FigureClickParamsType } from "types";
import shuffle from "utils/shuffle";
import { RootState } from "..";

export type GameAreaType = {
  userId: number;
  figure: string[];
};

type FiguresType = [string[]?];

interface GameState {
  figures: FiguresType;
  progress: string[];
  gameArea: GameAreaType[];
}

const initialState: GameState = {
  figures: [],
  gameArea: Array(36).fill({ userId: 0, figure: [] }),
  progress: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    figures(state, action: PayloadAction<[string[]?]>) {
      state.figures = action.payload;
    },
    gameArea(state) {
      state.gameArea[0] = {
        userId: 1,
        figure: [],
      };
      state.gameArea[7] = {
        userId: 2,
        figure: [],
      };
      state.gameArea[18] = {
        userId: 3,
        figure: [],
      };
      state.gameArea[25] = {
        userId: 4,
        figure: [],
      };
    },
    gameAreaChange(state, action: PayloadAction<FigureClickParamsType>) {
      const { position, figure, userId } = action.payload;
      const progress = new Set(state.progress);
      const figureSrt = figure?.join(".");

      if (figure) {
        if (position === state.gameArea.length) {
          state.gameArea[0].figure = figure;
          state.gameArea[action.payload.position - 1].userId = 0;
          state.gameArea[0].userId = userId;
        } else {
          state.gameArea[position - 1].figure = figure;
          state.gameArea[action.payload.position - 1].userId = 0;
          state.gameArea[action.payload.position].userId = userId;
        }
      }

      progress.add(figureSrt || "");
      state.progress = Array.from(progress);
    },
  },
});

export const { figures, gameArea, gameAreaChange } = gameSlice.actions;
export const selectGame = (state: RootState) => state.game;
export const selectRandomFigures = createSelector(
  selectGame,
  (state): string[] => shuffle([...state.figures]) as string[]
);

export default gameSlice.reducer;
