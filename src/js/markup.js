import countriesCards from '../templates/countries-cards.hbs';
import refs from './refs';

export default function markup(countries) {
    const markup = countriesCards(countries);    
    
    return refs.cardConteiner.innerHTML = markup;
}