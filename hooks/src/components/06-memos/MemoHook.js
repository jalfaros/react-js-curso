import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'


import '../03-examples/hooks.css'

export const MemoHook = () => {


    const { state, increment } = useCounter( 50 );
    const [show, setShow] = useState(true);


    const procesoPesado = ( iteraciones ) => {
        for( let i = 0; i < iteraciones; i ++ ){
            console.log('Dándole')
        };

        return  `${ iteraciones } iteraciones realizadas.`;
    };

    const memoProcesoPesado = useMemo(() => procesoPesado( state ),  [state] )

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            <p> { memoProcesoPesado } </p>

            <h3>Counter: <small>{ state }</small> </h3>

            <button className = "btn btn-primary" onClick={ () => increment(1) }>
                + 1
            </button>


            <button className = "btn btn-outline-primary" 
                    style={{ marginLeft: '10px' }}
                    onClick = { () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
