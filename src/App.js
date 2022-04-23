import React, { useState } from "react";
import "./App.css";

//Vorüberlegungen:
//Wir brauchen State, damit die UI (aktueller Stand der Counter) upgedatet wird
//die counter visuell erstellen mit allen nötigen Bestandteilen
//Wir brauchen an den Buttons EventListener, die EventHandler aufrufen

//Probleme mit "einfacher" Lösung:
//- eingeschränkte Wiederverwendbarkeit
//- schlechte Lesbarkeit
//- folgt nicht DRY

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <>
      

      <div className="App">
        <div>
          <button onClick={() => setCounter1(counter1 + 1)}>+</button>
          <div>{counter1}</div>
          <button onClick={() => setCounter1(counter1 - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setCounter2(counter2 + 1)}>+</button>
          <div>{counter2}</div>
          <button onClick={() => setCounter2(counter2 - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setCounter3(counter3 + 1)}>+</button>
          <div>{counter3}</div>
          <button onClick={() => setCounter3(counter3 - 1)}>-</button>
        </div>
        <button
          onClick={() => {
            setCounter1(counter1 + 1);
            setCounter2(counter2 + 1);
            setCounter3(counter3 + 1);
          }}
        >
          Increase All
        </button>
        <button
          onClick={() => {
            setCounter1(counter1 - 1);
            setCounter2(counter2 - 1);
            setCounter3(counter3 - 1);
          }}
        >
          Decrease All
        </button>
      </div>
    </>
  );
}
