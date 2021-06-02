import countriesCardTpl from '../templates/countries-cards.hbs';
import countriesName from '../templates/countri-name.hbs';
import API from './fetchCountries.js';
import getRefs from './get-refs.js';

import '@pnotify/core/dist/BrightTheme.css';
const{ error } = require('@pnotify/core');

var debounce = require('lodash.debounce');

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    clearContainer();

    const searchQuery = e.target.value;
    console.log(API.fetchCountries(searchQuery))

    API.fetchCountries(searchQuery)
    .then(renderCountriCard)
    .catch(onFetchError)
}

function renderCountriCard(data) {
    console.log(data)
    if (data.length > 10) {
        error({
            text: 'To many matches found. Pleas enter a more specific query!'
        }); 
    }
    else if (data.length === 1) {
        buildListMarkup(data, countriesCardTpl)
    }
    else if (data.length <= 10) {
        buildListMarkup(data, countriesName)
    }    
}


function buildListMarkup(countryes, template) {
  const markup = countryes.map(count => template(count)).join();
  refs.cardConteiner.innerHTML = markup;
}

function onFetchError(error) {    
      const Error = "You must enter query parameters!"    
      console.log(Error)  
}

function clearContainer() {
  refs.cardConteiner.innerHTML = '';
}