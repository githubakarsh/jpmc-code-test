import { useState, useEffect } from 'react';
import { useHelmet } from '../hooks/useHelmet';
import './assets.scss';
import { sorter } from '../utilities/sortingAlgo';

import { getAssetList } from '../api/getAssetList';

const Assets = () => {
    useHelmet('Assets Page');
    const [assetList, setAssetList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAssetList()
        .then(list => {
            setAssetList(list);
        })
    }, [])


    if(!assetList.length || loading ) {
        return <div>Loading ....</div>
    }

    const setStyle = (assetType: string) => ({
        'Credit' : 'credit-asse',
        'Equities' : 'equity-asset',
        'Macro' : 'macro-asset'
    })[assetType];

    const setPriceStyle = (price : number) => {
        if(price > 0) {
            return 'pos-price';
        } else {
            return 'neg-price';
        }
    }

    const sortAssets = (type: string) => {
        const newList = sorter(type, assetList);
        console.log(newList, "from sorter function");
        setAssetList(Object.assign({}, assetList, newList));
    }

    return <div>
        {assetList.length && <div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => {sortAssets('Ticker')}}>Ticker</th>
                            <th onClick={() => {sortAssets('Price')}}>Price</th>
                            <th onClick={() => {sortAssets('Asset Type')}}>Asset Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetList.map((listItem, index) => {
                        return <tr key={index} className={setStyle(listItem['assetClass'])}>
                                <td>{listItem['ticker']}</td>
                                <td className={setPriceStyle(listItem['price'])}>{listItem['price']}</td>
                                <td >{listItem['assetClass']}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>}
    </div>
    
}

export default Assets;
