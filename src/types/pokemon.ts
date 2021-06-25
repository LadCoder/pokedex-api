import { Relation } from './commonTypes'
import { PokedexNumber } from './pokemonSpecies'

export interface Pokemon {
    id: number
    name: string
    pokedexes: PokedexNumber[]
    sprite: string
    types: PokemonTypeSlot[]
}

export type PokemonTypeSlot = {
    slot: number
    type: PokemonType
}

export type PokemonType = Relation

export type PokemonEntries = Relation[]

export const typeColor = {
    bug: '#A8B820',
    dark: '#705848',
    dragon: '#7038F8',
    electric: '#F8D030',
    fairy: '#EE99AC',
    fighting: '#C03028',
    fire: '#F08030',
    flying: '#A890F0',
    ghost: '#705898',
    grass: '#78C850',
    ground: '#E0C068',
    ice: '#98D8D8',
    normal: '#A8A878',
    poison: '#A040A0',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
    water: '#6890F0'
}

export const validTypes = Object.keys(typeColor) as (keyof typeof typeColor)[]
