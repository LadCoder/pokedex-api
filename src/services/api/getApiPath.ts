const baseUrl = 'https://pokeapi.co/api/v2/'
export const pokemonUrl = `${baseUrl}pokemon/`
export const pokedexUrl = `${baseUrl}pokedex/`
export const regionUrl = `${baseUrl}region/`

export const fetchAllPokemonUrl = (pagination: boolean, page?: number) => {
    switch (pagination) {
        case true:
            return `${pokemonUrl}?offset=${page * 20}`
        case false:
            return `${pokemonUrl}`
    }
}

export const fetchKantoPokemonUrl = (pagination: boolean, page?: number) => {
    switch (pagination) {
        case true:
            return `${pokemonUrl}?limit=20&offset=${page * 20}`
        case false:
            return `${pokemonUrl}?limit=151`
    }
}

export const fetchSpecificPokemonUrl = (lookup: number | string) => {
    return `${pokemonUrl}${lookup}`
}

export const fetchSpecificRegionUrl = (lookup: number | string) => {
    return `${regionUrl}${lookup}`
}

export const fetchSpecificPokedexUrl = (lookup: number | string) => {
    return `${pokedexUrl}${lookup}`
}
