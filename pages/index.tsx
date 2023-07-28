import Head from "next/head";
import { Player, useTicTacToe } from "../hooks/ticTacToe";
import { Square } from "../components/Square";
import { useState } from "react";
import classNames from "classnames";

export default function Home() {
  const { play, player } = useTicTacToe();
  const [circles, setCircles] = useState<Array<number>>([]);
  const [crosses, setCrosses] = useState<Array<number>>([]);

  const handleOnClick = (position: number) => {
    if (!circles.includes(position) && !crosses.includes(position)) {
      if (player === Player.Circle) {
        setCircles([...circles, position]);
      } else {
        setCrosses([...crosses, position]);
      }
    }

    play(position);
  };

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

      <div className="board">
        {Array.from({ length: 9 }).map((_, index) => (
          <Square
            className={classNames("board__square", {
              "board__square--circle": circles.includes(index),
              "board__square--cross": crosses.includes(index),
            })}
            key={`square-index-${index}`}
            onClick={() => handleOnClick(index)}
          >
            {index}
          </Square>
        ))}
      </div>
    </>
  );
}
