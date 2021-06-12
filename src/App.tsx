import { Pokedex } from './components/Pokedex'
import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { Pagination } from './types/commonTypes'
import { getAllRegions } from './services/api/getAllRegions'
import { Region } from './types/region'
import { getRegion } from './services/api/getRegion'
import { Button, ButtonBar, ButtonType } from './components/shared/Button'
import { capitalizeName } from './services/capitalizeName'

export function App() {
    const [region, setRegion] = useState<string>()
    const [regionData, setRegionData] = useState<Pagination>()
    const [selectedRegion, setSelectedRegion] = useState<Region>()

    let mounted = true

    useEffect(() => {
        if (mounted) getAllRegions(setRegionData)
        return () => {
            mounted = false
        }
    }, [])

    useEffect(() => {
        if (mounted) getRegion(region, setSelectedRegion)
        return () => {
            mounted = false
        }
    }, [region])

    return (
        <div className={styles.app}>
            <h1>Pokemon</h1>
            {!regionData ? (
                'Loading regions...'
            ) : (
                <div className={styles.regions}>
                    <ButtonBar className={styles.buttons}>
                        {regionData &&
                            regionData.results.map((r, i) => {
                                return <Button type={ButtonType.Secondary} key={i} className={styles.region} onClick={() => setRegion(r.url)} text={capitalizeName(r.name)} />
                            })}
                    </ButtonBar>

                    {region && selectedRegion && <Pokedex region={selectedRegion} />}
                </div>
            )}
        </div>
    )
}
