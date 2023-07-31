import classNames from "classnames";
import { Square } from "../../components/Square";
import { Mark, useTicTacToe } from "../../hooks/useTicTacToe";
import { FC, useState } from "react";
import { TicTacToeProps } from "./TicTacToe.types";
import { Turn } from "../../components/Turn";
import { ResetButton } from "../../components/ResetButton";
import { Result } from "../../components/Result";

export const TicTacToe: FC<TicTacToeProps> = ({ playerChoice, onEnd }) => {
  const [winningSquaresIndex, setWinningSquaresIndex] = useState<Array<number>>(
    []
  );

  const handleOnGameOver = ({
    winner,
    winningSquaresIndex,
  }: {
    winner?: string;
    winningSquaresIndex?: Array<number>;
  }) => {
    if (winningSquaresIndex) setWinningSquaresIndex(winningSquaresIndex);
  };

  const { play, createGameBoard, resetGame, turn } = useTicTacToe({
    players: 1,
    markChoice: Mark.Cross,
    onGameOver: handleOnGameOver,
    onResetGame: () => setWinningSquaresIndex([]),
  });

  const handleOnClick = (index: number) => {
    play(index);
  };

  return (
    <div className="TicTacToe">
      <div className="TicTacToe__header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Tic Tac Toe" />
        <Turn mark={turn} />
        <ResetButton onClick={resetGame} />
      </div>

      <div className="TicTacToe__board">
        {createGameBoard(({ mark, index }) => (
          <Square
            key={`square-index-${index}`}
            onClick={() => handleOnClick(index)}
            className={classNames("TicTacToe__square", {
              "TicTacToe__square--circle": mark === "circle",
              "TicTacToe__square--cross": mark === "cross",
              "TicTacToe__square--cross-placeholder":
                turn === "cross" && !mark && winningSquaresIndex.length === 0,
              "TicTacToe__square--circle-placeholder":
                turn === "circle" && !mark && winningSquaresIndex.length === 0,
              "TicTacToe__square--winner": winningSquaresIndex.includes(index),
            })}
          />
        ))}
      </div>

      <div className="TicTacToe__footer">
        <Result
          title="X (you)"
          value="14"
          className="TicTacToe__result TicTacToe__result--blue"
        />
        <Result
          title="Ties"
          value="32"
          className="TicTacToe__result TicTacToe__result--silver"
        />
        <Result
          title="O (CPU)"
          value="11"
          className="TicTacToe__result TicTacToe__result--yellow"
        />
      </div>
    </div>
  );
};
