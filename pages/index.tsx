import classNames from "classnames";
import Head from "next/head";

import { useTicTacToe } from "../hooks/ticTacToe";
import { Square } from "../components/Square";

export default function Home() {
  const {
    play,
    createBoard,
    startOver,
    resetGame,
    winningResults,
    turn,
    winner,
  } = useTicTacToe({ playerChoice: "circle" });

  return (
    <>
      <Head>
        <title>Tic Tac Toe Game!</title>
        <meta
          name="description"
          content="A FrontendMentor.com challenge. Made with love by Oscar (@ocarmora)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Turn: {turn}</p>
      <p>{winner && `${winner} won!`}</p>
      <ul>
        {winningResults.map((result, index) => (
          <li key={`${index}-${result}`}>{result}</li>
        ))}
      </ul>

      <button onClick={startOver}>Start over</button>
      <button onClick={resetGame}>Reset game</button>

      <div className="board">
        {createBoard(({ isCircle, isCross, position }) => (
          <Square
            key={`position-${position}`}
            onClick={() => play(position)}
            className={classNames("board__square", {
              "board__square--circle": isCircle(),
              "board__square--cross": isCross(),
            })}
          >
            <h4>{isCircle() && "O"}</h4>
            <h4>{isCross() && "X"}</h4>
          </Square>
        ))}
      </div>
    </>
  );
}
