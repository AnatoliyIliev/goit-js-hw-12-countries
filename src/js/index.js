import fetchCountries from './fetchCountries.js';
import './refs';
import markup from './markup';
import onSearch from './onSearch';




let debounce = require('lodash.debounce');
// _.debounce(func, [wait=0], [options={}])

// import { alert, defaultModules } from '@pnotify/core';
// import * as PNotifyMobile from '@pnotify/mobile';

// defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Notice me, senpai!'
// });

const vvv = 'Ukraine'

console.log(fetchCountries(vvv))