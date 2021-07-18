import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroesList = getHeroesByPublisher( publisher );

    return (

        <div className = "row">
           
            {
                heroesList.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        hero = { hero }
                    />
                ))
            }
            
        </div>
    )
}
