import { Pokedex } from './components/Pokedex'
import styles from './App.module.css'

export function App() {
    return (
        <div className={styles.app}>
            <h1>Kanto Pokedex</h1>
            <Pokedex />
        </div>
    )
}
