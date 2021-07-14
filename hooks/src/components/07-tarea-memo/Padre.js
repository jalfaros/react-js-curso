import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../03-examples/hooks.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    // El useCallback siempre va de la mano con el React.Memo ( en el componente hijo )

    const incrementar = useCallback( ( num ) => {
        setValor( v => v + num ); // De esta manera se trabaja con una copia de valor 

    },[ setValor ])


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( (n, index) => (
                    <Hijo 
                        key={ index }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
