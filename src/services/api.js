const BASE_URL = "https://pokeapi.co/api/v2/";
const NR_OF_POKEMON = 15;

let idArray = [];

function randomId() {
    return Math.round(Math.random()*1000);
}

async function getPokemon() {
    let id = randomId();
    while (idArray.includes(id)) {
        console.log("had a double ID, had to get a new random id");
        console.log("new ID", id);
        id = randomId();
        console.log(idArray);
    }
    idArray.push(id);
    return fetch(`${BASE_URL}/pokemon/${id}`)
        .then((res) => res.json())
        .then((json) => ({id: json.id, name: json.name, spriteUrl: json.sprites.other['official-artwork'].front_default}))
};

export async function getPokemonData() {
    idArray = [];
    let pokemonArray = new Array(NR_OF_POKEMON)
        .fill("");
    pokemonArray = Promise.all(pokemonArray.map(async (_, i) => {
        try {
            return await getPokemon();
        } catch(err) {
            return {i, err};
        }
    }));
    return pokemonArray;
};