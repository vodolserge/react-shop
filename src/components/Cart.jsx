import {useContext} from "react";
import {ShopContext} from "../context";

/**
 * `Cart` component.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Cart () {
    const {order = [], handleCartVisibility = Function.prototype} = useContext(ShopContext);

    return (
        <div className="cart blue darken-4 white-text" onClick={handleCartVisibility}>
            <i  className="material-icons">shopping_cart</i>
            {order.length ? <span className="cart-qty">{order.length}</span> : null}
        </div>
    );
}

export {Cart};
