import * as React from 'react'
import { capitalizeName } from '../services/capitalizeName'
import { Pokemon, typeColor, validTypes } from '../types/pokemon'
import styles from './PokemonCard.module.css'

interface Props {
    pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
    const name = capitalizeName(pokemon.name)
    const bg = validTypes.find((type) => type === pokemon.types[0])
    const bgColor = typeColor[bg]

    return (
        <div className={styles.wrapper}>
            <div className={styles.card} style={{ backgroundColor: bgColor }}>
                <div className={styles.sprite}>
                    <img src={pokemon.sprite} />
                </div>
                <div className={styles.details}>
                    <span className={styles.id}>#{pokemon.id.toString().padStart(3, '0')}</span>
                    <span className={styles.name}>{name}</span>
                    <small className={styles.type}>Type: {pokemon.types[0]}</small>
                </div>
            </div>
        </div>
    )
}
