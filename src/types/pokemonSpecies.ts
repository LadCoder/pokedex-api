import { Relation } from './commonTypes'
import { LanguageName } from './language'

export interface PokemonSpecies {
    id: number
    name: string
    order: number
    gender_rate: number
    capture_rate: number
    base_happiness: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    hatch_counter: number
    has_gender_differences: boolean
    forms_switchable: boolean
    growth_rate: Relation
    pokedex_numbers: PokedexNumber[]
    egg_groups: Relation[]
    color: Relation
    shape: Relation
    evolves_from_species: Relation
    evolution_chain: {
        url: string
        habitat: string | null
    }
    generation: Relation
    names: LanguageName[]
    varieties: {
        is_default: boolean
        pokemon: Relation
    }[]
}

export type PokedexNumber = {
    entry_number: number
    pokedex: Relation
}
