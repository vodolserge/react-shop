import {useContext} from "react";
import {ShopContext} from "../context";

/**
 * `Cart item` component.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CartItem (props) {
    const {id, name, price, qty} = props;
    const {increaseItemsQty, decreaseItemsQty, removeItemFromCart} = useContext(ShopContext);

    return (
        <li className="collection-item" >
            {name}
            <i className="material-icons cart-items-qty-controls"
               onClick={() => {increaseItemsQty(id)}}>add</i>x{qty}
            <i className="material-icons cart-items-qty-controls"
               onClick={() => {decreaseItemsQty(id)}}>remove</i> = {(price * qty)} $
            <span className="secondary-content">
                <i className="material-icons cart-item-delete" onClick={() => removeItemFromCart(id)}>close</i>
            </span>
        </li>
    );
};

export {CartItem};
