import { ReactNode } from "react";

export enum Mark {
  Cross = "cross",
  Circle = "circle",
}

export type WinningResults = Mark | "draw";

export type CreateBoardCallBack = (square: {
  mark?: string;
  index: number;
}) => ReactNode;

export type onEndProps = { winner: string };

// export type useTicTacToeProps = {
//   playerChoice: Lowercase<keyof typeof Mark>;
//   vsCPU?: boolean;
//   onEnd?: (winner: string | null) => unknown;
// };

export type useTicTacToeProps = {
  players: number;
  markChoice: Mark;
  onGameOver?: (result: {
    winner?: Mark;
    winningSquaresIndex?: Array<number>;
  }) => unknown;
  onResetGame: () => unknown;
};
