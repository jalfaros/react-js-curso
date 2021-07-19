import { heroes } from '../../data/heroes';


export const getHeroesById = ( identifier ) => {

    return heroes.find(hero => hero.id === identifier );
    //Apenas encuentre uno devuelve
};
