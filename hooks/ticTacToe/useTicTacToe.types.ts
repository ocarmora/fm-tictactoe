export enum GameRules {
  MinPlaysToCheckWinner = 5,
}

export enum Player {
  Cross = "cross",
  Circle = "circle",
}

export type WinningResults = Player | "draw";
