import { Mark, onEndProps } from "../../hooks/useTicTacToe";

export type TicTacToeProps = {
  onEnd?: (result: string | null) => unknown;
  playerChoice: Mark;
};
