const baseUrl = 'https://pokeapi.co/api/v2/'
const pokedexUrl = `${baseUrl}pokemon/`
const regionUrl = `${baseUrl}region/`

export const fetchAllPokemonUrl = (pagination: boolean, page?: number) => {
    switch (pagination) {
        case true:
            return `${pokedexUrl}?offset=${page * 20}`
        case false:
            return `${pokedexUrl}`
    }
}

export const fetchKantoPokemonUrl = (pagination: boolean, page?: number) => {
    switch (pagination) {
        case true:
            return `${pokedexUrl}?limit=20&offset=${page * 20}`
        case false:
            return `${pokedexUrl}?limit=151`
    }
}

export const fetchSpecificPokemonUrl = (lookup: number | string) => {
    return `${pokedexUrl}${lookup}`
}
