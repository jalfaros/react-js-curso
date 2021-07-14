import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { SmallCounter } from './SmallCounter';

import '../03-examples/hooks.css'

export const Memorize = () => {


    const { state, increment } = useCounter();

    const [show, setShow] = useState(true);



    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h3>Counter: <SmallCounter value = { state }/> </h3>

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
