import { useState } from 'react';
import useFetchAssets from "../hooks/useFetchAssets";
import { useHelmet } from '../hooks/useHelmet';
import './assets.scss';


const Assets = () => {
    const assetsList = useFetchAssets();
    const { error, loading, response } = assetsList;
    useHelmet('Assets Page');
    
    if(loading) {
        return <div>Loading ....</div>
    }

    if(error) {
        return <div>{error}</div>
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

    return <div>
        {response.length && <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Price</th>
                            <th>Asset Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {response.map((listItem, index) => {
                        return <tr key={index} className={setStyle(listItem.assetClass)}>
                                <td>{listItem.ticker}</td>
                                <td className={setPriceStyle(listItem.price)}>{listItem.price}</td>
                                <td >{listItem.assetClass}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>}
    </div>
    
}

export default Assets;
