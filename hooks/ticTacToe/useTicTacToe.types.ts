import { ReactNode } from "react";

export enum Mark {
  Cross = "cross",
  Circle = "circle",
}

export type WinningResults = Mark | "draw";

export type CreateBoardCallBack = (square: {
  isCircle: () => boolean;
  isCross: () => boolean;
  position: number;
}) => ReactNode;

export type useTicTacToeProps = {
  playerChoice: Lowercase<keyof typeof Mark>;
  vsCPU?: boolean;
};
