import { useState } from 'react';
import useFetchAssets from "../hooks/useFetchAssets";
import { useHelmet } from '../hooks/useHelmet';
import './assets.scss';
import { sorter } from '../utilities/sortingAlgo';


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

    const sortAssets = (type: string) => {
        sorter(type, response);
    }

    return <div>
        {response.length && <div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => {sortAssets('Ticker')}}>Ticker</th>
                            <th onClick={() => {sortAssets('Price')}}>Price</th>
                            <th onClick={() => {sortAssets('Asset Type')}}>Asset Type</th>
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
