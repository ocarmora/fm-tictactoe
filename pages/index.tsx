import Head from "next/head";
import { TicTacToe } from "../containers/TicTacToe/";
import { Mark } from "../hooks/useTicTacToe";

export default function Home() {
  const handleOnEnd = (result: string | null) => {
    console.log("winner", result);
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

      <TicTacToe onEnd={handleOnEnd} playerChoice={Mark.Circle} />
    </>
  );
}
