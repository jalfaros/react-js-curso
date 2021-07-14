import React, { useEffect, useState } from 'react'

export const Meesage = () => {

    const [cors, setCors] = useState({x: 0, y:0});
    
    const {x, y} = cors;

    useEffect(() => {

        const mousemove = ({x, y}) =>{
            const cors = { x: x, y:y }
            setCors( cors );
        };
        window.addEventListener('mousemove', mousemove);


        return () => {
            console.log('Componente desmontado')
            window.removeEventListener('mousemove', mousemove);
        };

    }, [])


    return (
        <>
          <h3>You are awesome</h3>
          <p>
              x: { x }, y: { y }
          </p>
        </>
    )
}
