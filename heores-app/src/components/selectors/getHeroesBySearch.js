import { heroes } from "../../data/heroes";

export const getHeroesBySearch = ( searchValue = '') => {

    if ( searchValue === '' ){
        return [];
    };
    
    searchValue = searchValue.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes( searchValue ) );
};