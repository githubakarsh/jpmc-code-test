

export const getAssetList = () => {
    return fetch('http://localhost:3333/list')
    .then(data => data.json())
    .catch(error => {
        return error;
    })
}