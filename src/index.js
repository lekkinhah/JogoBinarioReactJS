import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //estado do jogo: entrada, rodando e fim
  const [estado, setEstado] = useState("BEGINING");

  //Palpites
  const [palpite, setPalpite] = useState(150);
  const [numeroPapite, setNumeroPalpite] = useState(1);

  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(300);

  const StartGame = () => {
    setEstado("PLAYING");
    setNumeroPalpite(1);
    setMaximo(300);
    setMinimo(0);
    setPalpite(150);
  };

  if (estado === "BEGINING") {
    return <button onClick={StartGame}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumeroPalpite(numeroPapite + 1);
    setMaximo(palpite);
    const proximoPalpite = parseInt((palpite - minimo) / 2) + minimo;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumeroPalpite(numeroPapite + 1);
    setMinimo(minimo);
    setMinimo(palpite);
    const proximoPalpite = parseInt((maximo - palpite) / 2 + palpite);
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("END");
  };

  if (estado === "END") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numeroPapite} chutes!!
        </p>
        <button onClick={StartGame}>Começar novamente</button>
      </div>
    );
  }
  //range: 0 - 300
  //Palpites
  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>
        Min: {minimo} / Máx: {maximo}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Letícia" />, rootElement);
