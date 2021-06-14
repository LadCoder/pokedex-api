import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { Button, ButtonBar, ButtonType } from './components/shared/Button'
import { capitalizeName } from './services/capitalizeName'
import { allData, defaultData } from './types/allData'
import { getAllRegions } from './services/api/getAllRegions'
import { getPokedexFromRegion } from './services/api/getPokedexFromRegion'
import { RegionContext } from './contexts/RegionContext'
import { Pokedex } from './components/Pokedex'

export function App() {
    const [data, setData] = useState<allData>(defaultData)
    const [selectedRegion, setSelectedRegion] = useState<string>('')

    let mounted = true

    useEffect(() => {
        if (mounted && data.regions.length === 0) getAllRegions(setData)
        return () => {
            mounted = false
        }
    }, [])

    useEffect(() => {
        const isRegion = data.regions.find((r) => r.name === selectedRegion)
        if (!isRegion) return

        const isPokedex = data.pokedex.find((r) => r.region.name === isRegion.name)

        if (isPokedex) {
        } else {
            getPokedexFromRegion(data.pokemon, isRegion, setData)
        }
    }, [selectedRegion])

    const regionData = data.regions.find((r) => r.name === selectedRegion)

    return (
        <div className={styles.app}>
            <h1>Pokemon</h1>
            <RegionContext.Provider
                value={{
                    regions: data.regions,
                    pokedexes: data.pokedex,
                    pokemons: data.pokemon,
                    setData: setData
                }}>
                {!data ? (
                    'Loading regions...'
                ) : (
                    <div className={styles.regions}>
                        <ButtonBar className={styles.buttons}>
                            {data.regions &&
                                data.regions.map((r, i) => {
                                    return <Button type={ButtonType.Secondary} key={i} className={styles.region} onClick={() => setSelectedRegion(r.name)} text={capitalizeName(r.name)} />
                                })}
                        </ButtonBar>

                        {regionData && selectedRegion && <Pokedex region={regionData} />}
                    </div>
                )}
            </RegionContext.Provider>
        </div>
    )
}
