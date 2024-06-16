const button = document.querySelector('#search-button')
const display = document.querySelector('#results')
const searchBar = document.querySelector('#search-bar')

async function getInformationFromApi() {

    const Searched = searchBar.value.trim();

    if (Searched === '') {
        display.innerHTML = 'Please enter a valid name of a person or planet.';
        return; 
    }

    const baseUrl = `https://swapi.dev/api/people/?search=${Searched}`;
    const response = await fetch(baseUrl)
    const data = await response.json()

    display.innerHTML = '';

   if (data.results.length === 0) {
    
    const baseUrl = `https://swapi.dev/api/planets/?search=${Searched}`;
    const response = await fetch(baseUrl)
    const data = await response.json()


    const planet = data.results[0];
    const planetInfo = `
         <div>
             <p>Name: ${planet.name}</p>
             <p>Population: ${planet.population}</p>
             <p>Gravity: ${planet.gravity} kg</p>
             <p>Terrain: ${planet.terrain}</p>
             <p>Climate: ${planet.climate}</p>
         </div>
     `;


     display.innerHTML = planetInfo;
   } else {
    const person = data.results[0];
   const personInfo = `
        <div>
            <p>Name: ${person.name}</p>
            <p>Height: ${person.height} cm</p>
            <p>Mass: ${person.mass} kg</p>
            <p>Gender: ${person.gender}</p>
            <p>Hair Color: ${person.hair_color}</p>
            <p>Skin Color: ${person.skin_color}</p>
            <p>Eye Color: ${person.eye_color}</p>
        </div>
    `;

    display.innerHTML = personInfo;
   }
    
} 


button.addEventListener('click', getInformationFromApi)
searchBar.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {

      event.preventDefault();

      button.click();
    }
  }); 


