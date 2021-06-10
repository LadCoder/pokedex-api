import { capitalizeName } from '../services/capitalizeName'
import { formatPokemonId } from '../services/formatPokemonId'
import { Pokemon, typeColor, validTypes } from '../types/pokemon'
import styles from './PokemonCard.module.css'

interface Props {
    pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
    const name = capitalizeName(pokemon.name)
    const typeName = pokemon.types[0].type.name
    const bg = validTypes.find((type) => type === typeName)
    const bgColor = typeColor[bg]

    return (
        <div className={styles.wrapper}>
            <div className={styles.card} style={{ backgroundColor: bgColor }}>
                <div className={styles.sprite}>
                    <img src={pokemon.sprite} />
                </div>
                <div className={styles.details}>
                    <span className={styles.id}>{formatPokemonId(pokemon.id)}</span>
                    <span className={styles.name}>{name}</span>
                    <small className={styles.type}>Type: {typeName}</small>
                </div>
            </div>
        </div>
    )
}
