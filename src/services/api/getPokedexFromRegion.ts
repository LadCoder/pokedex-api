import { allData } from '../../types/allData'
import { PokedexData, PokemonEntry } from '../../types/pokedex'
import { Pokemon } from '../../types/pokemon'
import { RegionData } from '../../types/region'
import { fetchSpecificPokemonUrl } from './getApiPath'

export const getPokedexFromRegion = async (pokemon: Pokemon[], region: RegionData, onSet: (data: allData | ((prevData: allData) => allData)) => void) => {
    await fetch(region.pokedexes[0].url)
        .then(async (res) => res.json())
        .then(async (pokedex) => {
            await getPokemonFromPokedex(pokemon, pokedex, onSet)
            onSet((prevData) => {
                return {
                    ...prevData,
                    pokedex: [...prevData.pokedex, pokedex]
                }
            })
        })
}

const getPokemonFromPokedex = async (pokemons: Pokemon[], pokedex: PokedexData, onSet: (data: allData | ((prevData: allData) => allData)) => void) => {
    if (!pokedex) return
    pokedex.pokemon_entries.map((pokemon) => {
        const doesPokemonExist = pokemons.findIndex((p) => p.name === pokemon.pokemon_species.name)
        if (doesPokemonExist > -1) return
        getPokemonFromEntry(pokemon, onSet)
    })
}

export const getPokemonFromEntry = async (pokemonEntry: PokemonEntry, onSet: (data: allData | ((prevData: allData) => allData)) => void) => {
    const url = fetchSpecificPokemonUrl(pokemonEntry.pokemon_species.name)

    await fetch(url)
        .then(async (res) => await res.json())
        .then((pokemon) => {
            onSet((prevData) => {
                return {
                    ...prevData,
                    pokemon: [...prevData.pokemon, createPokemonType(pokemon)]
                }
            })
        })
}

const createPokemonType = (data: Pokemon): Pokemon => {
    return {
        id: data.id,
        name: data.name,
        order: data.order,
        sprite: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
        types: data.types
    }
}
