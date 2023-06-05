import React from "react";
import { Square } from "./Square";

export default function WinnerModal({winer,resetGame}) {
  if (winer === null) return null;
  const winnerText = winer === false ? "Empate" : "Gano"
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winer && <Square>{winer}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
