import markup from './markup';
import fetchCountries from './fetchCountries.js';

function onSearch(e) {
    e.preventDefault();

    fetchCountries().then(markup)
        .catch(error => 
            console.log(error)
    )
}