import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

import './layout.css'

export const LayoutEffect = () => {

    const { state, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);


    const { quote } = !!data && data[0];

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({});

    
    useLayoutEffect(() => {
        setBoxSize( pRef.current.getBoundingClientRect() )
    }, [quote])


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

           
            <blockquote className = "blockquote" style = {{ textAlign: 'right' }}>
                <p  ref = { pRef }> 
                    {quote} 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
            

            <button className = "btn btn-primary" onClick={ () => increment(1)}>
                Next quote
            </button>
    
            
        </div>
    )
}
