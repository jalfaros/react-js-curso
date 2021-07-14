import React, { useState } from 'react';
import '../03-examples/hooks.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className="btn btn-outline-info mt-5" onClick={ () => setShow( !show ) }>
                Show/Hide
            </button>


        </>
    )
}
