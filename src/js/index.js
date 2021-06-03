import '../sass/main.scss';
import countriesCardTpl from '../templates/countries-cards.hbs';
import countriesName from '../templates/countri-name.hbs';
import fetchCountries from './fetchCountries.js';
import getRefs from './get-refs.js';

import '@pnotify/core/dist/BrightTheme.css';
import { error} from '@pnotify/core';
// const{ error } = require('@pnotify/core');

var debounce = require('lodash.debounce');

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    clearContainer();

    const searchQuery = e.target.value;
    // console.log(API.fetchCountries(searchQuery))

    fetchCountries(searchQuery)
        .then(data => {
            if (data.length > 10) {
                onFetchError('To many matches found. Pleas enter a more specific query!')
                return;
            }
            if (data.length <= 10 && data.length > 1) {
                buildListMarkupOne(data);
                return;
            }
            if (data.length === 1) {
                buildListMarkup(data);
                return;
            }
        })
        .catch(onFetchError);
}

function buildListMarkupOne(countryes) {
  const markupOne = countriesName(countryes);
  refs.cardContainer.innerHTML = markupOne;
}

function buildListMarkup(countryes) {
  const markup = countriesCardTpl(countryes);
  refs.cardContainer.innerHTML = markup;
}

// function buildListMarkup(countryes, template) {
//   const markup = countryes.map(count => template(count)).join();
//   refs.cardContainer.innerHTML = markup;
// }

function onFetchError(e) {
    error({ text: `${e}`, delay: 2000 })
}

function clearContainer() {
  refs.cardContainer.innerHTML = '';
}

// "You must enter query parameters!"