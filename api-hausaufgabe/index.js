

// function searchPoke1() {
//     fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     const output = document.getElementById("poke1")
//         .then(res => res.json())
//         .then(data => {
//             const poke1 = data.result[]
//             const nameElement = document.createElement("h1")
//             nameElement.innerText = poke1.name
//         })
//             output.appendChild(nameElement)




// }

function searchPoke1() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById("poke1"); // Element auswählen
            const poke1 = data; // Das Pokémon-Objekt aus der API

            const nameElement = document.createElement("h1");
            nameElement.innerText = poke1.name; // Namen des Pokémon setzen
            
            output.appendChild(nameElement); // Element zum DOM hinzufügen
        })
}

// Funktion nach dem Laden der Seite aufrufen (optional)
document.addEventListener("DOMContentLoaded", searchPoke1);


function searchPoke2() {
    fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById("poke2"); // Element auswählen
            const poke1 = data; // Das Pokémon-Objekt aus der API

            const nameElement = document.createElement("h1");
            nameElement.innerText = poke1.name; // Namen des Pokémon setzen
            
            output.appendChild(nameElement); // Element zum DOM hinzufügen
        })
}

// Funktion nach dem Laden der Seite aufrufen (optional)
document.addEventListener("DOMContentLoaded", searchPoke2);

