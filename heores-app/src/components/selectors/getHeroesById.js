import { heroes } from '../../data/heroes';


export const getHeroesById = ( identifier ) => {

    return heroes.find(hero => hero.id === id );
    //Apenas encuentre uno devuelve
};
