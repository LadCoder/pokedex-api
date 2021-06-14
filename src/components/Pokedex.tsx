import styles from './Pokedex.module.css'
import { RegionData } from '../types/region'
import { useContext } from 'react'
import { PokemonCard } from './PokemonCard'
import { RegionContext } from '../contexts/RegionContext'

interface Props {
    region: RegionData
}
export function Pokedex({ region }: Props) {
    const { pokedexes, pokemons } = useContext(RegionContext)
    const selectedPokedex = pokedexes.find((r) => r.region.name === region.name)

    if (!selectedPokedex) return <div></div>

    const pokemonInPokedex = pokemons.filter((p) => selectedPokedex.pokemon_entries.find((entry) => entry.pokemon_species.name === p.name)).sort((a, b) => a.order - b.order)

    return pokemonInPokedex.length > 0 ? (
        <div className={styles.pokedex}>
            {pokemonInPokedex.map((p) => {
                return <PokemonCard key={p.id} pokemon={p} />
            })}
        </div>
    ) : (
        <div>'Loading...'</div>
    )
}
