import { Relation } from './commonTypes'

export interface Pokedex {
    id: number
    name: string
    pokemon_entries: PokemonEntry[]
    region: Relation
}

export type PokemonEntry = {
    entry_number: number
    pokemon_species: Relation
}
