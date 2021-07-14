import  { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        
        return () => {
            isMounted.current = false;  
        };

    },[])


    useEffect(() => {
        fetch( url )
            .then( response => response.json())
            .then( data => {

                if ( isMounted.current ){
                        setState({
                            loading: false,
                            error: null, 
                            data
                        });

                }else{ // Solo para método de prueba... generalmente no se utiliza
                    console.log('Se state no se llamó')
                }

                
            });
    }, [url]);


    return state;

};
