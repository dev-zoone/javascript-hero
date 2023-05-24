const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => showCountriesHTML(country))
    // console.log(countriesHTML.join(" "));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(" ")
}

const showCountriesHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}"/>
            <h6>${country.altSpellings}</h6>
            <h2>Area: ${country.area}</h2>
            <h3>Population: ${country.population}</h3>
        </div>
    `
}

loadCountries()