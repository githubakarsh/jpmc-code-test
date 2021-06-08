import { FunctionComponent } from 'react';

/**
 * Interface for Table props
 */
interface ITableProps {
    pageState: any,
    tableHeaderTitles: any,
    sortAssets: any,
}

/**
 * 
 * @returns a Data table
 * Its a controlled / stateless component where displays the data in tabular format 
 */
const TableComponent: FunctionComponent<ITableProps> = ({ pageState, tableHeaderTitles, sortAssets, }) => {

    const styler = (assetclass) => {
        return assetclass === 'Credit' ? 'credit-asset' : assetclass === 'Equities' ? 'equity-asset' : 'macro-asset';
    }

    let tableComponent = <div>no data to display</div>;

    if(pageState.assets.length) {
        tableComponent = <div>
        <table>
            <thead>
                <tr>
                    {pageState.assets.length && tableHeaderTitles.map((item, index) => {
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
    </div>
    }
    return <section className="table-container">{tableComponent}</section>;
}

export default TableComponent;
