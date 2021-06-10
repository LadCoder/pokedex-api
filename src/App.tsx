import { Pokedex } from './components/Pokedex'
import styles from './App.module.css'
import { useGetPokemon } from './services/useGetPokemon'

export function App() {
    const pokemon = useGetPokemon()
    const sortedPokemon = pokemon.sort((a, b) => a.id - b.id)

    return (
        <div className={styles.app}>
            <h1>Kanto Pokedex</h1>
            <Pokedex pokemon={sortedPokemon} />
        </div>
    )
}
