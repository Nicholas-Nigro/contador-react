import { useState } from "react"

export default function App(){

    //let numero = 0
    const [numero, setNumero ] = useState(0)

    function aumentar () {
        numero++
        console.log(numero)
    }
    function diminuir () {
        numero--
        console.log(numero)
    }


    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={aumentar}>mais</button>
        <button onClick={diminuir}>menos</button>
        </section>
}