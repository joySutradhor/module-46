
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries)
    const container = document.getElementById("countries");
    const mapedCountries = countries.map(country => countryHtml(country));
    container.innerHTML = mapedCountries.join(" ");
}

const  countryHtml = ({name , flags})=>{
    return `
    <div class="countryList"> 
    <h1>${name.common}</h1>
    <img src="${flags.png}">
    </div> 
    
    `
}


loadCountries()