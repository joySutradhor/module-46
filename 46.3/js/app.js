
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries)
    const container = document.getElementById("countries");
    const mapedCountries = countries.map(country => {
        return `
        <div class="countryList"> 
        <h1>${country.name.common}</h1>
        <img src="${country.flags.png}" >
        
        </div> 
        
        `
    })
    container.innerHTML = mapedCountries.join(" ");
}


loadCountries()