const BASE_URL = "https://pokeapi.co/api/v2/";
const NR_OF_POKEMON = 10;

function randomId() {
    return Math.round(Math.random()*1000);
}

async function getPokemon() {
    return fetch(`${BASE_URL}/pokemon/${randomId()}`)
        .then((res) => res.json())
        .then((json) => ({id: json.id, name: json.name, spriteUrl: json.sprites.other['official-artwork'].front_default}))
};

(async function getPokemonData() {
    let pokemonArray = new Array(NR_OF_POKEMON)
        .fill("");
    pokemonArray = Promise.all(pokemonArray.map(async (_, i) => {
        try {
            return await getPokemon();
        } catch(err) {
            return {i, err};
        }
    }));
    pokemonArray.then((result) => console.log(result));
})();