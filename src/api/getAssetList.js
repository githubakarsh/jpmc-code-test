
import { listApiUrl } from '../constants/constant';

export const getAssetList = () => {
    return fetch(listApiUrl)
    .then(data => data.json())
    .catch(error => {
        return error;
    })
}