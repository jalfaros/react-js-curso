import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesBySearch } from '../selectors/getHeroesBySearch';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { query = '' } = queryString.parse( location.search );

    const [ heroValue, handleInputChange ] = useForm({ searchText : query });
    const { searchText } = heroValue;

    
    const filteredHeroes = useMemo(() =>  getHeroesBySearch( query ), [ query ]);

   

    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?query=${searchText}`);
    };


    return (
        <div>
            <h1>🦸 Hero Finder 🦸</h1>

            <div className="row mt-5">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />


                    <form onSubmit = { handleSearch }>
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Find your heroe"
                            name = "searchText"
                            autoComplete = "off"
                            onChange = { handleInputChange }
                            value = { searchText }
                        />

                        <button 
                            className = "btn btn-primary btn-block mt-3"
                            type = "submit"
                        >
                            Search 🔍   
                        </button>
                    </form>
                </div>



                <div className="col-7">
                    <h4>Search results</h4>
                    <hr />

                    { 
                        ( filteredHeroes.length > 0 )
                            ? 
                                filteredHeroes.map( hero => (
                                    <HeroCard 
                                        hero = { hero }
                                        key  = { hero.id }
                                    />
                            
                                 ))
                            :
                                <div className="alert alert-info text-center" role="alert">
                                    <p>Heroe: "<b>{ query }</b>" does not exists</p>
                                </div>
                    }
                </div>
                
            </div>
        </div>
    )
}
