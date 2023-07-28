import { useState } from "react";
import { Player, WinningResults } from "./useTicTacToe.types";

export const useTicTacToe = () => {
  const [player, setPlayer] = useState(Player.Circle);
  const [winner, setWinner] = useState<Player>();
  const [winningResults, setWinningResults] = useState<Array<WinningResults>>(
    []
  );
  const [gameRecords, setGameRecords] = useState<Array<Player>>([...Array(9)]);

  const startOver = () => {
    setGameRecords([...Array(9)]);
    setWinner(undefined);
  };

  const isValidPlay = (position: number) => {
    const isEmptySquare = gameRecords[position] === undefined;
    return isEmptySquare;
  };

  const isWinner = () => {
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

    let winner = false;

    winningCombinations.map((combination) => {
      if (!winner) {
        const positionOne = gameRecords[combination[0]];
        const positionTwo = gameRecords[combination[1]];
        const positionThree = gameRecords[combination[2]];

        winner =
          positionOne &&
          positionOne == positionTwo &&
          positionOne == positionThree;
      }
    });

    return winner;
  };

  const recordPlay = (position: number) => {
    let currentGame = gameRecords;
    currentGame[position] = player;

    setGameRecords(gameRecords);
  };

  const play = (position: number) => {
    if (!isValidPlay(position)) return;

    recordPlay(position);

    if (isWinner()) {
      const actualGameResults = winningResults;
      actualGameResults.push(player);
      setWinningResults(actualGameResults);
      setWinner(player);

      return startOver();
    }

    const nextPlayer = player === Player.Circle ? Player.Cross : Player.Circle;

    setPlayer(nextPlayer);

    if (gameRecords.every((position) => position !== undefined)) {
      const actualGameResults = winningResults;
      actualGameResults.push("draw");
      setWinningResults(actualGameResults);

      return startOver();
    }
  };

  return {
    play,
    player,
    winner,
    gameRecords,
    winningResults,
  };
};
