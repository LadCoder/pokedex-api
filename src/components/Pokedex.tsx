import styles from './Pokedex.module.css'
import { RegionData } from '../types/region'
import { useContext, useState } from 'react'
import { PokemonCard } from './PokemonCard'
import { RegionContext } from '../contexts/RegionContext'
import { Pokemon } from '../types/pokemon'
import { Button, ButtonBar, ButtonType } from './shared/Button'
import { Pokedex } from '../types/pokedex'

interface Props {
    region: RegionData
}

export function Pokedex({ region }: Props) {
    const { pokedexes, pokemons } = useContext(RegionContext)
    const [sortOrder, setSortOrder] = useState<'national' | 'pokedex'>('national')

    const selectedPokedex = pokedexes.find((r) => r.region.name === region.name)
    if (!selectedPokedex) return <div></div>

    const pokemonInPokedex = sortPokedex(
        pokemons.filter((p) => selectedPokedex.pokemon_entries.find((entry) => entry.pokemon_species.name === p.name)),
        selectedPokedex.name,
        sortOrder
    )

    return pokemonInPokedex.length > 0 ? (
        <div>
            <ButtonBar className={styles.buttons}>
                <Button type={ButtonType.Primary} text={'National order'} onClick={() => setSortOrder('national')} />
                <Button type={ButtonType.Valid} text={'Pokedex order'} onClick={() => setSortOrder('pokedex')} />
            </ButtonBar>
            <div key={sortOrder} className={styles.pokedex}>
                {pokemonInPokedex.map((p) => {
                    return <PokemonCard key={p.id} pokemon={p} />
                })}
            </div>
        </div>
    ) : (
        <div>'Loading...'</div>
    )
}

export const getDexEntryNumber = (pokemon: Pokemon, regionName: string) => {
    return pokemon.pokedexes.find((dex) => dex.pokedex.name === regionName).entry_number
}

export const sortPokedex = (pokemons: Pokemon[], regionName: string, sortType: 'national' | 'pokedex') => {
    switch (sortType) {
        case 'national':
            return pokemons.sort((a, b) => a.id - b.id)
        case 'pokedex':
            return pokemons.sort((a, b) => getDexEntryNumber(a, regionName) - getDexEntryNumber(b, regionName))
        default:
            return pokemons
    }
}
