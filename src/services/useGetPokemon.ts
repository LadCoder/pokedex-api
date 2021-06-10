import { Props, useEffect, useState } from 'react'
import { Pokemon } from '../types/pokemon'
import { fetchKantoPokemonUrl, fetchSpecificPokemonUrl } from './getApiPath'

export const useGetPokemon = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    let mounted = true

    useEffect(() => {
        if (mounted) {
            fetchPokedex(setPokemonList)
        }
        return () => {
            mounted = false
            setPokemonList([])
        }
    }, [])

    return pokemonList
}

const fetchPokedex = (setPokemonList: (list: Pokemon[] | ((prevData: Pokemon[]) => Pokemon[])) => void) => {
    try {
        fetch(fetchKantoPokemonUrl(false))
            .then((res) => res.json())
            .then((data) => {
                data.results.map(async (p: { name: string; url: string }) => {
                    await fetchPokemon({ url: p.url, onSet: setPokemonList })
                })
            })
    } catch (e: any) {
        console.log(`Couldn't get the pokemon: ${e}`)
    }
}

interface FetchPokemonProps {
    lookup?: number | string
    url?: string
    onSet: (list: Pokemon[] | ((prevData: Pokemon[]) => Pokemon[])) => void
}

const fetchPokemon = async ({ lookup, url, onSet }: FetchPokemonProps): Promise<Pokemon> => {
    const fetchUrl = url ? url : fetchSpecificPokemonUrl(lookup)
    try {
        await fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                const p = createPokemonType(data)
                onSet((prevData: Pokemon[]) => [...prevData, p])
            })
    } catch (e: any) {
        console.log(`Couldn't get the pokemon: ${e}`)
    }
    return
}

const createPokemonType = (data: Pokemon): Pokemon => {
    return {
        id: data.id,
        name: data.name,
        sprite: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
        types: data.types
    }
}
