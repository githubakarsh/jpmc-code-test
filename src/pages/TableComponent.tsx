import { FunctionComponent } from 'react';

interface ITableProps {
    pageState: any,
    tableHeaderTitles: any,
    sortAssets: any,
}

const TableComponent: FunctionComponent<ITableProps> = ({ pageState, tableHeaderTitles, sortAssets, }) => {

    const styler = (assetclass) => {
        return assetclass === 'Credit' ? 'credit-asset' : assetclass === 'Equities' ? 'equity-asset' : 'macro-asset';
    }

    return <section className="table-container">{pageState.assets.length && <div>
        <table>
            <thead>
                <tr>
                    {tableHeaderTitles.map((item, index) => {
                        return <th onClick={() => { sortAssets(item) }}>{item}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {pageState.assets.map((listItem, index) => {
                    return <tr key={index} className={styler(listItem['assetClass'])}>
                        <td>{listItem['ticker']}</td>
                        <td ><span className={`price-container ${listItem['price'] > 0 ? 'pos-price' : 'neg-price'}`}>{listItem['price'].toLocaleString('en-UK', {style:'currency', currency:'GBP'})}</span></td>
                        <td >{listItem['assetClass']}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>}</section>
}

export default TableComponent;
