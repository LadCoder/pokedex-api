import { Relation } from './commonTypes'
import { Pokedex } from './pokedex'

export interface RegionData {
    id: number
    locations: []
    main_generation: Relation
    name: string
    names: string[]
    pokedexes: Relation[]
    version_groups: Relation[]
}

export interface Region {
    id: number
    name: string
    pokedexes: Pokedex[]
}
