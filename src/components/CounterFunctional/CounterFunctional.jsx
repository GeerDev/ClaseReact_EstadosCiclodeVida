import React, {useState} from 'react'

const CounterFunctional = ({valorInicial}) => {

const [counter, setCounter] = useState (valorInicial)
const [contador, setContador] = useState ("Mi contador")

const incrementar = () => {
   setCounter(counter + 1)
}

setTimeout(() => {
    setContador("Este es tu contador de verdad de la buena")
}, 3000);

  return (
    <div>
    <h2>{contador}</h2>
    <span>{counter}</span>
    <br />
    <button onClick={incrementar}>Incrementa!</button>
</div>
  )
}

export default CounterFunctional