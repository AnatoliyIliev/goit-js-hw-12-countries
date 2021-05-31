function fetchCountries (searchQuery){
    return fetch('https://restcountries.eu/#api-endpoints-name').then(response => {
        return response.json();
    })
}