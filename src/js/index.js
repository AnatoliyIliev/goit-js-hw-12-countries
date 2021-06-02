import countriesCardTpl from '../templates/countries-cards.hbs';
import API from './fetchCountries.js';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('input', onSearch); // проверить searchForm
// refs.searchForm.addEventListener('change', onSearch);

function onSearch(e) {
    e.preventDefault();
    console.log(e);  // проверить
    const form = e.target;  // проверить
    console.log(form);  // проверить
    const searchQuery = form.elements.query.value; // проверить

    API.fetchCountries(searchQuery)
    .then(renderCountriCard)
    .catch(onFetchError)
    .finally(() => form.reset());   // проверить
}

function renderCountriCard(countries) {
    const markup = countriesCardTpl(countries);        
    refs.cardConteiner.innerHTML = markup;
}

function onFetchError(error){
    let debounce = require('lodash.debounce');
// _.debounce(func, [wait=0], [options={}])

// import { alert, defaultModules } from '@pnotify/core';
// import * as PNotifyMobile from '@pnotify/mobile';

// defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Notice me, senpai!'
// });

}


const vvv = 'Ukraine'
console.log(API.fetchCountries(vvv))