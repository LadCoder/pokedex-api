import { useEffect, useState } from 'react'
import { Pokemon, PokemonType } from '../types/pokemon'

export const useGetPokemon = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const pokemonLimit = 151

    let pokemon: Pokemon

    const fetchPokemon = () => {
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
    let mounted = true

    useEffect(() => {
        if (mounted) {
            fetchPokemon()
        }
        return () => {
            mounted = false
            setPokemonList([])
        }
    }, [])

    return pokemonList
}
