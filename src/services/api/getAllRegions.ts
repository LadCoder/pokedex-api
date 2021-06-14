import { allData } from '../../types/allData'
import { Relation } from '../../types/commonTypes'
import { regionUrl } from './getApiPath'

export const getAllRegions = async (onSet: (data: allData | ((prevData: allData) => allData)) => void) => {
    const url = regionUrl
    await fetch(url)
        .then(async (res) => await res.json())
        .then((pageData) => {
            pageData.results.map(async (region: Relation) => {
                await getRegion(region.url, onSet)
            })
        })
}

export const getRegion = async (regionUrl: string, onSet: (data: allData | ((prevData: allData) => allData)) => void) => {
    await fetch(regionUrl)
        .then(async (res) => await res.json())
        .then(async (region) => {
            onSet((prevData) => {
                return {
                    ...prevData,
                    regions: [...prevData.regions, region]
                }
            })
        })
}
