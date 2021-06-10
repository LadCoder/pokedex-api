import { useGetPokemon } from '../services/useGetPokemon'
import { PokemonCard } from './PokemonCard'
import styles from './Pokedex.module.css'

export function Pokedex() {
    const pokemon = useGetPokemon()
    const sortedPokemon = pokemon.sort((a, b) => a.id - b.id)

    return (
        <div className={styles.pokedex}>
            {sortedPokemon.length > 0 &&
                sortedPokemon.map((p) => {
                    return <PokemonCard key={p.id} pokemon={p} />
                })}
        </div>
    )
}
