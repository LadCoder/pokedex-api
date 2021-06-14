import { createContext } from 'react'
import { allData } from '../types/allData'
import { PokedexData } from '../types/pokedex'
import { Pokemon } from '../types/pokemon'
import { RegionData } from '../types/region'

export const RegionContext = createContext({
    regions: [] as RegionData[],
    pokedexes: [] as PokedexData[],
    pokemons: [] as Pokemon[],
    setData: (allData: allData) => {}
})
