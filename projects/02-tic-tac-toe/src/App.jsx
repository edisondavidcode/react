import { Square } from "./components/square";
import { useState } from "react";
import { TURNS } from "./constants.js";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  };

  const updateBoard = (index) => {
    const newBoard = [...board];
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;

    if (newBoard[index] !== null || winner) return;

    newBoard[index] = turn;

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    setBoard(newBoard);
    setTurn(newTurn);
  };

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null);
  };

  return (
    <main className="board">
      <h1>El Juego del Gato</h1>
      <button type="button" onClick={resetGame}>
        Resetear Juego
      </button>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
