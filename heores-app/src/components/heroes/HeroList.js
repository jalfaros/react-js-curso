import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroesList = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);


    //const heroesList = getHeroesByPublisher( publisher );

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
