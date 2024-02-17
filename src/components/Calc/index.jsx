import React, { useState } from 'react';
import "../../styles/index.css"
//import Chart from '../chat';

function Calc() {
  const [idade, setIdade] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [atividade, setAtividade] = useState(1.2);
  const [dobras, setDobras] = useState({ abdomen: 0, coxa: 0, peito: 0 });
  const [resultado, setResultado] = useState(0);
  const [calorias, setCalorias] = useState(0);
  const [massaGorda, setMassaGorda] = useState(0);
  const [massaMagra, setMassaMagra] = useState(0);
  const [pesoOsseo, setPesoOsseo] = useState(0);


  const calcular = () => {
    const somaDasDobras = Number(dobras.abdomen) + Number(dobras.coxa) + Number(dobras.peito);
    const resultado = 495 / (1.10938 - 0.0008267 * somaDasDobras + 0.0000016 * somaDasDobras * somaDasDobras - 0.0002574 * Number(idade)) - 450;
    setResultado(resultado);

    const BMR = 88.362 + (13.397 * Number(peso)) + (4.799 * Number(altura)) - (5.677 * Number(idade));
    const calorias = BMR * Number(atividade);
    setCalorias(calorias);

    const massaGorda = Number(peso) * resultado / 100;
    setMassaGorda(massaGorda);

    const massaMagra = Number(peso) - massaGorda;
    setMassaMagra(massaMagra);

    const pesoOsseo = (Number(peso) * 0.015) * (Number(altura) / 100);
    setPesoOsseo(pesoOsseo);
  };

  return (
    <div class="mx-auto max-w-2xl text-center py-24 space-y-2 " >

      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Calculadora de porcentagem de gordura corporal</h1>


      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2  ">
        <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" placeholder="Idade" onChange={e => setIdade(e.target.value)} />
        <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" placeholder="Peso" onChange={e => setPeso(e.target.value)} />
        <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" placeholder="Altura" onChange={e => setAltura(e.target.value)} />
        <select onChange={e => setAtividade(e.target.value)}>
          <option value={1.2}>Sedentário</option>
          <option value={1.375}>Levemente ativo</option>
          <option value={1.55}>Moderadamente Ativo</option>
          <option value={1.725}>Muito Ativo</option>
          <option value={1.9}>Super Ativo</option>
        </select>
        <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" placeholder="Dobra Abdomen" onChange={e => setDobras({ ...dobras, abdomen: e.target.value })} />
        <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" placeholder="Dobra Coxa" onChange={e => setDobras({ ...dobras, coxa: e.target.value })} />
        <input class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" placeholder="Dobra Peito" onChange={e => setDobras({ ...dobras, peito: e.target.value })} />
      </div>
      <button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={calcular}>Calcular</button>
      <p className='text-red-500'>Porcentagem de Gordura Corporal: {resultado}</p>
      <p>Calorias Diárias: {calorias}</p>
      <p>Massa Gorda: {massaGorda}</p>
      <p>Massa Magra: {massaMagra}</p>
      <p>Peso Ósseo: {pesoOsseo}</p>
      {/* <Chart massaGorda={massaGorda} massaMagra={massaMagra} pesoOsseo={pesoOsseo} /> */}


    </div>

  );
}

export default Calc;