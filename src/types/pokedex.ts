import { Relation } from './commonTypes'
import { Pokemon } from './pokemon'

export interface Pokedex {
    id: number
    name: string
    pokemon: Pokemon[]
    region: number
}

export type PokemonEntry = {
    entry_number: number
    pokemon_species: Relation
}

export interface PokedexData {
    id: number
    name: string
    pokemon_entries: PokemonEntry[]
    region: Relation
}
