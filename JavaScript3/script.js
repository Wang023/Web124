// Gana Sehaki 07/12/2025

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// display matches funtion
function displayMatches() {
  const matchArray = findMatches(this.value, cities);

  if (!this.value.trim()) {
    suggestions.textContent = 
    `Filter for a city or a state`;
    return;
  }

  if (matchArray.length === 0) {
    suggestions.innerHTML = `<li class="no-results">No results found !</li>`;
    return;
  }

  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


// selected cities

suggestions.addEventListener('click', function (e) {
  if (e.target.closest('li')) {
    const li = e.target.closest('li');
    const selectedCity = li.querySelector('.name')?.textContent;
    if (selectedCity) {
      addCityToSelection(selectedCity);
    }
  }
});

function addCityToSelection(city) {
  const selectedList = document.querySelector('.selected-cities');
  
  // AVoid double selection
  const existingItems = Array.from(selectedList.querySelectorAll('li')).map(li => li.textContent);
  if (existingItems.includes(city)) return;

  const newLi = document.createElement('li');
  newLi.textContent = city;
  selectedList.appendChild(newLi);
}
