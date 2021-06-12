import { Pokedex, PokemonEntry } from '../../types/pokedex'
import { Pokemon } from '../../types/pokemon'
import { Region } from '../../types/region'
import { fetchSpecificPokemonUrl } from './getApiPath'

export const getPokedexFromRegion = async (region: Region, onSet: (pokedex: Pokedex) => void) => {
    const url = region.pokedexes[0].url

    fetch(url).then(async (res) => onSet(await res.json()))
}

export const getPokemonFromPokedex = (pokedex: Pokedex, onSet: (pokemon: Pokemon[] | ((prevData: Pokemon[]) => Pokemon[])) => void) => {
    if (!pokedex) return
    pokedex.pokemon_entries.map((pokemon) => {
        getPokemonFromEntry(pokemon, onSet)
    })
}

export const getPokemonFromEntry = (pokemonEntry: PokemonEntry, onSet: (pokemon: Pokemon[] | ((prevData: Pokemon[]) => Pokemon[])) => void) => {
    const url = fetchSpecificPokemonUrl(pokemonEntry.pokemon_species.name)

    fetch(url)
        .then((res) => res.json())
        .then((pokemon) => {
            onSet((prevData: Pokemon[]) => [...prevData, createPokemonType(pokemon)])
        })
}

const createPokemonType = (data: Pokemon): Pokemon => {
    return {
        id: data.id,
        name: data.name,
        sprite: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
        types: data.types
    }
}
