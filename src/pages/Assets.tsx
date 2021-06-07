import { useState, useEffect, FunctionComponent } from 'react';
import { useHelmet } from '../hooks/useHelmet';
import { sorter } from '../utilities/sortingAlgo';
import { getAssetList } from '../api/getAssetList';
import TableComponent from './TableComponent';
import { tableHeaderTitles, loadingText } from '../constants/constant';

const Assets: FunctionComponent<{}> = () => {
    
    useHelmet('Assets Page');
    
    const [pageState, setAssetList] = useState({
        assets: [],
        loading: false
    });
    
    useEffect(() => {
        setAssetList({ ...pageState, loading: true });
        getAssetList()
            .then(list => {
                setAssetList({ ...pageState, assets: list, loading: false });
            });
    }, []);

    const { assets, loading } = pageState;

    if (!assets?.length || loading) {
        return <div className="loader" id="page-loader">{loadingText}</div>
    }

    const sortAssets = (type: string) => {
        const newList = sorter(type, pageState.assets);
        setAssetList({ ...pageState, assets: newList });
    }

    return <div className="asset-container">
        <TableComponent pageState={pageState} tableHeaderTitles={tableHeaderTitles} sortAssets={sortAssets} />
    </div>;
}

export default Assets;
