/**
 * `Cart item` component.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CartItem (props) {
    const {
        id,
        name,
        price,
        qty,
        removeItemFromCart = Function.prototype
    } = props;

    return (
        <li className="collection-item">
            {name} x{qty} = {(price * qty)} $
            <span className="secondary-content">
                <i className="material-icons cart-item-delete" onClick={() => removeItemFromCart(id)}>close</i>
            </span>
        </li>
    );
};

export {CartItem};
