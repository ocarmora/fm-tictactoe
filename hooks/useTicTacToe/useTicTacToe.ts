import { useState } from "react";
import {
  CreateBoardCallBack,
  useTicTacToeProps,
  Mark,
} from "./useTicTacToe.types";

export const useTicTacToe = ({
  players,
  markChoice,
  onGameOver,
  onResetGame,
}: useTicTacToeProps) => {
  const emptyBoard = () => [...Array(9)];

  const [turn, setTurn] = useState(Mark.Cross);
  const [plays, setPlays] = useState<Array<Mark>>(emptyBoard());
  const [vsComputer, setVsComputer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const isValidPlay = (position: number) => {
    const isEmptySquare = () => plays[position] === undefined;
    const isGameNotOver = () => !gameOver;

    return isEmptySquare() && isGameNotOver();
  };

  const createGameBoard = (cb: CreateBoardCallBack) =>
    emptyBoard().map((_, index) => {
      let mark;

      if (plays[index] === Mark.Circle) mark = Mark.Circle;
      if (plays[index] === Mark.Cross) mark = Mark.Cross;

      return cb({
        mark,
        index,
      });
    });

  const resetGame = () => {
    // setTurn(Mark.Cross);
    setPlays(emptyBoard());
    setGameOver(false);

    if (onResetGame) onResetGame();
  };

  const checkWinner = (plays: any) => {
    let winner = false;
    let winningCombination: Array<number> = [];
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
      const positionOne = plays[combination[0]];
      const positionTwo = plays[combination[1]];
      const positionThree = plays[combination[2]];

      const isWinner =
        positionOne &&
        positionOne == positionTwo &&
        positionOne == positionThree;

      if (isWinner) {
        winner = true;
        winningCombination = combination;
        break;
      }
    }

    return { winner, winningCombination };
  };

  const play = (position: number) => {
    if (!isValidPlay(position)) return;

    const gameBoardSnapshot = [
      ...plays.slice(0, position),
      turn,
      ...plays.slice(position + 1),
    ];

    const { winner, winningCombination } = checkWinner(gameBoardSnapshot);

    if (winner) {
      if (onGameOver)
        onGameOver({ winner: turn, winningSquaresIndex: winningCombination });
      setGameOver(true);
    } else if (gameBoardSnapshot.every((position) => position !== undefined)) {
      if (onGameOver)
        onGameOver({ winner: undefined, winningSquaresIndex: undefined });
      setGameOver(true);
    }

    setPlays(gameBoardSnapshot);

    setTurn(turn === Mark.Circle ? Mark.Cross : Mark.Circle);
  };

  return {
    createGameBoard,
    play,
    resetGame,
    turn,
    plays,
  };
};

// Refactor this!
// if (players === 1) {
//   let emptyPositions: Array<number> = [];

//   newPlays.map((record, index) => {
//     if (record === undefined) emptyPositions.push(index);
//   });

//   const computerChoice =
//     emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

//   newPlays = [
//     ...newPlays.slice(0, computerChoice),
//     turn === Mark.Circle ? Mark.Cross : Mark.Circle,
//     ...newPlays.slice(computerChoice + 1),
//   ];
// }
