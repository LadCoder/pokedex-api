import { useEffect, useState } from 'react'
import { Pokemon, PokemonType } from '../types/pokemon'

const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonLimit = 151

export const useGetPokemon = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    let mounted = true

    useEffect(() => {
        if (mounted) {
            fetchPokemon(setPokemonList)
        }
        return () => {
            mounted = false
            setPokemonList([])
        }
    }, [])

    return pokemonList
}

const fetchPokemon = (setPokemonList: (list: Pokemon[] | ((prevVar: Pokemon[]) => Pokemon[])) => void) => {
    let pokemon: Pokemon

    try {
        for (let i = 1; i <= pokemonLimit; i++) {
            fetch(`${pokedexUrl}${i}`)
                .then((res) => res.json())
                .then((data) => {
                    pokemon = {
                        id: data.id,
                        name: data.name,
                        sprite: `https://pokeres.bastionbot.org/images/pokemon/${i}.png`,
                        types: data.types.map((type: { slot: number; type: PokemonType }) => type.type.name)
                    }
                    setPokemonList((prevVar: Pokemon[]) => [...prevVar, pokemon])
                })
        }
    } catch (e: any) {
        alert(`Couldn't get the pokemon: ${e}`)
    }
}
