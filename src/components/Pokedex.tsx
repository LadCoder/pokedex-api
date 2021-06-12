import styles from './Pokedex.module.css'
import { Region } from '../types/region'
import { Pokedex as PokedexType } from '../types/pokedex'
import { useEffect, useState } from 'react'
import { getPokedexFromRegion, getPokemonFromPokedex } from '../services/api/getPokedexFromRegion'
import { Pokemon } from '../types/pokemon'
import { PokemonCard } from './PokemonCard'

interface Props {
    region: Region
}
export function Pokedex({ region }: Props) {
    const [pokedex, setPokedex] = useState<PokedexType>()
    const [pokemon, setPokemon] = useState<Pokemon[]>([])

    let mounted = true

    useEffect(() => {
        if (mounted) {
            setPokemon([])
            getPokedexFromRegion(region, setPokedex)
        }
        return () => {
            mounted = false
        }
    }, [region])

    useEffect(() => {
        if (mounted) getPokemonFromPokedex(pokedex, setPokemon)
        return () => {
            mounted = false
        }
    }, [pokedex])

    return pokemon.length > 0 ? (
        <div className={styles.pokedex}>
            {pokemon.map((p) => {
                return <PokemonCard key={p.id} pokemon={p} />
            })}
        </div>
    ) : (
        <div>'Loading...'</div>
    )
}
