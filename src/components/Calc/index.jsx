import React, { useState } from 'react';

function Calc() {
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [dobras, setDobras] = useState({ abdomen: 0, coxa: 0, peito: 0 });
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    const somaDasDobras = dobras.abdomen + dobras.coxa + dobras.peito;
    const resultado = 495 / (1.10938 - 0.0008267 * somaDasDobras + 0.0000016 * somaDasDobras * somaDasDobras - 0.0002574 * idade) - 450;
    setResultado(resultado);
  };

  return (
    <>
      <h1>Calc</h1>
      <input type="number" placeholder="Idade" onChange={e => setIdade(e.target.value)} />
      <input type="number" placeholder="Peso" onChange={e => setPeso(e.target.value)} />
      <input type="number" placeholder="Dobra Abdomen" onChange={e => setDobras({ ...dobras, abdomen: e.target.value })} />
      <input type="number" placeholder="Dobra Coxa" onChange={e => setDobras({ ...dobras, coxa: e.target.value })} />
      <input type="number" placeholder="Dobra Peito" onChange={e => setDobras({ ...dobras, peito: e.target.value })} />
      <button onClick={calcular}>Calcular</button>
      <p>Resultado: {resultado}</p>
    </>
  );
}

export default Calc;