import {CartItem} from "./CartItem"

/**
 * `Cart list` component.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CartList (props) {
    const {
        qty = 0,
        order = [],
        handleCartVisibility = Function.prototype,
        removeItemFromCart = Function.prototype,
        increaseItemsQty = Function.prototype,
        decreaseItemsQty = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, currentValue, currentIndex) => {
        return sum + (currentValue.price * currentValue.qty);
    }, 0);
    const totalPriceEl = qty ? <li className="collection-item active">
        Total price: {totalPrice} $
    </li> : '';

    return (
        <ul className="collection cart-list">
            <li className="collection-item active">Cart</li>
            {
                order.length ? order.map((orderItem) => {
                    return <CartItem
                        key={orderItem.id} {...orderItem}
                        removeItemFromCart={removeItemFromCart}
                        increaseItemsQty={increaseItemsQty}
                        decreaseItemsQty={decreaseItemsQty}
                    />
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
