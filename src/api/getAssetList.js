
import { listApiUrl } from '../constants/constant';

/**
 * 
 * @returns List of assets from local api API server
 */

export const getAssetList = () => {
    return fetch(listApiUrl)
    .then(data => data.json())
    .catch(error => {
        return error;
    })
}