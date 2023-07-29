import { useState } from "react";
import {
  CreateBoardCallBack,
  WinningResults,
  useTicTacToeProps,
  Mark,
} from "./useTicTacToe.types";

export const useTicTacToe = ({
  vsCPU = true,
  playerChoice,
}: useTicTacToeProps) => {
  const emptyBoard = () => [...Array(9)];

  const [turn, setTurn] = useState(Mark.Cross);
  const [winner, setWinner] = useState<Mark>();
  const [winningResults, setWinningResults] = useState<Array<WinningResults>>(
    []
  );
  const [gameRecords, setGameRecords] = useState<Array<Mark>>(emptyBoard());

  const startOver = () => {
    setGameRecords(emptyBoard());
  };

  const isValidPlay = (position: number) => {
    const isEmptySquare = () => gameRecords[position] === undefined;
    return isEmptySquare();
  };

  const isWinner = () => {
    let winner = false;
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (const combination of winningCombinations) {
      const positionOne = gameRecords[combination[0]];
      const positionTwo = gameRecords[combination[1]];
      const positionThree = gameRecords[combination[2]];

      winner =
        positionOne &&
        positionOne == positionTwo &&
        positionOne == positionThree;

      if (winner) break;
    }

    return winner;
  };

  const recordPlay = (position: number) => {
    let currentGame = gameRecords;
    currentGame[position] = turn;

    setGameRecords([...gameRecords, turn]);
  };

  const play = (position: number) => {
    if (!isValidPlay(position)) return;

    recordPlay(position);

    if (isWinner()) {
      setWinningResults([...winningResults, turn]);
      setWinner(turn);
      startOver();
    }

    setTurn(turn === Mark.Circle ? Mark.Cross : Mark.Circle);

    if (gameRecords.every((position) => position !== undefined)) {
      setWinningResults([...winningResults, "draw"]);
      startOver();
    }
  };

  const createBoard = (cb: CreateBoardCallBack) =>
    emptyBoard().map((_, index) =>
      cb({
        isCircle: () => gameRecords[index] === Mark.Circle,
        isCross: () => gameRecords[index] === Mark.Cross,
        position: index,
      })
    );

  const resetGame = () => {
    setTurn(Mark.Cross);
    setWinner(undefined);
    setWinningResults([]);
    setGameRecords(emptyBoard());
  };

  return {
    createBoard,
    play,
    startOver,
    resetGame,
    turn,
    winner,
    gameRecords,
    winningResults,
  };
};
