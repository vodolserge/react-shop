import {GoodsItem} from "./GoodsItem"

/**
 *  `Goods list` component.
 *
 * @constructor
 */
function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length) {
        return <h3>Nothing found</h3>;
    }

    const goodsFiltered = goods.filter((item) => item['price']['finalPrice'] > 0);

    return (
        <div className="goods">
            {goodsFiltered.map((item) => (
                <GoodsItem key={item['mainId']} {...item}/>
            ))}
        </div>
    );
}

export {GoodsList};
