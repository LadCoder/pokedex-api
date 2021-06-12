import { Relation } from './commonTypes'

export interface Region {
    id: number
    name: string
    pokedexes: Relation[]
}
