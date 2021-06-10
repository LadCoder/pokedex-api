import { useGetPokemon } from '../services/useGetPokemon'
import { PokemonCard } from './PokemonCard'
import styles from './Pokedex.module.css'
import { Pokemon } from '../types/pokemon'

interface Props {
    pokemon: Pokemon[]
}
export function Pokedex({ pokemon }: Props) {
    return (
        <div className={styles.pokedex}>
            {pokemon.length > 0 &&
                pokemon.map((p) => {
                    return <PokemonCard key={p.id} pokemon={p} />
                })}
        </div>
    )
}
