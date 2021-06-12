import { Pagination } from '../../types/commonTypes'
import { regionUrl } from './getApiPath'

export const getAllRegions = async (onSet: (regions: Pagination) => void) => {
    const url = regionUrl

    await fetch(url).then(async (res) => onSet(await res.json()))
}
