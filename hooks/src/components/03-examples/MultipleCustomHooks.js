import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';



import './hooks.css'

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);
    const { quote, author } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {   
                loading ?         
                
                <div className="alert alert-info text-center">
                    Loading...
                </div>

                :

                <blockquote className = "blockquote" style = {{ textAlign: 'right' }}>
                    <p className = ""> {quote} </p>
                    <footer className = "mt-2 blockquote-footer"> {author} </footer>
                </blockquote>
 
            }

            <button className = "btn btn-primary" onClick={ () => increment(1)}>
                Next quote
            </button>
    
            
        </div>
    )
}
