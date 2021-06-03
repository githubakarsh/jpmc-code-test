/**
 * 
 * @param {*} filter 
 * @param {*} list 
 * @returns array on type of filter
 *  if the filter is ticker, it will return the array by sorting it alphabetically
 *  if the filter is price, it will return the sorted array by descending order
 *  if the filter is Asset type, it will return the sorted array by the order of ['Equities', 'Macro', 'Credit'].
 */

export const sorter = (filter, list) => {

    if(filter === 'Ticker') {
        list.sort((item1, item2) => {
            return item1.ticker.localeCompare(item2.ticker);
        })
    }

    if(filter === 'Price') {
        list.sort((item1, item2) => {
            // return item1.price - item2.price; // ascending order
            return item2.price - item1.price;
         })
    }

    if(filter === 'Asset Type') {
        const filter = ["Equities", "Macro", "Credit"];
        list.sort((item1, item2) => {
            return filter.indexOf(item1.assetClass) - filter.indexOf(item2.assetClass);
        })
    }

    return list;
}