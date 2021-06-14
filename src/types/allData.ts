import { PokedexData } from './pokedex'
import { Pokemon } from './pokemon'
import { Region, RegionData } from './region'

export interface allData {
    regions: RegionData[]
    pokedex: PokedexData[]
    pokemon: Pokemon[]
}

export const defaultData: allData = {
    regions: [],
    pokedex: [],
    pokemon: []
}
