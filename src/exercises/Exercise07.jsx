// Exercise07.js
import { useMemo, useRef, useState } from "react";

const Exercise07 = () => {

  const numRef = useRef(0);

  const [fatorial, setFatorial] = useState(1);

  function calcularFatorial() {
    let num = parseInt(numRef.current.value);
    let fat = 1;
    for (let i = 1; i <= num; i++) {
      fat *= i;
    }
    setFatorial(fat);
  }

  const resultadoMemo = useMemo(() => {
    return fatorial === 1 ? "" : <p>O fatorial deste valor é {fatorial}</p>;
  }, [fatorial]);

  return (
    <div>
      <h1>Exercise 07</h1>
      <label htmlFor="fatorial">Numero a ser fatorado: </label>
      <input type="number" id="fatorial" ref={numRef} /> 
      <button onClick={calcularFatorial}>Calcular</button>
      <br />
      <br />
      {resultadoMemo}
    </div>
  );
};

export default Exercise07;
