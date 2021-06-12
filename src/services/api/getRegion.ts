import { Region } from '../../types/region'

export const getRegion = (regionUrl: string, onSet: (region: Region) => void) => {
    fetch(regionUrl).then(async (res) => onSet(await res.json()))
}
