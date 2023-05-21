import {CartItem} from "./CartItem"
import {useContext} from "react";
import {ShopContext} from "../context";

/**
 * `Cart list` component.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function CartList () {
    const {
        order = [],
        handleCartVisibility = Function.prototype
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, currentValue, currentIndex) => {
        return sum + (currentValue.price * currentValue.qty);
    }, 0);

    const totalPriceEl = order.length ? <li className="collection-item active">
        Total price: {totalPrice} $
    </li> : '';

    return (
        <ul className="collection cart-list">
            <li className="collection-item active">Cart</li>
            {
                order.length ? order.map((orderItem) => {
                    return <CartItem key={orderItem.id} {...orderItem}/>
                }) : <li className="collection-item">Cart is empty</li>
            }
            {totalPriceEl}
            <li className="collection-item">
                <button className="btn btn-small">Checkout</button>
            </li>

            <i className="material-icons cart-close" onClick={handleCartVisibility}>close</i>
        </ul>
    );
}

export {CartList};
